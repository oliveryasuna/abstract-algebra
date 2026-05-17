import * as fc from 'fast-check';
import type {BooleanElement} from '../src/group/structures/impl/boolean-group';
import type {IntegerElement} from '../src/group/structures/impl/integer-additive-group';
import {integerElement} from '../src/group/structures/impl/integer-additive-group';
import type {PermutationElement} from '../src/group/structures/impl/symmetric-group';
import {symmetricGroup, permutation} from '../src/group/structures/impl/symmetric-group';
import type {ZnElement} from '../src/group/structures/impl/zn';
import {zn, znElement} from '../src/group/structures/impl/zn';
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

export {
  arbZn,
  arbPermutation,
  arbBoolean,
  arbInteger,
  arbIntegerNonZero,
  arbRational,
  arbRationalNonZero,
  arbQuaternion,
  arbQuaternionNonZero
};
