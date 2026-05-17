import type {Group} from '../group';
import type {Finite} from '../properties';

/** A group with finitely many elements. */
type FiniteGroup<TElement> = (Group<TElement> & Finite<TElement>);

export type {
  FiniteGroup
};
