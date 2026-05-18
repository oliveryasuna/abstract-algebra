/* eslint-disable max-lines */
import type {Finite} from '../properties';
import type {Group} from './structures';

/**
 * A subgroup of G, represented as a membership test and the parent group.
 *
 * @typeParam TElement - Element type of the parent group.
 */
interface Subgroup<TElement> {
  readonly parent: Group<TElement>;
  isMember(a: TElement): boolean;
}

/**
 * A finite subgroup that can enumerate its elements.
 *
 * @typeParam TElement - Element type of the parent group.
 */
interface FiniteSubgroup<TElement> extends Subgroup<TElement> {
  order: bigint;
  elements(): Iterable<TElement>;
}

/**
 * Creates a finite subgroup from an explicit set of elements.
 *
 * Does not verify that the set is actually closed under the group operation.
 * Use {@link verifySubgroup} to check.
 *
 * @param parent - The parent group.
 * @param elems - The elements of the subgroup.
 * @returns The finite subgroup.
 */
const finiteSubgroup = (<TElement>(
  parent: Group<TElement>,
  elems: TElement[]
): FiniteSubgroup<TElement> => ({
  parent: parent,
  isMember: ((a: TElement): boolean => elems.some(((e): boolean => parent.equals(e, a)))),
  // eslint-disable-next-line func-names
  elements: (function* (): Generator<TElement, void, unknown> {
    yield* elems;
  }),
  order: BigInt(elems.length)
}));

/**
 * Generates the subgroup of a finite group from a set of generators.
 *
 * Repeatedly applies the group operation and inverse to the generators
 * until no new elements are found.
 *
 * @param g - The parent group.
 * @param generators - The generating elements.
 * @returns The generated finite subgroup.
 */
// eslint-disable-next-line max-statements
const generateSubgroup = (<TElement>(
  g: Group<TElement>,
  generators: TElement[]
): FiniteSubgroup<TElement> => {
  const elems: TElement[] = [g.identity];

  const contains = ((a: TElement): boolean => elems.some(((e): boolean => g.equals(e, a))));

  const queue: TElement[] = [...generators];
  while(queue.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const a = queue.pop()!;

    if(contains(a)) {
      continue;
    }

    elems.push(a);

    // Generate new elements by combining with all existing elements.
    for(const e of elems) {
      const ab = g.op(a, e);
      const ba = g.op(e, a);
      const aInv = g.inverse(a);

      if(!contains(ab)) {
        queue.push(ab);
      }

      if(!contains(ba)) {
        queue.push(ba);
      }

      if(!contains(aInv)) {
        queue.push(aInv);
      }
    }
  }

  return finiteSubgroup(g, elems);
});

/**
 * Verifies that a finite subgroup satisfies the subgroup axioms:
 * - Contains the identity.
 * - Closed under the operation.
 * - Closed under inverses.
 *
 * @param h - The subgroup to verify.
 * @returns Whether the subgroup axioms hold.
 */
const verifySubgroup = (<TElement>(
  h: FiniteSubgroup<TElement>
): boolean => {
  const g = h.parent;

  // Must contain identity.
  if(!h.isMember(g.identity)) {
    return false;
  }

  for(const a of h.elements()) {
    // Closed under inverse.
    if(!h.isMember(g.inverse(a))) {
      return false;
    }

    // Closed under operation.
    for(const b of h.elements()) {
      if(!h.isMember(g.op(a, b))) {
        return false;
      }
    }
  }

  return true;
});

/**
 * Computes the left coset aH = { op(a, h) | h ∈ H }.
 *
 * @param g - The parent group.
 * @param h - The subgroup.
 * @param a - The coset representative.
 * @returns An array of elements in the left coset.
 */
const leftCoset = (<TElement>(
  g: Group<TElement>,
  h: FiniteSubgroup<TElement>,
  a: TElement
): TElement[] => {
  const result: TElement[] = [];
  for(const hElem of h.elements()) {
    result.push(g.op(a, hElem));
  }

  return result;
});

/**
 * Computes the right coset Ha = { op(h, a) | h ∈ H }.
 *
 * @param g - The parent group.
 * @param h - The subgroup.
 * @param a - The coset representative.
 * @returns An array of elements in the right coset.
 */
const rightCoset = (<TElement>(
  g: Group<TElement>,
  h: FiniteSubgroup<TElement>,
  a: TElement
): TElement[] => {
  const result: TElement[] = [];
  for(const hElem of h.elements()) {
    result.push(g.op(hElem, a));
  }

  return result;
});

/**
 * Enumerates all distinct left cosets of H in G.
 *
 * @param g - The parent group (must be Finite).
 * @param h - The subgroup.
 * @returns An array of left cosets, each represented as an array of elements.
 */
const leftCosets = (<TElement>(
  g: Group<TElement> & Finite<TElement>,
  h: FiniteSubgroup<TElement>
): TElement[][] => {
  const cosets: TElement[][] = [];
  const seen: TElement[] = [];

  const isSeen = ((a: TElement): boolean => seen.some(((s): boolean => g.equals(s, a))));

  for(const a of g.elements()) {
    if(isSeen(a)) {
      continue;
    }

    const coset = leftCoset(g, h, a);
    for(const c of coset) {
      if(!isSeen(c)) {
        seen.push(c);
      }
    }

    cosets.push(coset);
  }

  return cosets;
});

