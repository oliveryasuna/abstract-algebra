import type {AbelianGroup} from '../../composed';
import type {Semigroup} from '../../group';

/**
 * A ring without multiplicative identity (sometimes called a pseudo-ring).
 *
 * Consists of an abelian group under addition and a semigroup under
 * multiplication, with multiplication distributing over addition.
 *
 * @template TElement - The element type.
 */
interface Rng<TElement> {
  add: AbelianGroup<TElement>;
  mul: Semigroup<TElement>;
}

export type {
  Rng
};
