import type {Commutative} from '../properties';
import type {Rng} from '../ring';

/** A rng whose multiplication is commutative. */
type CommutativeRng<TElement> = (Rng<TElement> & {mul: Commutative;});

export type {
  CommutativeRng
};
