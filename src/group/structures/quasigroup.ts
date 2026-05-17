import type {Magma} from './magma';

/**
 * A magma where division is always possible.
 *
 * Laws: `op(a, leftDiv(a, b)) = b` and `op(rightDiv(a, b), b) = a`
 *
 * @template TElement - The element type.
 */
interface Quasigroup<TElement> extends Magma<TElement> {
  leftDiv(a: TElement, b: TElement): TElement;
  rightDiv(a: TElement, b: TElement): TElement;
}

export type {
  Quasigroup
};
