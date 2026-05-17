/* eslint-disable max-lines */
import type {CommutativeRing, EuclideanDomain, Field} from '../../../composed';
import type {Semigroup} from '../../../group';

/**
 * Branded polynomial element, stored as a coefficient array.
 *
 * coeffs[i] is the coefficient of x^i. Trailing zeros are stripped
 * (the leading coefficient is always non-zero, except for the zero polynomial
 * which is represented as an empty array).
 *
 * @typeParam TCoeff - The coefficient type from the base ring.
 */
type PolynomialElement<TCoeff> = ({
  readonly coeffs: (readonly TCoeff[]);
} & {readonly __brand: (unique symbol);});

/**
 * Polynomial ring R[x] over a commutative ring R.
 *
 * @typeParam TCoeff - The coefficient type from the base ring.
 */
type PolynomialRing<TCoeff> = (CommutativeRing<PolynomialElement<TCoeff>> & {
  readonly baseRing: CommutativeRing<TCoeff>;
});

/**
 * Polynomial ring F[x] over a field F, which forms a Euclidean domain.
 *
 * @typeParam TCoeff - The coefficient type from the base field.
 */
type PolynomialEuclideanDomain<TCoeff> = (EuclideanDomain<PolynomialElement<TCoeff>> & {
  readonly baseRing: Field<TCoeff>;
});

/**
 * Creates a polynomial ring R[x] over a commutative ring R.
 *
 * @param baseRing - The coefficient ring.
 * @returns The polynomial ring.
 */
