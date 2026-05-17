import type {Group} from '../group';
import type {Finite} from '../properties';

/**
 * A group homomorphism f: G → H satisfying f(op(a, b)) = op(f(a), f(b)).
 *
 * @template TDomain - Element type of the domain group.
 * @template TCodomain - Element type of the codomain group.
 */
interface GroupHomomorphism<TDomain, TCodomain> {
  readonly domain: Group<TDomain>;
  readonly codomain: Group<TCodomain>;
  map(a: TDomain): TCodomain;
}

/**
 * A group isomorphism: a bijective homomorphism with an inverse map.
 *
 * @template TDomain - Element type of the domain group.
 * @template TCodomain - Element type of the codomain group.
 */
interface GroupIsomorphism<TDomain, TCodomain> extends GroupHomomorphism<TDomain, TCodomain> {
  inverseMap(b: TCodomain): TDomain;
}

/**
 * Creates a group homomorphism from a mapping function.
 *
 * @param domain - The domain group.
 * @param codomain - The codomain group.
 * @param map - The mapping function.
 * @returns The group homomorphism.
 */
const groupHomomorphism = (<TDomain, TCodomain>(
  domain: Group<TDomain>,
  codomain: Group<TCodomain>,
  map: ((a: TDomain) => TCodomain)
): GroupHomomorphism<TDomain, TCodomain> => ({
  domain: domain,
  codomain: codomain,
  map: map
}));

/**
 * Creates a group isomorphism from forward and inverse mapping functions.
 *
 * @param domain - The domain group.
 * @param codomain - The codomain group.
 * @param map - The forward mapping function.
 * @param inverseMap - The inverse mapping function.
 * @returns The group isomorphism.
 */
const groupIsomorphism = (<TDomain, TCodomain>(
  domain: Group<TDomain>,
  codomain: Group<TCodomain>,
  map: ((a: TDomain) => TCodomain),
  inverseMap: ((b: TCodomain) => TDomain)
): GroupIsomorphism<TDomain, TCodomain> => ({
  domain: domain,
  codomain: codomain,
  map: map,
  inverseMap: inverseMap
}));

/**
 * Composes two group homomorphisms: (g ∘ f)(x) = g(f(x)).
 *
 * @param f - The first homomorphism (applied first).
 * @param g - The second homomorphism (applied second).
 * @returns The composed homomorphism.
 */
const composeGroupHomomorphisms = (<A, B, C>(
  f: GroupHomomorphism<A, B>,
  g: GroupHomomorphism<B, C>
): GroupHomomorphism<A, C> => ({
  domain: f.domain,
  codomain: g.codomain,
  // eslint-disable-next-line unicorn/no-array-callback-reference
  map: ((a: A): C => g.map(f.map(a)))
}));

/**
 * Returns the identity homomorphism on a group.
 *
 * @param g - The group.
 * @returns The identity homomorphism.
 */
const identityHomomorphism = (<TElement>(
  g: Group<TElement>
): GroupIsomorphism<TElement, TElement> => ({
  domain: g,
  codomain: g,
  map: ((a: TElement): TElement => a),
  inverseMap: ((a: TElement): TElement => a)
}));

/**
 * Inverts a group isomorphism.
 *
 * @param iso - The isomorphism to invert.
 * @returns The inverse isomorphism.
 */
const invertIsomorphism = (<TDomain, TCodomain>(
  iso: GroupIsomorphism<TDomain, TCodomain>
): GroupIsomorphism<TCodomain, TDomain> => ({
  domain: iso.codomain,
  codomain: iso.domain,
  // eslint-disable-next-line @typescript-eslint/unbound-method
  map: iso.inverseMap,
  // eslint-disable-next-line @typescript-eslint/unbound-method
  inverseMap: iso.map
}));

/**
 * Computes the kernel of a group homomorphism as an iterable over elements of a
 * finite domain group.
 *
 * ker(f) = { a ∈ G | f(a) = e_H }
 *
 * @param f - The homomorphism (domain must be Finite).
 * @returns An iterable of kernel elements.
 */
