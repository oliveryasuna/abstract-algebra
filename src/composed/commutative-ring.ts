import type {Commutative} from '../properties';
import type {Ring} from '../ring';

/** A ring whose multiplication is commutative. */
type CommutativeRing<TElement> = (Ring<TElement> & {mul: Commutative;});

export type {
  CommutativeRing
};
