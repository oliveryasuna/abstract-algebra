/* eslint-disable sonarjs/assertions-in-tests */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as fc from 'fast-check';
import {describe, it} from 'vitest';
import type {BooleanElement, IntegerElement, PermutationElement, ZnElement} from '../src';
import {
  repeat,
  power,
  groupPower,
  booleanGroup,
  integerAdditiveGroup,
  integerElement,
  symmetricGroup,
  permutation,
  zn,
  znElement,
  gcd,
  lcm,
  scalarMul,
  ringPow,
  fieldPow,
  characteristicBounded,
  booleanRing,
  integerRing,
  znRing,
  zpField
} from '../src';
import {
  groupLaws,
  commutativityLaw,
  commutativeRingLaws,
  euclideanDomainLaws,
  fieldLaws
} from './laws';

//==================================================
// Arbitraries
//==================================================

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

//==================================================
// Helper
//==================================================

const runLaws = ((laws: Record<string, unknown>) => {
  for(const [name, law] of Object.entries(laws)) {
    if((law !== null) && (typeof law === 'object') && !('generate' in law)) {
      // Nested law group (e.g., additiveGroupLaws)
      describe(name, (() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        runLaws(law as Record<string, unknown>);
      }));
    } else {
      it(name, (() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        fc.assert((law as fc.IProperty<unknown>), {numRuns: 200});
      }));
    }
  }
});

//==================================================
// Group tests
//==================================================

describe('Z/7Z additive group', (() => {
  const Z7 = zn(7n);
  const arb = arbZn(7n);

  runLaws(groupLaws(Z7, arb));
  runLaws(commutativityLaw(Z7, arb));
}));

describe('Z/1Z additive group (trivial)', (() => {
  const Z1 = zn(1n);
  const arb = arbZn(1n);

  runLaws(groupLaws(Z1, arb));
}));

describe('S(3) symmetric group', (() => {
  const S3 = symmetricGroup(3);
  const arb = arbPermutation(3);

  runLaws(groupLaws(S3, arb));
}));

describe('S(4) symmetric group', (() => {
  const S4 = symmetricGroup(4);
  const arb = arbPermutation(4);

  runLaws(groupLaws(S4, arb));
}));

describe('Boolean XOR group', (() => {
  runLaws(groupLaws(booleanGroup(), arbBoolean));
  runLaws(commutativityLaw(booleanGroup(), arbBoolean));
}));

describe('Integer additive group', (() => {
  const Z = integerAdditiveGroup();

  runLaws(groupLaws(Z, arbInteger));
  runLaws(commutativityLaw(Z, arbInteger));
}));

//==================================================
// Ring tests
//==================================================

describe('Integer ring (Z)', (() => {
  const Z = integerAdditiveGroup();
  const ZRing = integerRing(Z);

  runLaws(euclideanDomainLaws(ZRing, arbIntegerNonZero));
  runLaws(commutativeRingLaws(ZRing, arbInteger));
}));

describe('Z/6Z ring', (() => {
  const Z6 = zn(6n);
  const Z6Ring = znRing(Z6);
  const arb = arbZn(6n);

  runLaws(commutativeRingLaws(Z6Ring, arb));
}));

describe('Z/12Z ring', (() => {
  const Z12 = zn(12n);
  const Z12Ring = znRing(Z12);
  const arb = arbZn(12n);

  runLaws(commutativeRingLaws(Z12Ring, arb));
}));

describe('Boolean ring ({false, true}, XOR, AND)', (() => {
  const BRing = booleanRing(booleanGroup());

  runLaws(commutativeRingLaws(BRing, arbBoolean));
}));

//==================================================
// Field tests
//==================================================

describe('Z/5Z field (GF(5))', (() => {
  const Z5 = zn(5n);
  const Z5Ring = znRing(Z5);
  const GF5 = zpField(Z5Ring);
  const arb = arbZn(5n);
  const arbNonZero = fc.bigInt({
    min: 1n,
    max: 4n
  }).map((v => znElement(Z5, v)));

  runLaws(fieldLaws(GF5, arb, arbNonZero));
}));

