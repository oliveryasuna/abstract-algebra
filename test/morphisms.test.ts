/* eslint-disable unicorn/no-array-callback-reference */
/* eslint-disable sonarjs/assertions-in-tests */
import * as fc from 'fast-check';
import {describe, it, expect} from 'vitest';

import type {ZnElement} from '../src/group/structures/impl/zn';
import {zn, znElement} from '../src/group/structures/impl/zn';
import {
  groupHomomorphism,
  groupIsomorphism,
  composeGroupHomomorphisms,
  identityHomomorphism,
  invertIsomorphism,
  kernel,
  imageSet,
  verifyGroupHomomorphism,
  isInjective,
  isSurjective
} from '../src/morphism/group-homomorphism';
import {
  ringHomomorphism,
  composeRingHomomorphisms,
  identityRingHomomorphism,
  ringKernel,
  ringImageSet,
  verifyRingHomomorphism
} from '../src/morphism/ring-homomorphism';
import {znRing} from '../src/ring/structures/impl/zn-ring';
import {zpField} from '../src/ring/structures/impl/zp-field';

import {arbZn} from './arbitraries';

// ── Group homomorphism tests ──

describe('Group homomorphisms', (() => {
  describe('Z/6Z → Z/3Z (mod 3 reduction)', (() => {
    const Z6 = zn(6n);
    const Z3 = zn(3n);

    // f(x) = x mod 3
    const f = groupHomomorphism(Z6, Z3, ((a: ZnElement): ZnElement =>
      znElement(Z3, ((a as bigint) % 3n))));

    it('satisfies homomorphism property', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyGroupHomomorphism(f)).toBe(true);
    }));

    it('kernel is {0, 3}', (() => {
      // @ts-expect-error TS(2345)
      const ker = [...kernel(f)];

      expect(ker.length).toBe(2);
      expect(ker.some((k => Z6.equals(k, znElement(Z6, 0n))))).toBe(true);
      expect(ker.some((k => Z6.equals(k, znElement(Z6, 3n))))).toBe(true);
    }));

    it('image is all of Z/3Z', (() => {
      // @ts-expect-error TS(2345)
      const img = imageSet(f);

      expect(img.length).toBe(3);
    }));

    it('is not injective (kernel is non-trivial)', (() => {
      // @ts-expect-error TS(2345)
      expect(isInjective(f)).toBe(false);
    }));

    it('is surjective', (() => {
      // @ts-expect-error TS(2345)
      expect(isSurjective(f)).toBe(true);
    }));
  }));

  describe('Z/4Z → Z/2Z (mod 2 reduction)', (() => {
    const Z4 = zn(4n);
    const Z2 = zn(2n);

    const f = groupHomomorphism(Z4, Z2, ((a: ZnElement): ZnElement =>
      znElement(Z2, ((a as bigint) % 2n))));

    it('satisfies homomorphism property', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyGroupHomomorphism(f)).toBe(true);
    }));

    it('kernel has order 2', (() => {
      // @ts-expect-error TS(2345)
      expect([...kernel(f)].length).toBe(2);
    }));

    it('is surjective', (() => {
      // @ts-expect-error TS(2345)
      expect(isSurjective(f)).toBe(true);
    }));
  }));

  describe('trivial homomorphism Z/5Z → Z/7Z', (() => {
    const Z5 = zn(5n);
    const Z7 = zn(7n);

    // f(x) = 0 for all x
    const f = groupHomomorphism(Z5, Z7, ((_: ZnElement): ZnElement =>
      znElement(Z7, 0n)));

    it('satisfies homomorphism property', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyGroupHomomorphism(f)).toBe(true);
    }));

    it('kernel is all of Z/5Z', (() => {
      // @ts-expect-error TS(2345)
      expect([...kernel(f)].length).toBe(5);
    }));

    it('image is {0}', (() => {
      // @ts-expect-error TS(2345)
      expect(imageSet(f).length).toBe(1);
    }));

    it('is not injective', (() => {
      // @ts-expect-error TS(2345)
      expect(isInjective(f)).toBe(false);
    }));

    it('is not surjective', (() => {
      // @ts-expect-error TS(2345)
      expect(isSurjective(f)).toBe(false);
    }));
  }));

  describe('identity homomorphism', (() => {
    const Z5 = zn(5n);
    const id = identityHomomorphism(Z5);

    it('satisfies homomorphism property', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyGroupHomomorphism(id)).toBe(true);
    }));

    it('is injective', (() => {
      // @ts-expect-error TS(2345)
      expect(isInjective(id)).toBe(true);
    }));

    it('is surjective', (() => {
      // @ts-expect-error TS(2345)
      expect(isSurjective(id)).toBe(true);
    }));

    it('maps every element to itself', (() => {
      fc.assert(fc.property(arbZn(5n), (a => Z5.equals(id.map(a), a))));
    }));
  }));

  describe('isomorphism Z/5Z → Z/5Z (x ↦ 2x)', (() => {
    const Z5 = zn(5n);

    // f(x) = 2x mod 5, f⁻¹(x) = 3x mod 5 (since 2*3 = 6 ≡ 1 mod 5)
    const iso = groupIsomorphism(
      Z5, Z5,
      ((a: ZnElement): ZnElement => znElement(Z5, (((a as bigint) * 2n) % 5n))),
      ((b: ZnElement): ZnElement => znElement(Z5, (((b as bigint) * 3n) % 5n)))
    );

    it('satisfies homomorphism property', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyGroupHomomorphism(iso)).toBe(true);
    }));

    it('is injective', (() => {
      // @ts-expect-error TS(2345)
      expect(isInjective(iso)).toBe(true);
    }));

    it('inverse undoes the map', (() => {
      fc.assert(fc.property(arbZn(5n), (a => Z5.equals(iso.inverseMap(iso.map(a)), a))));
    }));

    it('invertIsomorphism swaps map and inverseMap', (() => {
      const inv = invertIsomorphism(iso);

      fc.assert(fc.property(arbZn(5n), (a => Z5.equals(inv.map(iso.map(a)), a))));
    }));
  }));

  describe('composition', (() => {
    const Z6 = zn(6n);
    const Z3 = zn(3n);
    const Z1 = zn(1n);

    const f = groupHomomorphism(Z6, Z3, ((a: ZnElement): ZnElement =>
      znElement(Z3, ((a as bigint) % 3n))));

    const g = groupHomomorphism(Z3, Z1, ((_: ZnElement): ZnElement =>
      znElement(Z1, 0n)));

    const gf = composeGroupHomomorphisms(f, g);

    it('composed homomorphism satisfies the property', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyGroupHomomorphism(gf)).toBe(true);
    }));

    it('kernel of composition is all of Z/6Z (trivial target)', (() => {
      // @ts-expect-error TS(2345)
      expect([...kernel(gf)].length).toBe(6);
    }));
  }));

  describe('non-homomorphism detection', (() => {
    const Z5 = zn(5n);

    // f(x) = x + 1 is NOT a homomorphism (f(0) ≠ 0)
    const bad = groupHomomorphism(Z5, Z5, ((a: ZnElement): ZnElement =>
      znElement(Z5, (((a as bigint) + 1n) % 5n))));

    it('correctly rejects a non-homomorphism', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyGroupHomomorphism(bad)).toBe(false);
    }));
  }));
}));

