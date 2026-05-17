import type {Group} from '../group';
import type {Commutative} from '../properties';

/** A group whose operation is commutative. */
type AbelianGroup<TElement> = (Group<TElement> & Commutative);

export type {
  AbelianGroup
};
