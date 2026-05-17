import * as fc from 'fast-check';
import type {BooleanElement} from '../src/group/structures/impl/boolean-group';
import type {IntegerElement} from '../src/group/structures/impl/integer-additive-group';
import {integerElement} from '../src/group/structures/impl/integer-additive-group';
import type {PermutationElement} from '../src/group/structures/impl/symmetric-group';
import {symmetricGroup, permutation} from '../src/group/structures/impl/symmetric-group';
import type {ZnElement} from '../src/group/structures/impl/zn';
import {zn, znElement} from '../src/group/structures/impl/zn';
import type {MatrixElement, MatrixRing} from '../src/ring/structures/impl/matrix-ring';
import {matrix} from '../src/ring/structures/impl/matrix-ring';
import type {PolynomialElement, PolynomialRing} from '../src/ring/structures/impl/polynomial-ring';
import {polynomial} from '../src/ring/structures/impl/polynomial-ring';
import type {QuaternionElement} from '../src/ring/structures/impl/quaternion-ring';
import {quaternion} from '../src/ring/structures/impl/quaternion-ring';
import type {RationalElement} from '../src/ring/structures/impl/rational-field';
import {rational} from '../src/ring/structures/impl/rational-field';

const arbZn = ((n: bigint): fc.Arbitrary<ZnElement> => {
  const g = zn(n);

  return fc.bigInt({
    min: 0n,
    max: (n - 1n)
  }).map((v => znElement(g, v)));
});

const arbPermutation = ((n: number): fc.Arbitrary<PermutationElement> => {
  const sn = symmetricGroup(n);

  return fc.shuffledSubarray(
    Array.from({length: n}, ((_, i) => i)),
    {
      minLength: n,
      maxLength: n
    }
  ).map((arr => permutation(sn, arr)));
});

const arbBoolean: fc.Arbitrary<BooleanElement> = (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  fc.boolean() as fc.Arbitrary<BooleanElement>
);

const arbInteger: fc.Arbitrary<IntegerElement> = (
  fc.bigInt({
    min: -1000n,
    max: 1000n
  }).map((v => integerElement(v)))
);

const arbIntegerNonZero: fc.Arbitrary<IntegerElement> = (
  fc.bigInt({
    min: -1000n,
    max: 1000n
  })
    .filter((v => (v !== 0n)))
    .map((v => integerElement(v)))
);

const arbRational: fc.Arbitrary<RationalElement> = (
  fc.tuple(
    fc.bigInt({
      min: -100n,
      max: 100n
    }),
    fc.bigInt({
      min: 1n,
      max: 100n
    })
  ).map((([num, den]) => rational(num, den)))
);

const arbRationalNonZero: fc.Arbitrary<RationalElement> = (
  fc.tuple(
    fc.bigInt({
      min: -100n,
      max: 100n
    }).filter((v => (v !== 0n))),
    fc.bigInt({
      min: 1n,
      max: 100n
    })
  ).map((([num, den]) => rational(num, den)))
);

const arbQuaternion: fc.Arbitrary<QuaternionElement> = (
  fc.tuple(
    fc.double({
      min: -10,
      max: 10,
      noNaN: true,
      noDefaultInfinity: true
    }),
    fc.double({
      min: -10,
      max: 10,
      noNaN: true,
      noDefaultInfinity: true
    }),
    fc.double({
      min: -10,
      max: 10,
      noNaN: true,
      noDefaultInfinity: true
    }),
    fc.double({
      min: -10,
      max: 10,
      noNaN: true,
      noDefaultInfinity: true
    })
  ).map((([a, b, c, d]) => quaternion(a, b, c, d)))
);

const arbQuaternionNonZero: fc.Arbitrary<QuaternionElement> = (
  arbQuaternion.filter((q => (((((q.a * q.a) + (q.b * q.b)) + (q.c * q.c)) + (q.d * q.d)) > 1e-8)))
);

/**
 * Creates an arbitrary for polynomials over a commutative ring, given
 * an arbitrary for the coefficient type.
 *
 * @param ring - The polynomial ring.
 * @param arbCoeff - Arbitrary for coefficients.
 * @param maxDegree - Maximum degree of generated polynomials.
 * @returns An arbitrary for polynomials over a commutative ring.
 */
const arbPolynomial = (<TCoeff>(
  ring: PolynomialRing<TCoeff>,
  arbCoeff: fc.Arbitrary<TCoeff>,
  maxDegree = 5
): fc.Arbitrary<PolynomialElement<TCoeff>> =>
  fc.array(arbCoeff, {
    minLength: 0,
    maxLength: (maxDegree + 1)
  })
    .map((coeffs => polynomial(ring, ...coeffs))));

/**
 * Creates an arbitrary for non-zero polynomials (at least one non-zero coefficient).
 * @param ring - The polynomial ring.
 * @param arbCoeffNonZero - Arbitrary for non-zero coefficients.
 * @param arbCoeff - Arbitrary for coefficients.
 * @param maxDegree - Maximum degree of generated polynomials.
 * @returns An arbitrary for non-zero polynomials (at least one non-zero coefficient).
 */
const arbPolynomialNonZero = (<TCoeff>(
  ring: PolynomialRing<TCoeff>,
  arbCoeffNonZero: fc.Arbitrary<TCoeff>,
  arbCoeff: fc.Arbitrary<TCoeff>,
  maxDegree = 5
): fc.Arbitrary<PolynomialElement<TCoeff>> =>
  fc.tuple(
    fc.array(arbCoeff, {
      minLength: 0,
      maxLength: maxDegree
    }),
    arbCoeffNonZero
  ).map((([rest, leading]) => polynomial(ring, ...rest, leading))));

/**
 * Creates an arbitrary for n×n matrices over a commutative ring, given
 * an arbitrary for the entry type.
 *
 * @param ring - The matrix ring.
 * @param arbEntry - Arbitrary for entries.
 * @returns An arbitrary for n×n matrices over a commutative ring.
 */
const arbMatrix = (<TEntry>(
  ring: MatrixRing<TEntry>,
  arbEntry: fc.Arbitrary<TEntry>
): fc.Arbitrary<MatrixElement<TEntry>> =>
  fc.array(arbEntry, {
    minLength: (ring.size * ring.size),
    maxLength: (ring.size * ring.size)
  })
    .map((entries => matrix(ring, entries))));

export {
  arbZn,
  arbPermutation,
  arbBoolean,
  arbInteger,
  arbIntegerNonZero,
  arbRational,
  arbRationalNonZero,
  arbQuaternion,
  arbQuaternionNonZero,
  arbPolynomial,
  arbPolynomialNonZero,
  arbMatrix
};
