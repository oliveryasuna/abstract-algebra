import type {Magma} from './magma';

/**
 * A magma with an identity element.
 *
 * Law: `op(a, identity) = op(identity, a) = a`
 *
 * @template TElement - The element type.
 */
interface UnitalMagma<TElement> extends Magma<TElement> {
  identity: TElement;
}

export type {
  UnitalMagma
};
