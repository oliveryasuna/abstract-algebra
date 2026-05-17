/**
 * A structure with a finite carrier set.
 *
 * @template TElement - The element type.
 */
interface Finite<TElement> {
  order: bigint;
  elements(): Iterable<TElement>;
}

export type {
  Finite
};
