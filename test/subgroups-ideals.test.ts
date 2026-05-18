/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {describe, it, expect} from 'vitest';

import {symmetricGroup, fromCycles} from '../src/group/structures/impl/symmetric-group';
import {zn, znElement} from '../src/group/structures/impl/zn';

import {
  finiteSubgroup,
  generateSubgroup,
  verifySubgroup,
  leftCoset,
  leftCosets,
  rightCosets,
  isNormalSubgroup,
  index,
  center,
  centralizer,
  elementOrder,
  elementOrderBounded
} from '../src/group/subgroup';

import {
  finiteIdeal,
  generateIdeal,
  verifyIdeal,
  isZeroIdeal,
  isWholeRing,
  idealSum,
  idealIntersection,
  idealProduct
} from '../src/ring/ideal';
import {znRing} from '../src/ring/structures/impl/zn-ring';

// ── Subgroup tests ──

describe('Subgroup utilities', (() => {
  describe('Z/6Z subgroups', (() => {
    const Z6 = zn(6n);
    const mk = ((v: bigint) => znElement(Z6, v));

    it('{0, 2, 4} is a subgroup of Z/6Z', (() => {
      const H = finiteSubgroup(Z6, [mk(0n), mk(2n), mk(4n)]);

      expect(verifySubgroup(H)).toBe(true);
      expect(H.order).toBe(3n);
    }));

    it('{0, 3} is a subgroup of Z/6Z', (() => {
      const H = finiteSubgroup(Z6, [mk(0n), mk(3n)]);

      expect(verifySubgroup(H)).toBe(true);
      expect(H.order).toBe(2n);
    }));

    it('{0, 1} is NOT a subgroup of Z/6Z', (() => {
      const H = finiteSubgroup(Z6, [mk(0n), mk(1n)]);

      expect(verifySubgroup(H)).toBe(false);
    }));
  }));

  describe('generateSubgroup', (() => {
    const Z6 = zn(6n);
    const mk = ((v: bigint) => znElement(Z6, v));

    it('<2> generates {0, 2, 4} in Z/6Z', (() => {
      const H = generateSubgroup(Z6, [mk(2n)]);

      expect(H.order).toBe(3n);
      expect(H.isMember(mk(0n))).toBe(true);
      expect(H.isMember(mk(2n))).toBe(true);
      expect(H.isMember(mk(4n))).toBe(true);
      expect(H.isMember(mk(1n))).toBe(false);
      expect(verifySubgroup(H)).toBe(true);
    }));

    it('<3> generates {0, 3} in Z/6Z', (() => {
      const H = generateSubgroup(Z6, [mk(3n)]);

      expect(H.order).toBe(2n);
      expect(verifySubgroup(H)).toBe(true);
    }));

    it('<1> generates all of Z/6Z', (() => {
      const H = generateSubgroup(Z6, [mk(1n)]);

      expect(H.order).toBe(6n);
    }));
  }));

  describe('cosets', (() => {
    const Z6 = zn(6n);
    const mk = ((v: bigint) => znElement(Z6, v));
    const H = finiteSubgroup(Z6, [mk(0n), mk(2n), mk(4n)]);

    it('left coset 0 + H = {0, 2, 4}', (() => {
      const coset = leftCoset(Z6, H, mk(0n));

      expect(coset.length).toBe(3);
    }));

    it('left coset 1 + H = {1, 3, 5}', (() => {
      const coset = leftCoset(Z6, H, mk(1n));

      expect(coset.length).toBe(3);
      expect(coset.some((c => Z6.equals(c, mk(1n))))).toBe(true);
      expect(coset.some((c => Z6.equals(c, mk(3n))))).toBe(true);
      expect(coset.some((c => Z6.equals(c, mk(5n))))).toBe(true);
    }));

    it('Z/6Z has exactly 2 left cosets of {0, 2, 4}', (() => {
      const cosets = leftCosets(Z6, H);

      expect(cosets.length).toBe(2);
    }));

    it('left and right cosets are equal (abelian group)', (() => {
      const lCosets = leftCosets(Z6, H);
      const rCosets = rightCosets(Z6, H);

      expect(lCosets.length).toBe(rCosets.length);
    }));
  }));

  describe('normal subgroups', (() => {
    it('all subgroups of Z/6Z are normal (abelian)', (() => {
      const Z6 = zn(6n);
      const mk = ((v: bigint) => znElement(Z6, v));
      const H = finiteSubgroup(Z6, [mk(0n), mk(2n), mk(4n)]);

      expect(isNormalSubgroup(Z6, H)).toBe(true);
    }));

    it('<(0 1 2)> is normal in S(3)', (() => {
      const S3 = symmetricGroup(3);
      const e = fromCycles(S3);
      const r = fromCycles(S3, [0, 1, 2]);
      const r2 = fromCycles(S3, [0, 2, 1]);
      const H = finiteSubgroup(S3, [e, r, r2]);

      expect(verifySubgroup(H)).toBe(true);
      expect(isNormalSubgroup(S3, H)).toBe(true);
    }));

    it('<(0 1)> is NOT normal in S(3)', (() => {
      const S3 = symmetricGroup(3);
      const e = fromCycles(S3);
      const t = fromCycles(S3, [0, 1]);
      const H = finiteSubgroup(S3, [e, t]);

      expect(verifySubgroup(H)).toBe(true);
      expect(isNormalSubgroup(S3, H)).toBe(false);
    }));
  }));

  describe('index', (() => {
    it('[Z/6Z : {0, 2, 4}] = 2', (() => {
      const Z6 = zn(6n);
      const mk = ((v: bigint) => znElement(Z6, v));
      const H = finiteSubgroup(Z6, [mk(0n), mk(2n), mk(4n)]);

      expect(index(Z6, H)).toBe(2n);
    }));

    it('[Z/6Z : {0, 3}] = 3', (() => {
      const Z6 = zn(6n);
      const mk = ((v: bigint) => znElement(Z6, v));
      const H = finiteSubgroup(Z6, [mk(0n), mk(3n)]);

      expect(index(Z6, H)).toBe(3n);
    }));
  }));

  describe('center', (() => {
    it('center of Z/5Z is the whole group (abelian)', (() => {
      const Z5 = zn(5n);
      const Z5Center = center(Z5);

      expect(Z5Center.order).toBe(5n);
    }));

    it('center of S(3) is trivial', (() => {
      const S3 = symmetricGroup(3);
      const S3Center = center(S3);

      expect(S3Center.order).toBe(1n);
    }));
  }));

  describe('centralizer', (() => {
    it('centralizer of any element in Z/5Z is the whole group', (() => {
      const Z5 = zn(5n);
      const a = znElement(Z5, 2n);
      const C = centralizer(Z5, a);

      expect(C.order).toBe(5n);
    }));
  }));

  describe('elementOrder', (() => {
    it('order of 0 in Z/6Z is 1', (() => {
      const Z6 = zn(6n);

      expect(elementOrder(Z6, znElement(Z6, 0n))).toBe(1n);
    }));

    it('order of 1 in Z/6Z is 6', (() => {
      const Z6 = zn(6n);

      expect(elementOrder(Z6, znElement(Z6, 1n))).toBe(6n);
    }));

    it('order of 2 in Z/6Z is 3', (() => {
      const Z6 = zn(6n);

      expect(elementOrder(Z6, znElement(Z6, 2n))).toBe(3n);
    }));

    it('order of 3 in Z/6Z is 2', (() => {
      const Z6 = zn(6n);

      expect(elementOrder(Z6, znElement(Z6, 3n))).toBe(2n);
    }));

    it('elementOrderBounded returns 0n when not found', (() => {
      const Z6 = zn(6n);

      expect(elementOrderBounded(Z6, znElement(Z6, 1n), 3n)).toBe(0n);
    }));

    it('elementOrderBounded finds order within limit', (() => {
      const Z6 = zn(6n);

      expect(elementOrderBounded(Z6, znElement(Z6, 2n), 10n)).toBe(3n);
    }));
  }));
}));

