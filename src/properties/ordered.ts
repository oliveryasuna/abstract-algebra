/**
 * A structure with a total order compatible with its operation.
 *
 * @template TElement - The element type.
 */
interface Ordered<TElement> {
  compare(a: TElement, b: TElement): (-1 | 0 | 1);
}

export type {
  Ordered
};
