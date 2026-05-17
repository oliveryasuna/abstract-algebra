import type {Semigroup} from './semigroup';
import type {UnitalMagma} from './unital-magma';

/**
 * A semigroup with an identity element.
 *
 * @template TElement - The element type.
 */
interface Monoid<TElement> extends UnitalMagma<TElement>, Semigroup<TElement> {
}

export type {
  Monoid
};