const kernel = (<TDomain, TCodomain>(
  f: (GroupHomomorphism<TDomain, TCodomain> & {readonly domain: Group<TDomain> & Finite<TDomain>;})
): Iterable<TDomain> => {
  const identityH = f.codomain.identity;

  return ({
    // eslint-disable-next-line func-names
    [Symbol.iterator]: (function* (): Generator<TDomain, void, unknown> {
      for(const a of f.domain.elements()) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        if(f.codomain.equals(f.map(a), identityH)) {
          yield a;
        }
      }
    })
  });
});

/**
 * Computes the image of a group homomorphism as an iterable over elements of
 * the codomain, given a finite domain.
 *
 * im(f) = { f(a) | a ∈ G }
 *
 * Note: may contain duplicates depending on the codomain's equality.
 * Use {@link imageSet} for deduplicated results.
 *
 * @param f - The homomorphism (domain must be Finite).
 * @returns An iterable of image elements.
 */
const image = (<TDomain, TCodomain>(
  f: (GroupHomomorphism<TDomain, TCodomain> & {readonly domain: Group<TDomain> & Finite<TDomain>;})
): Iterable<TCodomain> => ({
  // eslint-disable-next-line func-names
  [Symbol.iterator]: (function* (): Generator<TCodomain, void, unknown> {
    for(const a of f.domain.elements()) {
      // eslint-disable-next-line unicorn/no-array-callback-reference
      yield f.map(a);
    }
  })
}));

/**
 * Computes the deduplicated image of a group homomorphism over a finite domain.
 *
 * @param f - The homomorphism (domain must be Finite).
 * @returns An array of distinct image elements.
 */
const imageSet = (<TDomain, TCodomain>(
  f: (GroupHomomorphism<TDomain, TCodomain> & {readonly domain: Group<TDomain> & Finite<TDomain>;})
): TCodomain[] => {
  const result: TCodomain[] = [];

  for(const b of image(f)) {
    if(!result.some(((existing): boolean => f.codomain.equals(existing, b)))) {
      result.push(b);
    }
  }

  return result;
});

/**
 * Verifies that a mapping satisfies the homomorphism property over a finite
 * domain: f(op(a, b)) = op(f(a), f(b)) for all a, b.
 *
 * @param f - The homomorphism to verify (domain must be Finite).
 * @returns Whether the homomorphism property holds for all pairs.
 */
const verifyGroupHomomorphism = (<TDomain, TCodomain>(
  f: (GroupHomomorphism<TDomain, TCodomain> & {readonly domain: Group<TDomain> & Finite<TDomain>;})
): boolean => {
  for(const a of f.domain.elements()) {
    for(const b of f.domain.elements()) {
      const lhs = f.map(f.domain.op(a, b));
      // eslint-disable-next-line unicorn/no-array-callback-reference
      const rhs = f.codomain.op(f.map(a), f.map(b));

      if(!f.codomain.equals(lhs, rhs)) {
        return false;
      }
    }
  }

  return true;
});

/**
 * Checks whether a homomorphism is injective (one-to-one) over a finite domain
 * by verifying that the kernel is trivial.
 *
 * @param f - The homomorphism (domain must be Finite).
 * @returns Whether the homomorphism is injective.
 */
const isInjective = (<TDomain, TCodomain>(
  f: (GroupHomomorphism<TDomain, TCodomain> & {readonly domain: Group<TDomain> & Finite<TDomain>;})
): boolean => {
  for(const a of kernel(f)) {
    if(!f.domain.equals(a, f.domain.identity)) {
      return false;
    }
  }

  return true;
});

/**
 * Checks whether a homomorphism is surjective (onto) over finite domain and
 * codomain by verifying that |im(f)| = |H|.
 *
 * @param f - The homomorphism (both domain and codomain must be Finite).
 * @returns Whether the homomorphism is surjective.
 */
const isSurjective = (<TDomain, TCodomain>(
  f: GroupHomomorphism<TDomain, TCodomain> & {
    readonly domain: Group<TDomain> & Finite<TDomain>;
    readonly codomain: Group<TCodomain> & Finite<TCodomain>;
  }
): boolean => (BigInt(imageSet(f).length) === f.codomain.order));

export type {
  GroupHomomorphism,
  GroupIsomorphism
};
export {
  groupHomomorphism,
  groupIsomorphism,
  composeGroupHomomorphisms,
  identityHomomorphism,
  invertIsomorphism,
  kernel,
  image,
  imageSet,
  verifyGroupHomomorphism,
  isInjective,
  isSurjective
};
