import type {Commutative, Cyclic} from '../../../properties';
import type {Group} from '../group';

/** Branded integer element. */
type IntegerElement = (bigint & {readonly __brand: (unique symbol);});

/**
 * The integers under addition (Z, +).
 *
 * Commutative, cyclic, infinite.
 */
type IntegerAdditiveGroup = (Group<IntegerElement> & Commutative & Cyclic<IntegerElement>);

/**
 * Creates the integer additive group.
 *
 * @returns The integer additive group.
 */
const integerAdditiveGroup = ((): IntegerAdditiveGroup => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mk = ((v: bigint): IntegerElement => (v as IntegerElement));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    // Magma
    op: ((a: IntegerElement, b: IntegerElement): IntegerElement => mk(a + b)),
    has: ((value: unknown): value is IntegerElement => (typeof value === 'bigint')),
    equals: ((a: IntegerElement, b: IntegerElement): boolean => (a === b)),

    // Quasigroup
    leftDiv: ((a: IntegerElement, b: IntegerElement): IntegerElement => mk(b - a)),
    rightDiv: ((a: IntegerElement, b: IntegerElement): IntegerElement => mk(a - b)),

    // UnitalMagma
    identity: mk(0n),

    // InverseSemigroup
    // eslint-disable-next-line @typescript-eslint/no-unsafe-unary-minus
    inverse: ((a: IntegerElement): IntegerElement => mk(-a)),

    // Cyclic
    generator: mk(1n)
  } as unknown) as IntegerAdditiveGroup);
});

/**
 * Creates an {@link IntegerElement} from a bigint value.
 *
 * @param value - The bigint value.
 * @returns The integer element.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
const integerElement = ((value: bigint): IntegerElement => (value as IntegerElement));

export type {
  IntegerElement,
  IntegerAdditiveGroup
};
export {
  integerAdditiveGroup,
  integerElement
};
