/* eslint-disable max-lines */
import type {Finite} from '../properties';
import type {Ring} from './structures';

/**
 * An ideal of a ring R, represented as a membership test.
 *
 * @typeParam TElement - Element type of the parent ring.
 */
interface Ideal<TElement> {
  readonly parent: Ring<TElement>;
  isMember(a: TElement): boolean;
}

/**
 * A finite ideal that can enumerate its elements.
 *
 * @typeParam TElement - Element type of the parent ring.
 */
interface FiniteIdeal<TElement> extends Ideal<TElement> {
  order: bigint;
  elements(): Iterable<TElement>;
}

/**
 * Creates a finite ideal from an explicit set of elements.
 *
 * Does not verify that the set is actually an ideal.
 * Use {@link verifyIdeal} to check.
 *
 * @param parent - The parent ring.
 * @param elems - The elements of the ideal.
 * @returns The finite ideal.
 */
const finiteIdeal = (<TElement>(
  parent: Ring<TElement>,
  elems: TElement[]
): FiniteIdeal<TElement> => ({
  parent: parent,
  isMember: ((a: TElement): boolean =>
    elems.some((e => parent.add.equals(e, a)))),
  // eslint-disable-next-line func-names
  elements: (function* (): Generator<TElement, void, unknown> {
    yield* elems;
  }),
  order: BigInt(elems.length)
}));

/**
 * Generates the (two-sided) ideal from a set of generators in a finite ring.
 *
 * The generated ideal is the smallest ideal containing all generators:
 * I = { Σ r_i * g_j * s_i | r_i, s_i ∈ R, g_j ∈ generators }
 *
 * @param r - The parent ring (must have a finite additive group).
 * @param generators - The generating elements.
 * @returns The generated finite ideal.
 */
// eslint-disable-next-line max-lines-per-function, max-statements
const generateIdeal = (<TElement>(
  r: (Ring<TElement> & {add: Finite<TElement>;}),
  generators: TElement[]
// eslint-disable-next-line sonarjs/cognitive-complexity
): FiniteIdeal<TElement> => {
  const elems: TElement[] = [r.add.identity];

  const contains = ((a: TElement): boolean =>
    elems.some((e => r.add.equals(e, a))));

  let changed = true;

  while(changed) {
    changed = false;

    for(const g of generators) {
      for(const s of r.add.elements()) {
        // Left multiplication: s * g
        const left = r.mul.op(s, g);

        if(!contains(left)) {
          elems.push(left);
          changed = true;
        }

        // Right multiplication: g * s
        const right = r.mul.op(g, s);

        if(!contains(right)) {
          elems.push(right);
          changed = true;
        }
      }
    }

    // Close under addition and additive inverse.
    for(const a of elems) {
      for(const b of elems) {
        const sum = r.add.op(a, b);

        if(!contains(sum)) {
          elems.push(sum);
          changed = true;
        }
      }

      const neg = r.add.inverse(a);

      if(!contains(neg)) {
        elems.push(neg);
        changed = true;
      }
    }
  }

  return finiteIdeal(r, elems);
});

/**
 * Verifies that a finite ideal satisfies the ideal axioms:
 * - Contains zero.
 * - Closed under addition.
 * - Closed under additive inverse.
 * - Closed under left multiplication by any ring element.
 * - Closed under right multiplication by any ring element.
 *
 * @param ideal - The ideal to verify.
 * @returns Whether the ideal axioms hold.
 */
const verifyIdeal = (<TElement>(
  ideal: (FiniteIdeal<TElement> & {parent: Ring<TElement> & {add: Finite<TElement>;};})
// eslint-disable-next-line sonarjs/cognitive-complexity
): boolean => {
  const r = ideal.parent;

  // Must contain zero.
  if(!ideal.isMember(r.add.identity)) {
    return false;
  }

  for(const a of ideal.elements()) {
    // Closed under additive inverse.
    if(!ideal.isMember(r.add.inverse(a))) {
      return false;
    }

    // Closed under addition with other ideal elements.
    for(const b of ideal.elements()) {
      if(!ideal.isMember(r.add.op(a, b))) {
        return false;
      }
    }

    // Closed under left and right multiplication by all ring elements.
    for(const s of r.add.elements()) {
      if(!ideal.isMember(r.mul.op(s, a))) {
        return false;
      }

      if(!ideal.isMember(r.mul.op(a, s))) {
        return false;
      }
    }
  }

  return true;
});

