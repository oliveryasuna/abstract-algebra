import type {Quasigroup} from './quasigroup';
import type {UnitalMagma} from './unital-magma';

/**
 * A quasigroup with an identity element.
 *
 * @template TElement - The element type.
 */
interface Loop<TElement> extends Quasigroup<TElement>, UnitalMagma<TElement> {
}

export type {
  Loop
};