describe('Z/7Z field (GF(7))', (() => {
  const Z7 = zn(7n);
  const Z7Ring = znRing(Z7);
  const GF7 = zpField(Z7Ring);
  const arb = arbZn(7n);
  const arbNonZero = fc.bigInt({
    min: 1n,
    max: 6n
  }).map((v => znElement(Z7, v)));

  runLaws(fieldLaws(GF7, arb, arbNonZero));
}));

describe('Z/2Z field (GF(2))', (() => {
  const Z2 = zn(2n);
  const Z2Ring = znRing(Z2);
  const GF2 = zpField(Z2Ring);
  const arb = arbZn(2n);
  const arbNonZero = fc.constant(znElement(Z2, 1n));

  runLaws(fieldLaws(GF2, arb, arbNonZero));
}));

//==================================================
// Group function tests
//==================================================

describe('Group functions', (() => {
  const Z7 = zn(7n);
  const arb = arbZn(7n);

  describe('repeat', (() => {
    it('repeat(a, 1) = a', (() => {
      fc.assert(fc.property(arb, (a => Z7.equals(repeat(Z7, a, 1n), a))));
    }));

    it('repeat(a, 2) = op(a, a)', (() => {
      fc.assert(fc.property(arb, (a => Z7.equals(repeat(Z7, a, 2n), Z7.op(a, a)))));
    }));

    it('repeat(a, m+n) = op(repeat(a, m), repeat(a, n))', (() => {
      fc.assert(fc.property(
        arb,
        fc.bigInt({
          min: 1n,
          max: 20n
        }),
        fc.bigInt({
          min: 1n,
          max: 20n
        }),
        ((a, m, n) => Z7.equals(
          repeat(Z7, a, (m + n)),
          Z7.op(repeat(Z7, a, m), repeat(Z7, a, n))
        ))
      ));
    }));
  }));

  describe('power', (() => {
    it('power(a, 0) = identity', (() => {
      fc.assert(fc.property(arb, (a => Z7.equals(power(Z7, a, 0n), Z7.identity))));
    }));
  }));

  describe('groupPower', (() => {
    it('groupPower(a, -1) = inverse(a)', (() => {
      fc.assert(fc.property(arb, (a => Z7.equals(groupPower(Z7, a, -1n), Z7.inverse(a)))));
    }));

    it('groupPower(a, n) * groupPower(a, -n) = identity', (() => {
      fc.assert(fc.property(
        arb,
        fc.bigInt({
          min: 0n,
          max: 20n
        }),
        ((a, n) => Z7.equals(
          Z7.op(groupPower(Z7, a, n), groupPower(Z7, a, -n)),
          Z7.identity
        ))
      ));
    }));
  }));
}));

//==================================================
// Ring function tests
//==================================================