/**
 * Checks whether an ideal is the zero ideal (contains only zero).
 *
 * @param ideal - The ideal.
 * @returns Whether the ideal is trivial.
 */
const isZeroIdeal = (<TElement>(
  ideal: FiniteIdeal<TElement>
): boolean => (ideal.order === 1n));

/**
 * Checks whether an ideal is the whole ring (contains the multiplicative identity).
 *
 * If an ideal contains a unit, it's the whole ring.
 *
 * @param ideal - The ideal.
 * @returns Whether the ideal is the whole ring.
 */
const isWholeRing = (<TElement>(
  ideal: FiniteIdeal<TElement>
): boolean => ideal.isMember(ideal.parent.mul.identity));

/**
 * Computes the sum of two ideals: I + J = { a + b | a ∈ I, b ∈ J }.
 *
 * @param i - The first ideal.
 * @param j - The second ideal.
 * @returns The sum ideal.
 */
const idealSum = (<TElement>(
  i: FiniteIdeal<TElement>,
  j: FiniteIdeal<TElement>
): FiniteIdeal<TElement> => {
  const r = i.parent;
  const elems: TElement[] = [];

  const contains = ((a: TElement): boolean => elems.some((e => r.add.equals(e, a))));

  for(const a of i.elements()) {
    for(const b of j.elements()) {
      const sum = r.add.op(a, b);

      if(!contains(sum)) {
        elems.push(sum);
      }
    }
  }

  return finiteIdeal(r, elems);
});

/**
 * Computes the intersection of two ideals: I ∩ J.
 *
 * @param i - The first ideal.
 * @param j - The second ideal.
 * @returns The intersection ideal.
 */
const idealIntersection = (<TElement>(
  i: FiniteIdeal<TElement>,
  j: FiniteIdeal<TElement>
): FiniteIdeal<TElement> => {
  const r = i.parent;
  const elems: TElement[] = [];

  for(const a of i.elements()) {
    if(j.isMember(a)) {
      elems.push(a);
    }
  }

  return finiteIdeal(r, elems);
});

/**
 * Computes the product of two ideals: IJ = { Σ a_i * b_i | a_i ∈ I, b_i ∈ J }.
 *
 * @param i - The first ideal.
 * @param j - The second ideal.
 * @returns The product ideal.
 */
// eslint-disable-next-line max-lines-per-function, max-statements
const idealProduct = (<TElement>(
  i: FiniteIdeal<TElement>,
  j: FiniteIdeal<TElement>
// eslint-disable-next-line sonarjs/cognitive-complexity
): FiniteIdeal<TElement> => {
  const r = i.parent;
  const elems: TElement[] = [r.add.identity];

  const contains = ((a: TElement): boolean =>
    elems.some((e => r.add.equals(e, a))));

  // Generate all products a * b, then close under addition.
  const products: TElement[] = [];

  for(const a of i.elements()) {
    for(const b of j.elements()) {
      products.push(r.mul.op(a, b));
    }
  }

  // Close under addition.
  let changed = true;

  // Start with all products.
  for(const p of products) {
    if(!contains(p)) {
      elems.push(p);
    }
  }

  while(changed) {
    changed = false;

    for(const a of elems) {
      for(const b of elems) {
        const sum = r.add.op(a, b);

        if(!contains(sum)) {
          elems.push(sum);
          changed = true;
        }
      }

      const neg = r.add.inverse(a);

      if(!contains(neg)) {
        elems.push(neg);
        changed = true;
      }
    }
  }

  return finiteIdeal(r, elems);
});

export type {
  Ideal,
  FiniteIdeal
};
export {
  finiteIdeal,
  generateIdeal,
  verifyIdeal,
  isZeroIdeal,
  isWholeRing,
  idealSum,
  idealIntersection,
  idealProduct
};
