import type {Idempotent} from '../properties';
import type {CommutativeRing} from './commutative-ring';

/** A commutative ring where every element is multiplicatively idempotent. */
type BooleanRing<TElement> = (CommutativeRing<TElement> & {mul: Idempotent;});

export type {
  BooleanRing
};
