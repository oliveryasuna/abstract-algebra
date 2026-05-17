import type {InverseSemigroup} from './inverse-semigroup';
import type {Loop} from './loop';
import type {Monoid} from './monoid';

/**
 * A monoid where every element has an inverse.
 *
 * Equivalently, a set with an associative binary operation, an identity
 * element, and inverses for all elements.
 *
 * @template TElement - The element type.
 */
interface Group<TElement> extends Loop<TElement>, InverseSemigroup<TElement>, Monoid<TElement> {
}

export type {
  Group
};
