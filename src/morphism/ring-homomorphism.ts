import type {Finite} from '../properties';
import type {Ring} from '../ring';

/**
 * A ring homomorphism f: R → S satisfying:
 * - f(a + b) = f(a) + f(b)
 * - f(a * b) = f(a) * f(b)
 * - f(1_R) = 1_S
 *
 * @typeParam TDomain - Element type of the domain ring.
 * @typeParam TCodomain - Element type of the codomain ring.
 */
interface RingHomomorphism<TDomain, TCodomain> {
  readonly domain: Ring<TDomain>;
  readonly codomain: Ring<TCodomain>;
  map(a: TDomain): TCodomain;
}

/**
 * A ring isomorphism: a bijective ring homomorphism with an inverse map.
 *
 * @typeParam TDomain - Element type of the domain ring.
 * @typeParam TCodomain - Element type of the codomain ring.
 */
interface RingIsomorphism<TDomain, TCodomain> extends RingHomomorphism<TDomain, TCodomain> {
  inverseMap(b: TCodomain): TDomain;
}

/**
 * Creates a ring homomorphism from a mapping function.
 *
 * @param domain - The domain ring.
 * @param codomain - The codomain ring.
 * @param map - The mapping function.
 * @returns The ring homomorphism.
 */
const ringHomomorphism = (<TDomain, TCodomain>(
  domain: Ring<TDomain>,
  codomain: Ring<TCodomain>,
  map: ((a: TDomain) => TCodomain)
): RingHomomorphism<TDomain, TCodomain> => ({
  domain: domain,
  codomain: codomain,
  map: map
}));

/**
 * Creates a ring isomorphism from forward and inverse mapping functions.
 *
 * @param domain - The domain ring.
 * @param codomain - The codomain ring.
 * @param map - The forward mapping function.
 * @param inverseMap - The inverse mapping function.
 * @returns The ring isomorphism.
 */
const ringIsomorphism = (<TDomain, TCodomain>(
  domain: Ring<TDomain>,
  codomain: Ring<TCodomain>,
  map: ((a: TDomain) => TCodomain),
  inverseMap: ((b: TCodomain) => TDomain)
): RingIsomorphism<TDomain, TCodomain> => ({
  domain: domain,
  codomain: codomain,
  map: map,
  inverseMap: inverseMap
}));

/**
 * Composes two ring homomorphisms: (g ∘ f)(x) = g(f(x)).
 *
 * @param f - The first homomorphism (applied first).
 * @param g - The second homomorphism (applied second).
 * @returns The composed homomorphism.
 */
const composeRingHomomorphisms = (<A, B, C>(
  f: RingHomomorphism<A, B>,
  g: RingHomomorphism<B, C>
): RingHomomorphism<A, C> => ({
  domain: f.domain,
  codomain: g.codomain,
  // eslint-disable-next-line unicorn/no-array-callback-reference
  map: ((a: A): C => g.map(f.map(a)))
}));

/**
 * Returns the identity ring homomorphism.
 *
 * @param r - The ring.
 * @returns The identity homomorphism.
 */
const identityRingHomomorphism = (<TElement>(
  r: Ring<TElement>
): RingIsomorphism<TElement, TElement> => ({
  domain: r,
  codomain: r,
  map: ((a: TElement): TElement => a),
  inverseMap: ((a: TElement): TElement => a)
}));

/**
 * Inverts a ring isomorphism.
 *
 * @param iso - The isomorphism to invert.
 * @returns The inverse isomorphism.
 */
const invertRingIsomorphism = (<TDomain, TCodomain>(
  iso: RingIsomorphism<TDomain, TCodomain>
): RingIsomorphism<TCodomain, TDomain> => ({
  domain: iso.codomain,
  codomain: iso.domain,
  // eslint-disable-next-line @typescript-eslint/unbound-method
  map: iso.inverseMap,
  // eslint-disable-next-line @typescript-eslint/unbound-method
  inverseMap: iso.map
}));

/**
 * Computes the kernel of a ring homomorphism as an iterable over
 * elements of a finite domain ring.
 *
 * ker(f) = { a ∈ R | f(a) = 0_S }
 *
 * The kernel of a ring homomorphism is an ideal of the domain ring.
 *
 * @param f - The homomorphism (domain must be Finite).
 * @returns An iterable of kernel elements.
 */
const ringKernel = (<TDomain, TCodomain>(
  f: RingHomomorphism<TDomain, TCodomain> & {readonly domain: Ring<TDomain> & {add: Finite<TDomain>;};}
): Iterable<TDomain> => {
  const zeroS = f.codomain.add.identity;

  return ({
    // eslint-disable-next-line func-names
    [Symbol.iterator]: (function* (): Generator<TDomain, void, unknown> {
      for(const a of f.domain.add.elements()) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        if(f.codomain.add.equals(f.map(a), zeroS)) {
          yield a;
        }
      }
    })
  });
});

/**
 * Computes the deduplicated image of a ring homomorphism over a
 * finite domain.
 *
 * @param f - The homomorphism (domain must be Finite).
 * @returns An array of distinct image elements.
 */
const ringImageSet = (<TDomain, TCodomain>(
  f: RingHomomorphism<TDomain, TCodomain> & {readonly domain: Ring<TDomain> & {add: Finite<TDomain>;};}
): TCodomain[] => {
  const result: TCodomain[] = [];

  for(const a of f.domain.add.elements()) {
    // eslint-disable-next-line unicorn/no-array-callback-reference
    const b = f.map(a);

    if(!result.some((existing => f.codomain.add.equals(existing, b)))) {
      result.push(b);
    }
  }

  return result;
});

/**
 * Verifies that a mapping satisfies the ring homomorphism properties
 * over a finite domain:
 * - f(a + b) = f(a) + f(b)
 * - f(a * b) = f(a) * f(b)
 * - f(1) = 1
 *
 * @param f - The homomorphism to verify (domain must be Finite).
 * @returns Whether all ring homomorphism properties hold.
 */

const verifyRingHomomorphism = (<TDomain, TCodomain>(
  f: RingHomomorphism<TDomain, TCodomain> & {readonly domain: Ring<TDomain> & {add: Finite<TDomain>;};}
): boolean => {
  // Check f(1) = 1.
  // eslint-disable-next-line unicorn/no-array-callback-reference
  if(!f.codomain.mul.equals(f.map(f.domain.mul.identity), f.codomain.mul.identity)) {
    return false;
  }

  for(const a of f.domain.add.elements()) {
    for(const b of f.domain.add.elements()) {
      // Check f(a + b) = f(a) + f(b).
      const addLhs = f.map(f.domain.add.op(a, b));
      // eslint-disable-next-line unicorn/no-array-callback-reference
      const addRhs = f.codomain.add.op(f.map(a), f.map(b));

      if(!f.codomain.add.equals(addLhs, addRhs)) {
        return false;
      }

      // Check f(a * b) = f(a) * f(b).
      const mulLhs = f.map(f.domain.mul.op(a, b));
      // eslint-disable-next-line unicorn/no-array-callback-reference
      const mulRhs = f.codomain.mul.op(f.map(a), f.map(b));

      if(!f.codomain.mul.equals(mulLhs, mulRhs)) {
        return false;
      }
    }
  }

  return true;
});

export type {
  RingHomomorphism,
  RingIsomorphism
};
export {
  ringHomomorphism,
  ringIsomorphism,
  composeRingHomomorphisms,
  identityRingHomomorphism,
  invertRingIsomorphism,
  ringKernel,
  ringImageSet,
  verifyRingHomomorphism
};
