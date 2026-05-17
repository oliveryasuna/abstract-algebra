import type {Cancellative} from '../properties';
import type {CommutativeRing} from './commutative-ring';

/** A commutative ring with no zero divisors. */
type IntegralDomain<TElement> = (CommutativeRing<TElement> & {mul: Cancellative;});

export type {
  IntegralDomain
};
