import type {Commutative, Cyclic, Finite} from '../../../properties';
import type {Group} from '../group';

/** Branded boolean element of the XOR group. */
type BooleanElement = (boolean & {readonly __brand: (unique symbol);});

/**
 * The group ({false, true}, XOR).
 *
 * Commutative, finite, cyclic, order 2.
 * Every element is self-inverse.
 */
type BooleanGroup = (Group<BooleanElement> & Commutative & Finite<BooleanElement> & Cyclic<BooleanElement>);

/**
 * Creates the boolean XOR group.
 *
 * @returns The boolean XOR group.
 */
const booleanGroup = ((): BooleanGroup => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mk = ((value: boolean): BooleanElement => (value as BooleanElement));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    // Magma
    op: ((a: BooleanElement, b: BooleanElement): BooleanElement => mk(a !== b)),
    has: ((value: unknown): value is BooleanElement => (typeof value === 'boolean')),
    equals: ((a: BooleanElement, b: BooleanElement): boolean => (a === b)),

    // Quasigroup
    leftDiv: ((a: BooleanElement, b: BooleanElement): BooleanElement => mk(a !== b)),
    rightDiv: ((a: BooleanElement, b: BooleanElement): BooleanElement => mk(a !== b)),

    // UnitalMagma
    identity: mk(false),

    // InverseSemigroup
    inverse: ((a: BooleanElement): BooleanElement => a),

    // Finite
    order: 2n,
    // eslint-disable-next-line func-names
    elements: (function* (): Generator<BooleanElement, void, unknown> {
      yield mk(false);
      yield mk(true);
    }),

    // Cyclic
    generator: mk(true)
  } as unknown) as BooleanGroup);
});

export type {
  BooleanElement,
  BooleanGroup
};
export {
  booleanGroup
};
