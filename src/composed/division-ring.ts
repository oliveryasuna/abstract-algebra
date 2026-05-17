import type {Ring} from '../ring';

/** A ring where every non-zero element has a multiplicative inverse. Also called a skew field. */
type DivisionRing<TElement> = (Ring<TElement> & {mulInverse(a: TElement): TElement;});

export type {
  DivisionRing
};
