/**
 * A set with a closed binary operation.
 *
 * @template TElement - The element type.
 */
interface Magma<TElement> {
  op(a: TElement, b: TElement): TElement;
  has(value: unknown): value is TElement;
  equals(a: TElement, b: TElement): boolean;
}

export type {
  Magma
};