// eslint-disable-next-line max-lines-per-function
const polynomialRing = (<TCoeff>(baseRing: CommutativeRing<TCoeff>): PolynomialRing<TCoeff> => {
  type P = PolynomialElement<TCoeff>;

  const strip = ((coeffs: TCoeff[]): TCoeff[] => {
    let i = (coeffs.length - 1);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    while((i >= 0) && baseRing.add.equals(coeffs[i]!, baseRing.add.identity)) {
      i--;
    }

    return coeffs.slice(0, (i + 1));
  });

  const mk = ((coeffs: TCoeff[]): P =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    (({coeffs: strip(coeffs)} as unknown) as P)
  );

  const zero = mk([]);
  const one = mk([baseRing.mul.identity]);

  const equals = ((a: P, b: P): boolean => {
    if(a.coeffs.length !== b.coeffs.length) {
      return false;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return a.coeffs.every(((c, i) => baseRing.add.equals(c, b.coeffs[i]!)));
  });

  const has = ((value: unknown): value is P =>
    ((value !== null)
      && (typeof value === 'object')
      && ('coeffs' in value)
      && Array.isArray((value as {coeffs: unknown;}).coeffs)));

  const add = ((a: P, b: P): P => {
    const len = Math.max(a.coeffs.length, b.coeffs.length);
    const result: TCoeff[] = [];

    for(let i = 0; i < len; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const ai = ((i < a.coeffs.length) ? a.coeffs[i]! : baseRing.add.identity);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const bi = ((i < b.coeffs.length) ? b.coeffs[i]! : baseRing.add.identity);

      result.push(baseRing.add.op(ai, bi));
    }

    return mk(result);
  });

  const negate = ((a: P): P =>
    mk(a.coeffs.map((c => baseRing.add.inverse(c)))));

  const multiply = ((a: P, b: P): P => {
    if((a.coeffs.length === 0) || (b.coeffs.length === 0)) {
      return zero;
    }

    const len = ((a.coeffs.length + b.coeffs.length) - 1);
    const result: TCoeff[] = Array.from({length: len}, (() => baseRing.add.identity));

    for(let i = 0; i < a.coeffs.length; i++) {
      for(let j = 0; j < b.coeffs.length; j++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        result[i + j] = baseRing.add.op(result[i + j]!, baseRing.mul.op(a.coeffs[i]!, b.coeffs[j]!));
      }
    }

    return mk(result);
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const addSemigroup: Semigroup<P> = (({
    op: add,
    has: has,
    equals: equals
  } as unknown) as Semigroup<P>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mulSemigroup: Semigroup<P> = (({
    op: multiply,
    has: has,
    equals: equals
  } as unknown) as Semigroup<P>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    baseRing: baseRing,

    add: {
      ...addSemigroup,
      identity: zero,
      inverse: negate,
      leftDiv: ((a: P, b: P): P => add(negate(a), b)),
      rightDiv: ((a: P, b: P): P => add(a, negate(b)))
    },

    mul: {
      ...mulSemigroup,
      identity: one
    }
  } as unknown) as PolynomialRing<TCoeff>);
});

/**
 * Creates a polynomial Euclidean domain F[x] over a field F.
 *
 * F[x] is a Euclidean domain with the degree function as the norm
 * and polynomial long division as divMod.
 *
 * @param baseField - The coefficient field.
 * @returns The polynomial Euclidean domain.
 */
// eslint-disable-next-line max-lines-per-function
const polynomialEuclideanDomain = (<TCoeff>(baseField: Field<TCoeff>): PolynomialEuclideanDomain<TCoeff> => {
  type P = PolynomialElement<TCoeff>;

  const ring = polynomialRing(baseField);

  const degree = ((p: P): number => {
    if(p.coeffs.length === 0) {
      return -1;
    }

    return (p.coeffs.length - 1);
  });

  const leadingCoeff = ((p: P): TCoeff => {
    if(p.coeffs.length === 0) {
      return baseField.add.identity;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return p.coeffs.at(-1)!;
  });

  const scaleByMonomial = ((p: P, coeff: TCoeff, deg: number): P => {
    if(p.coeffs.length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      return (({coeffs: []} as unknown) as P);
    }

    const padded: TCoeff[] = Array.from({length: deg}, (() => baseField.add.identity));

    for(const c of p.coeffs) {
      padded.push(baseField.mul.op(coeff, c));
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    return (({coeffs: padded} as unknown) as P);
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    ...ring,

    norm: ((a: P): bigint => {
      if(a.coeffs.length === 0) {
        return 0n;
      }

      return BigInt(degree(a));
    }),

    // eslint-disable-next-line max-statements
    divMod: ((a: P, b: P): {
      quot: P;
      rem: P;
    } => {
      if(b.coeffs.length === 0) {
        throw (new RangeError('Division by zero polynomial.'));
      }

      const bLeadInv = baseField.mulInverse(leadingCoeff(b));

      let rem = a;
      const quotCoeffs: TCoeff[] = Array.from(
        {length: Math.max(0, ((degree(a) - degree(b)) + 1))},
        (() => baseField.add.identity)
      );

      while((degree(rem) >= degree(b)) && (rem.coeffs.length > 0)) {
        const degDiff = (degree(rem) - degree(b));
        const coeff = baseField.mul.op(leadingCoeff(rem), bLeadInv);

        quotCoeffs[degDiff] = coeff;

        const subtrahend = scaleByMonomial(b, coeff, degDiff);

        rem = ring.add.op(rem, ring.add.inverse(subtrahend));
      }

      // Strip trailing zeros from quotient.
      let qi = (quotCoeffs.length - 1);

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      while((qi >= 0) && baseField.add.equals(quotCoeffs[qi]!, baseField.add.identity)) {
        qi--;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      const quot = (({coeffs: quotCoeffs.slice(0, (qi + 1))} as unknown) as P);

      return ({
        quot: quot,
        rem: rem
      });
    })
  } as unknown) as PolynomialEuclideanDomain<TCoeff>);
});

/**
 * Creates a polynomial element from coefficients.
 *
 * @param ring - The polynomial ring.
 * @param coeffs - Coefficients in ascending degree order (coeffs[i] = coefficient of x^i).
 * @returns The polynomial element.
 */
const polynomial = (<TCoeff>(ring: PolynomialRing<TCoeff>, ...coeffs: TCoeff[]): PolynomialElement<TCoeff> => {
  // Strip trailing zeros.
  let i = (coeffs.length - 1);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  while((i >= 0) && ring.baseRing.add.equals(coeffs[i]!, ring.baseRing.add.identity)) {
    i--;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({coeffs: coeffs.slice(0, (i + 1))} as unknown) as PolynomialElement<TCoeff>);
});

/**
 * Returns the degree of a polynomial (-1 for the zero polynomial).
 *
 * @param p - The polynomial.
 * @returns The degree.
 */
// eslint-disable-next-line sonarjs/no-identical-functions
const polynomialDegree = (<TCoeff>(p: PolynomialElement<TCoeff>): number => {
  if(p.coeffs.length === 0) {
    return -1;
  }

  return (p.coeffs.length - 1);
});

/**
 * Evaluates a polynomial at a given point using Horner's method.
 *
 * @param ring - The polynomial ring.
 * @param p - The polynomial.
 * @param x - The point to evaluate at.
 * @returns p(x).
 */
const polynomialEvaluate = (<TCoeff>(ring: PolynomialRing<TCoeff>, p: PolynomialElement<TCoeff>, x: TCoeff): TCoeff => {
  const base = ring.baseRing;

  if(p.coeffs.length === 0) {
    return base.add.identity;
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  let result: TCoeff = p.coeffs.at(-1)!;

  for(let i = (p.coeffs.length - 2); i >= 0; i--) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    result = base.add.op(base.mul.op(result, x), p.coeffs[i]!);
  }

  return result;
});

export type {
  PolynomialElement,
  PolynomialRing,
  PolynomialEuclideanDomain
};
export {
  polynomialRing,
  polynomialEuclideanDomain,
  polynomial,
  polynomialDegree,
  polynomialEvaluate
};