// ── Ideal tests ──

describe('Ideal utilities', (() => {
  describe('Z/6Z ideals', (() => {
    const Z6 = zn(6n);
    const Z6Ring = znRing(Z6);
    const mk = ((v: bigint) => znElement(Z6, v));

    it('{0, 2, 4} is an ideal of Z/6Z', (() => {
      const I = finiteIdeal(Z6Ring, [mk(0n), mk(2n), mk(4n)]);

      // @ts-expect-error TS(2345)
      expect(verifyIdeal(I)).toBe(true);
    }));

    it('{0, 3} is an ideal of Z/6Z', (() => {
      const I = finiteIdeal(Z6Ring, [mk(0n), mk(3n)]);

      // @ts-expect-error TS(2345)
      expect(verifyIdeal(I)).toBe(true);
    }));

    it('{0} is the zero ideal', (() => {
      const I = finiteIdeal(Z6Ring, [mk(0n)]);

      // @ts-expect-error TS(2345)
      expect(verifyIdeal(I)).toBe(true);
      expect(isZeroIdeal(I)).toBe(true);
      expect(isWholeRing(I)).toBe(false);
    }));

    it('Z/6Z itself is the whole ring ideal', (() => {
      const I = finiteIdeal(Z6Ring, [mk(0n), mk(1n), mk(2n), mk(3n), mk(4n), mk(5n)]);

      // @ts-expect-error TS(2345)
      expect(verifyIdeal(I)).toBe(true);
      expect(isWholeRing(I)).toBe(true);
    }));

    it('{0, 1} is NOT an ideal of Z/6Z', (() => {
      const I = finiteIdeal(Z6Ring, [mk(0n), mk(1n)]);

      // @ts-expect-error TS(2345)
      expect(verifyIdeal(I)).toBe(false);
    }));
  }));

  describe('generateIdeal', (() => {
    const Z6 = zn(6n);
    const Z6Ring = znRing(Z6);
    const mk = ((v: bigint) => znElement(Z6, v));

    it('<2> generates {0, 2, 4} in Z/6Z', (() => {
      const I = generateIdeal(Z6Ring, [mk(2n)]);

      expect(I.order).toBe(3n);
      expect(I.isMember(mk(0n))).toBe(true);
      expect(I.isMember(mk(2n))).toBe(true);
      expect(I.isMember(mk(4n))).toBe(true);
      // @ts-expect-error TS(2345)
      expect(verifyIdeal(I)).toBe(true);
    }));

    it('<3> generates {0, 3} in Z/6Z', (() => {
      const I = generateIdeal(Z6Ring, [mk(3n)]);

      expect(I.order).toBe(2n);
      // @ts-expect-error TS(2345)
      expect(verifyIdeal(I)).toBe(true);
    }));

    it('<1> generates the whole ring', (() => {
      const I = generateIdeal(Z6Ring, [mk(1n)]);

      expect(I.order).toBe(6n);
      expect(isWholeRing(I)).toBe(true);
    }));
  }));

  describe('ideal operations', (() => {
    const Z6 = zn(6n);
    const Z6Ring = znRing(Z6);
    const mk = ((v: bigint) => znElement(Z6, v));
    const I2 = finiteIdeal(Z6Ring, [mk(0n), mk(2n), mk(4n)]);
    const I3 = finiteIdeal(Z6Ring, [mk(0n), mk(3n)]);

    it('I2 + I3 = Z/6Z (since gcd(2,3) = 1)', (() => {
      const sum = idealSum(I2, I3);

      expect(sum.order).toBe(6n);
      expect(isWholeRing(sum)).toBe(true);
    }));

    it('I2 ∩ I3 = {0} (since lcm(2,3) = 6)', (() => {
      const inter = idealIntersection(I2, I3);

      expect(inter.order).toBe(1n);
      expect(isZeroIdeal(inter)).toBe(true);
    }));

    it('I2 * I3 ⊆ I2 ∩ I3', (() => {
      const prod = idealProduct(I2, I3);
      const inter = idealIntersection(I2, I3);

      for(const a of prod.elements()) {
        expect(inter.isMember(a)).toBe(true);
      }
    }));
  }));

  describe('Z/12Z ideals', (() => {
    const Z12 = zn(12n);
    const Z12Ring = znRing(Z12);
    const mk = ((v: bigint) => znElement(Z12, v));

    it('<4> generates {0, 4, 8} in Z/12Z', (() => {
      const I = generateIdeal(Z12Ring, [mk(4n)]);

      expect(I.order).toBe(3n);
      // @ts-expect-error TS(2345)
      expect(verifyIdeal(I)).toBe(true);
    }));

    it('<3> generates {0, 3, 6, 9} in Z/12Z', (() => {
      const I = generateIdeal(Z12Ring, [mk(3n)]);

      expect(I.order).toBe(4n);
      // @ts-expect-error TS(2345)
      expect(verifyIdeal(I)).toBe(true);
    }));
  }));
}));
