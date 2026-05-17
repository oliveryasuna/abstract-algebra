import type {Monoid} from '../../group';
import type {Rng} from './rng';

/**
 * A rng with a multiplicative identity element.
 *
 * @template TElement - The element type.
 */
interface Ring<TElement> extends Rng<TElement> {
  mul: Monoid<TElement>;
}

export type {
  Ring
};
