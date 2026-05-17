import type {Field} from '../../../composed';
import type {Semigroup} from '../../../group';
import type {Ordered} from '../../../properties';
import {bigintAbs, bigintGcd} from '../../../utils';

/**
 * Branded rational number element, stored as a normalized numerator/denominator pair.
 *
 * Invariants: denominator > 0, gcd(|numerator|, denominator) = 1.
 */
type RationalElement = ({
  readonly num: bigint;
  readonly den: bigint;
} & {readonly __brand: (unique symbol);});

/**
 * The field of rational numbers (Q, +, *).
 */
type RationalField = (Field<RationalElement> & Ordered<RationalElement>);

// eslint-disable-next-line max-lines-per-function
const rationalField = ((): RationalField => {
  const normalize = ((num: bigint, den: bigint): RationalElement => {
    if(den === 0n) {
      throw (new RangeError('Denominator cannot be zero.'));
    }

    // Ensure denominator is positive.
    const sign = ((den < 0n) ? -1n : 1n);
    let n = (num * sign);
    let d = (den * sign);

    // Reduce by GCD.
    const g = bigintAbs(bigintGcd(n, d));

    n /= g;
    d /= g;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    return ({
      num: n,
      den: d
    } as RationalElement);
  });

  const zero = normalize(0n, 1n);
  const one = normalize(1n, 1n);

  const equals = ((a: RationalElement, b: RationalElement): boolean =>
    ((a.num === b.num) && (a.den === b.den)));

  const has = ((value: unknown): value is RationalElement =>
    ((value !== null)
      && (typeof value === 'object')
      && ('num' in value)
      && ('den' in value)
      && (typeof value.num === 'bigint')
      && (typeof value.den === 'bigint')
      && (value.den > 0n)));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const addSemigroup: Semigroup<RationalElement> = (({
    op: ((a: RationalElement, b: RationalElement): RationalElement =>
      normalize(((a.num * b.den) + (b.num * a.den)), (a.den * b.den))),
    has: has,
    equals: equals
  } as unknown) as Semigroup<RationalElement>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mulSemigroup: Semigroup<RationalElement> = (({
    op: ((a: RationalElement, b: RationalElement): RationalElement =>
      normalize((a.num * b.num), (a.den * b.den))),
    has: has,
    equals: equals
  } as unknown) as Semigroup<RationalElement>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    add: {
      ...addSemigroup,
      identity: zero,

      inverse: ((a: RationalElement): RationalElement => normalize(-a.num, a.den)),
      leftDiv: ((a: RationalElement, b: RationalElement): RationalElement =>
        normalize(((b.num * a.den) - (a.num * b.den)), (a.den * b.den))),
      rightDiv: ((a: RationalElement, b: RationalElement): RationalElement =>
        normalize(((a.num * b.den) - (b.num * a.den)), (a.den * b.den)))
    },
    mul: {
      ...mulSemigroup,
      identity: one
    },

    mulInverse: ((a: RationalElement): RationalElement => {
      if(a.num === 0n) {
        throw (new RangeError('Zero has no multiplicative inverse.'));
      }

      return normalize(a.den, a.num);
    }),

    norm: ((a: RationalElement): bigint => {
      if(a.num === 0n) {
        return 0n;
      }

      return 1n;
    }),

    divMod: ((a: RationalElement, b: RationalElement): {quot: RationalElement;
      rem: RationalElement;} => {
      if(b.num === 0n) {
        throw (new RangeError('Division by zero.'));
      }

      // In a field, divMod is exact: a / b with remainder 0.
      return ({
        quot: normalize((a.num * b.den), (a.den * b.num)),
        rem: zero
      });
    }),

    compare: ((a: RationalElement, b: RationalElement): (-1 | 0 | 1) => {
      const diff = ((a.num * b.den) - (b.num * a.den));

      if(diff < 0n) {
        return -1;
      }

      if(diff > 0n) {
        return 1;
      }

      return 0;
    })
  } as unknown) as RationalField);
});

/**
 * Creates a rational element from numerator and denominator.
 *
 * @param num - The numerator.
 * @param den - The denominator (must be non-zero).
 * @returns The normalized rational element.
 * @throws {RangeError} If {@link den} is zero.
 */
// eslint-disable-next-line sonarjs/no-identical-functions
const rational = ((num: bigint, den = 1n): RationalElement => {
  if(den === 0n) {
    throw (new RangeError('Denominator cannot be zero.'));
  }

  const sign = ((den < 0n) ? -1n : 1n);
  let n = (num * sign);
  let d = (den * sign);

  const g = bigintAbs(bigintGcd(n, d));

  n /= g;
  d /= g;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return ({
    num: n,
    den: d
  } as RationalElement);
});

export type {
  RationalElement,
  RationalField
};
export {
  rationalField,
  rational
};
