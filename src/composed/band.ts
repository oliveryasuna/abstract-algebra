import type {Semigroup} from '../group';
import type {Idempotent} from '../properties';

/** A semigroup whose operation is idempotent. */
type Band<TElement> = (Semigroup<TElement> & Idempotent);

export type {
  Band
};
