import type {Finite} from '../../../properties';
import {factorial, permutations} from '../../../utils';
import type {Group} from '../group';

/** Branded permutation element represented as a mapping array. */
type PermutationElement = ((readonly number[]) & {readonly __brand: (unique symbol);});

/** The symmetric group S(n) of all permutations of {0, ..., n-1} under composition. Finite, non-abelian for n >= 3. */
type SymmetricGroup = (Group<PermutationElement> & Finite<PermutationElement> & {readonly degree: number;});

/**
 * Creates the symmetric group of degree {@link n}.
 *
 * @param n - The degree.
 * @returns The symmetric group of degree {@link n}.
 * @throws {RangeError} If {@link n} is not a positive integer.
 */
// eslint-disable-next-line max-lines-per-function
const symmetricGroup = ((n: number): SymmetricGroup => {
  if((n < 1) || !Number.isInteger(n)) {
    throw (new RangeError('n must be a positive integer.'));
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mk = ((perm: (readonly number[])): PermutationElement => (perm as PermutationElement));

  const id = mk(Array.from({length: n}, ((_, i): number => i)));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    degree: n,

    // Magma
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    op: ((a: PermutationElement, b: PermutationElement): PermutationElement => mk(Array.from({length: n}, ((_, i) => a[b[i]!]!)))),
    has: ((value: unknown): value is PermutationElement => {
      if(!Array.isArray(value) || (value.length !== n)) {
        return false;
      }

      const seen = (new Set<number>());
      for(const v of value) {
        if((typeof v !== 'number') || !Number.isInteger(v) || (v < 0) || (v >= n) || seen.has(v)) {
          return false;
        }

        seen.add(v);
      }

      return true;
    }),
    equals: ((a: PermutationElement, b: PermutationElement): boolean => a.every((v, i) => (v === b[i]))),

    // Quasigroup
    leftDiv: ((a: PermutationElement, b: PermutationElement): PermutationElement => {
      // a \ b: unique x where op(a, x) = b, so x = a⁻¹ ∘ b
      const aInv = mk(Array.from({length: n}, ((_, i): number => a.indexOf(i))));

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return mk(Array.from({length: n}, ((_, i): number => aInv[b[i]!]!)));
    }),
    rightDiv: ((a: PermutationElement, b: PermutationElement): PermutationElement => {
      // a / b: unique x where op(x, b) = a, so x = a ∘ b⁻¹
      const bInv = mk(Array.from({length: n}, ((_, i): number => b.indexOf(i))));

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return mk(Array.from({length: n}, ((_, i): number => a[bInv[i]!]!)));
    }),

    // UnitalMagma
    identity: id,

    // InverseSemigroup
    inverse: ((a: PermutationElement): PermutationElement => mk(Array.from({length: n}, ((_, i): number => a.indexOf(i))))),

    // Finite
    order: factorial(n),
    // eslint-disable-next-line func-names
    elements: (function* (): Generator<PermutationElement, void, unknown> {
      for(const perm of permutations(n)) {
        yield mk(perm);
      }
    })
  } as unknown) as SymmetricGroup);
});

/**
 * Creates a permutation element from a mapping array.
 *
 * @param sn - The symmetric group.
 * @param mapping - Array where mapping[i] is the image of i.
 * @returns The permutation element.
 * @throws {RangeError} If the mapping is not a valid permutation.
 */
const permutation = ((sn: SymmetricGroup, mapping: (readonly number[])): PermutationElement => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const el = (mapping as PermutationElement);

  if(!sn.has(el)) {
    throw (new RangeError(`Not a valid permutation of size ${mapping.length}.`));
  }

  return el;
});

/**
 * Recovers n (the degree) from the structure.
 *
 * @param sn - The symmetric group.
 * @returns The degree of the symmetric group.
 */
const snN = ((sn: SymmetricGroup): number =>
// // Recover from order (n!).
// // For small groups this is fine; the factorial is stored as order.
// let n = 1;
// let f = 1n;

// while(f < sn.order) {
//   n++;
//   f *= BigInt(n);
// }

// return n;
  sn.degree
);

/**
 * Creates a permutation from cycle notation.
 *
 * E.g., fromCycles(S4, [1, 2, 3]) represents (1 2 3): 1→2, 2→3, 3→1, 0→0.
 *
 * @param sn - The symmetric group.
 * @param cycles - Cycles to compose (applied right to left).
 * @returns The permutation element.
 */
const fromCycles = ((sn: SymmetricGroup, ...cycles: (readonly (readonly number[])[])): PermutationElement => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion
  const n = Number((sn.order > 0n) ? snN(sn) : 0);
  const result = Array.from({length: n}, ((_, i) => i));

  // Apply cycles right to left.
  for(let c = (cycles.length - 1); c >= 0; c--) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const cycle = cycles[c]!;

    for(let i = 0; i < cycle.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      result[cycle[i]!] = cycle[(i + 1) % cycle.length]!;
    }
  }

  return permutation(sn, result);
});

export type {
  PermutationElement,
  SymmetricGroup
};
export {
  symmetricGroup,
  permutation,
  snN,
  fromCycles
};
