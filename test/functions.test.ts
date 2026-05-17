/* eslint-disable sonarjs/assertions-in-tests */
import * as fc from 'fast-check';
import {describe, it} from 'vitest';

import {repeat, power, groupPower} from '../src/group/functions';
import {booleanGroup} from '../src/group/structures/impl/boolean-group';
import {integerAdditiveGroup, integerElement} from '../src/group/structures/impl/integer-additive-group';
import {zn, znElement} from '../src/group/structures/impl/zn';
import {gcd, lcm, scalarMul, ringPow, fieldPow, characteristicBounded} from '../src/ring/functions';
import {booleanRing} from '../src/ring/structures/impl/boolean-ring-impl';
import {integerRing} from '../src/ring/structures/impl/integer-ring';
import {znRing} from '../src/ring/structures/impl/zn-ring';
import {zpField} from '../src/ring/structures/impl/zp-field';
import {arbZn, arbInteger, arbIntegerNonZero} from './arbitraries';

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
      const ZR = integerRing(integerAdditiveGroup());

      fc.assert(fc.property(fc.constant(0), (() => (characteristicBounded(ZR, 1000n) === 0n))));
    }));

    it('char(GF(5)) = 5', (() => {
      const GF5 = zpField(znRing(zn(5n)));

      fc.assert(fc.property(fc.constant(0), (() => (characteristicBounded(GF5, 100n) === 5n))));
    }));

    it('char(GF(2)) = 2', (() => {
      const GF2 = zpField(znRing(zn(2n)));

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