// ── Ring homomorphism tests ──

describe('Ring homomorphisms', (() => {
  describe('Z/6Z → Z/3Z (mod 3 reduction)', (() => {
    const Z6 = zn(6n);
    const Z3 = zn(3n);
    const Z6Ring = znRing(Z6);
    const Z3Ring = znRing(Z3);

    const f = ringHomomorphism(Z6Ring, Z3Ring, ((a: ZnElement): ZnElement =>
      znElement(Z3, ((a as bigint) % 3n))));

    it('satisfies ring homomorphism properties', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyRingHomomorphism(f)).toBe(true);
    }));

    it('kernel is {0, 3} (an ideal of Z/6Z)', (() => {
      // @ts-expect-error TS(2345)
      const ker = [...ringKernel(f)];

      expect(ker.length).toBe(2);
    }));

    it('image is all of Z/3Z', (() => {
      // @ts-expect-error TS(2345)
      expect(ringImageSet(f).length).toBe(3);
    }));
  }));

  describe('Z/6Z → Z/2Z (mod 2 reduction)', (() => {
    const Z6 = zn(6n);
    const Z2 = zn(2n);
    const Z6Ring = znRing(Z6);
    const Z2Ring = znRing(Z2);

    const f = ringHomomorphism(Z6Ring, Z2Ring, ((a: ZnElement): ZnElement =>
      znElement(Z2, ((a as bigint) % 2n))));

    it('satisfies ring homomorphism properties', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyRingHomomorphism(f)).toBe(true);
    }));

    it('kernel has order 3', (() => {
      // @ts-expect-error TS(2345)
      expect([...ringKernel(f)].length).toBe(3);
    }));
  }));

  describe('identity ring homomorphism', (() => {
    const Z5Ring = znRing(zn(5n));
    const id = identityRingHomomorphism(Z5Ring);

    it('satisfies ring homomorphism properties', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyRingHomomorphism(id)).toBe(true);
    }));

    it('maps every element to itself', (() => {
      fc.assert(fc.property(arbZn(5n), (a => Z5Ring.add.equals(id.map(a), a))));
    }));
  }));

  describe('composition of ring homomorphisms', (() => {
    const Z12 = zn(12n);
    const Z6 = zn(6n);
    const Z3 = zn(3n);
    const Z12Ring = znRing(Z12);
    const Z6Ring = znRing(Z6);
    const Z3Ring = znRing(Z3);

    const f = ringHomomorphism(Z12Ring, Z6Ring, ((a: ZnElement): ZnElement =>
      znElement(Z6, ((a as bigint) % 6n))));

    const g = ringHomomorphism(Z6Ring, Z3Ring, ((a: ZnElement): ZnElement =>
      znElement(Z3, ((a as bigint) % 3n))));

    const gf = composeRingHomomorphisms(f, g);

    it('composed homomorphism satisfies ring properties', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyRingHomomorphism(gf)).toBe(true);
    }));

    it('composed homomorphism equals direct mod 3 reduction', (() => {
      const direct = ringHomomorphism(Z12Ring, Z3Ring, ((a: ZnElement): ZnElement =>
        znElement(Z3, ((a as bigint) % 3n))));

      for(const a of Z12Ring.add.elements()) {
        expect(Z3Ring.add.equals(gf.map(a), direct.map(a))).toBe(true);
      }
    }));
  }));

  describe('non-homomorphism detection', (() => {
    const Z5Ring = znRing(zn(5n));

    // f(x) = x + 1 is NOT a ring homomorphism
    const bad = ringHomomorphism(Z5Ring, Z5Ring, ((a: ZnElement): ZnElement =>
      znElement(zn(5n), (((a as bigint) + 1n) % 5n))));

    it('correctly rejects a non-ring-homomorphism', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyRingHomomorphism(bad)).toBe(false);
    }));
  }));

  describe('GF(5) → GF(5) identity is the only field automorphism of GF(p)', (() => {
    const Z5 = zn(5n);
    const GF5 = zpField(znRing(Z5));
    const id = identityRingHomomorphism(GF5);

    it('identity satisfies ring homomorphism', (() => {
      // @ts-expect-error TS(2345)
      expect(verifyRingHomomorphism(id)).toBe(true);
    }));

    it('kernel is trivial (injective)', (() => {
      // @ts-expect-error TS(2345)
      const ker = [...ringKernel(id)];

      expect(ker.length).toBe(1);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(GF5.add.equals(ker[0]!, GF5.add.identity)).toBe(true);
    }));
  }));
}));
