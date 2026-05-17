import type {Magma} from './magma';

/**
 * A magma whose operation is associative.
 *
 * Law: `op(op(a, b), c) = op(a, op(b, c))`
 *
 * @template TElement - The element type.
 */
interface Semigroup<TElement> extends Magma<TElement> {
}

export type {
  Semigroup
};