describe('Ring functions', (() => {
  const Z = integerAdditiveGroup();
  const ZRing = integerRing(Z);
  const mk = integerElement;

  describe('gcd', (() => {
    it('gcd(12, 8) = 4', (() => {
      const result = gcd(ZRing, mk(12n), mk(8n));

      fc.assert(fc.property(fc.constant(0), (() => ZRing.add.equals(result, mk(4n)))));
    }));

    it('gcd(a, 0) = a', (() => {
      fc.assert(fc.property(arbIntegerNonZero, ((a) => {
        const result = gcd(ZRing, a, mk(0n));

        return ZRing.add.equals(result, a);
      })));
    }));

    it('gcd(a, a) = a', (() => {
      fc.assert(fc.property(arbIntegerNonZero, ((a) => {
        const result = gcd(ZRing, a, a);

        return ZRing.add.equals(result, a);
      })));
    }));
  }));

  describe('lcm', (() => {
    it('lcm(4, 6) = 12', (() => {
      const result = lcm(ZRing, mk(4n), mk(6n));

      fc.assert(fc.property(fc.constant(0), (() => ZRing.add.equals(result, mk(12n)))));
    }));

    it('lcm(a, 0) = 0', (() => {
      fc.assert(fc.property(arbIntegerNonZero, (a => ZRing.add.equals(lcm(ZRing, a, mk(0n)), mk(0n)))));
    }));
  }));

  describe('scalarMul', (() => {
    it('scalarMul(a, 0) = zero', (() => {
      fc.assert(fc.property(arbInteger, (a => ZRing.add.equals(scalarMul(ZRing, a, 0n), mk(0n)))));
    }));

    it('scalarMul(a, 1) = a', (() => {
      fc.assert(fc.property(arbInteger, (a => ZRing.add.equals(scalarMul(ZRing, a, 1n), a))));
    }));

    it('scalarMul(a, -1) = inverse(a)', (() => {
      fc.assert(fc.property(arbInteger, (a => ZRing.add.equals(scalarMul(ZRing, a, -1n), ZRing.add.inverse(a)))));
    }));
  }));

  describe('ringPow', (() => {
    it('ringPow(a, 0) = one', (() => {
      fc.assert(fc.property(arbInteger, (a => ZRing.mul.equals(ringPow(ZRing, a, 0n), mk(1n)))));
    }));

    it('ringPow(a, 1) = a', (() => {
      fc.assert(fc.property(arbInteger, (a => ZRing.mul.equals(ringPow(ZRing, a, 1n), a))));
    }));

    it('ringPow(a, 2) = a * a', (() => {
      fc.assert(fc.property(arbInteger, (a => ZRing.mul.equals(ringPow(ZRing, a, 2n), ZRing.mul.op(a, a)))));
    }));
  }));

  describe('fieldPow', (() => {
    const Z5 = zn(5n);
    const Z5Ring = znRing(Z5);
    const GF5 = zpField(Z5Ring);
    const arbGF5NonZero = fc.bigInt({
      min: 1n,
      max: 4n
    }).map((v => znElement(Z5, v)));

    it('fieldPow(a, -1) = mulInverse(a)', (() => {
      fc.assert(fc.property(arbGF5NonZero, (a => GF5.mul.equals(fieldPow(GF5, a, -1n), GF5.mulInverse(a)))));
    }));

    it('fieldPow(a, n) * fieldPow(a, -n) = one', (() => {
      fc.assert(fc.property(
        arbGF5NonZero,
        fc.bigInt({
          min: 1n,
          max: 10n
        }),
        ((a, n) => GF5.mul.equals(
          GF5.mul.op(fieldPow(GF5, a, n), fieldPow(GF5, a, -n)),
          GF5.mul.identity
        ))
      ));
    }));
  }));

  describe('characteristicBounded', (() => {
    it('char(Z) = 0 (not found within bound)', (() => {
      const Z = integerAdditiveGroup();
      const ZRing = integerRing(Z);

      fc.assert(fc.property(fc.constant(0), (() => (characteristicBounded(ZRing, 1000n) === 0n))));
    }));

    it('char(GF(5)) = 5', (() => {
      const Z5 = zn(5n);
      const GF5 = zpField(znRing(Z5));

      fc.assert(fc.property(fc.constant(0), (() => (characteristicBounded(GF5, 100n) === 5n))));
    }));

    it('char(GF(2)) = 2', (() => {
      const Z2 = zn(2n);
      const GF2 = zpField(znRing(Z2));

      fc.assert(fc.property(fc.constant(0), (() => (characteristicBounded(GF2, 100n) === 2n))));
    }));

    it('char(Z/6Z) = 6', (() => {
      const Z6Ring = znRing(zn(6n));

      fc.assert(fc.property(fc.constant(0), (() => (characteristicBounded(Z6Ring, 100n) === 6n))));
    }));

    it('char(Boolean ring) = 2', (() => {
      const BRing = booleanRing(booleanGroup());

      fc.assert(fc.property(fc.constant(0), (() => (characteristicBounded(BRing, 100n) === 2n))));
    }));
  }));
}));