/**
 * Enumerates all distinct right cosets of H in G.
 *
 * @param g - The parent group (must be Finite).
 * @param h - The subgroup.
 * @returns An array of right cosets, each represented as an array of elements.
 */
const rightCosets = (<TElement>(
  g: Group<TElement> & Finite<TElement>,
  h: FiniteSubgroup<TElement>
): TElement[][] => {
  const cosets: TElement[][] = [];
  const seen: TElement[] = [];

  const isSeen = ((a: TElement): boolean => seen.some(((s): boolean => g.equals(s, a))));

  for(const a of g.elements()) {
    if(isSeen(a)) {
      continue;
    }

    const coset = rightCoset(g, h, a);
    for(const c of coset) {
      if(!isSeen(c)) {
        seen.push(c);
      }
    }

    cosets.push(coset);
  }

  return cosets;
});

/**
 * Checks whether a subgroup H is normal in G.
 *
 * A subgroup is normal if aH = Ha for all a ∈ G, equivalently
 * if a * h * a⁻¹ ∈ H for all a ∈ G, h ∈ H.
 *
 * @param g - The parent group (must be Finite).
 * @param h - The subgroup to check.
 * @returns Whether H is normal in G.
 */
const isNormalSubgroup = (<TElement>(
  g: Group<TElement> & Finite<TElement>,
  h: FiniteSubgroup<TElement>
): boolean => {
  for(const a of g.elements()) {
    for(const hElem of h.elements()) {
      // Check a * h * a⁻¹ ∈ H
      const conjugate = g.op(g.op(a, hElem), g.inverse(a));

      if(!h.isMember(conjugate)) {
        return false;
      }
    }
  }

  return true;
});

/**
 * Computes the index [G : H] = |G| / |H| for finite groups.
 *
 * @param g - The parent group (must be Finite).
 * @param h - The subgroup.
 * @returns The index.
 */
const index = (<TElement>(
  g: Group<TElement> & Finite<TElement>,
  h: FiniteSubgroup<TElement>
): bigint => (g.order / h.order));

/**
 * Computes the center of a finite group: Z(G) = { a ∈ G | ag = ga for all g ∈ G }.
 *
 * @param g - The group (must be Finite).
 * @returns The center as a finite subgroup.
 */
const center = (<TElement>(
  g: Group<TElement> & Finite<TElement>
): FiniteSubgroup<TElement> => {
  const elems: TElement[] = [];

  for(const a of g.elements()) {
    let central = true;

    for(const b of g.elements()) {
      // eslint-disable-next-line sonarjs/arguments-order
      if(!g.equals(g.op(a, b), g.op(b, a))) {
        central = false;

        break;
      }
    }

    if(central) {
      elems.push(a);
    }
  }

  return finiteSubgroup(g, elems);
});

/**
 * Computes the centralizer of an element: C_G(a) = { g ∈ G | ga = ag }.
 *
 * @param g - The group (must be Finite).
 * @param a - The element.
 * @returns The centralizer as a finite subgroup.
 */
const centralizer = (<TElement>(
  g: Group<TElement> & Finite<TElement>,
  a: TElement
): FiniteSubgroup<TElement> => {
  const elems: TElement[] = [];

  for(const b of g.elements()) {
    // eslint-disable-next-line sonarjs/arguments-order
    if(g.equals(g.op(b, a), g.op(a, b))) {
      elems.push(b);
    }
  }

  return finiteSubgroup(g, elems);
});

/**
 * Computes the order of an element: the smallest positive n such that a^n = e.
 *
 * Warning: for infinite groups this may not terminate.
 *
 * @param g - The group.
 * @param a - The element.
 * @returns The order of the element.
 */
const elementOrder = (<TElement>(
  g: Group<TElement>,
  a: TElement
): bigint => {
  if(g.equals(a, g.identity)) {
    return 1n;
  }

  let current = a;
  let n = 1n;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  while(true) {
    if(g.equals(current, g.identity)) {
      return n;
    }

    current = g.op(current, a);
    n++;
  }
});

/**
 * Computes the order of an element with a bound.
 *
 * Returns the order if found within the limit, or 0n otherwise.
 *
 * @param g - The group.
 * @param a - The element.
 * @param limit - Maximum n to check.
 * @returns The order, or 0n if not found within the limit.
 */
const elementOrderBounded = (<TElement>(
  g: Group<TElement>,
  a: TElement,
  limit: bigint
): bigint => {
  let current = a;

  for(let n = 1n; n <= limit; n++) {
    if(g.equals(current, g.identity)) {
      return n;
    }

    current = g.op(current, a);
  }

  return 0n;
});

export type {
  Subgroup,
  FiniteSubgroup
};
export {
  finiteSubgroup,
  generateSubgroup,
  verifySubgroup,
  leftCoset,
  rightCoset,
  leftCosets,
  rightCosets,
  isNormalSubgroup,
  index,
  center,
  centralizer,
  elementOrder,
  elementOrderBounded
};
