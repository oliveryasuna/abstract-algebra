import type {Quasigroup} from './quasigroup';
import type {Semigroup} from './semigroup';

/**
 * A semigroup where every element has a unique inverse.
 *
 * Law: `op(a, op(inverse(a), a)) = a` and `op(inverse(a), op(a, inverse(a))) = inverse(a)`.
 *
 * @template TElement - The element type.
 */
interface InverseSemigroup<TElement> extends Quasigroup<TElement>, Semigroup<TElement> {
  inverse(a: TElement): TElement;
}

const inverseSemigroupFromInverse = (<TElement>(base: (Semigroup<TElement> & {inverse(a: TElement): TElement;})): InverseSemigroup<TElement> => ({
  ...base,
  leftDiv: ((a, b) => base.op(base.inverse(a), b)),
  rightDiv: ((a, b) => base.op(a, base.inverse(b)))
}));

export type {
  InverseSemigroup
};
export {
  inverseSemigroupFromInverse
};
