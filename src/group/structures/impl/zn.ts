import type {Commutative, Cyclic, Finite} from '../../../properties';
import type {Group} from '../group';

/** Branded element of the integers modulo n additive group. */
type ZnElement = (bigint & {readonly __brand: (unique symbol);});

/**
 * The additive group of integers modulo n (Z/nZ).
 *
 * Commutative, finite, and cyclic.
 */
type Zn = (Group<ZnElement> & Commutative & Finite<ZnElement> & Cyclic<ZnElement> & {readonly modulus: bigint;});

/**
 * Creates the additive group of integers modulo {@link n}.
 *
 * @param n - The modulus.
 * @returns The additive group of integers modulo {@link n}.
 * @throws {RangeError} If {@link n} is less than or equal to 0.
 */
const zn = ((n: bigint): Zn => {
  if(n <= 0n) {
    throw (new RangeError('n must be > 0.'));
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mod = ((v: bigint): ZnElement => ((((v % n) + n) % n) as ZnElement));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    modulus: n,

    // Magma
    op: ((a: ZnElement, b: ZnElement): ZnElement => mod(a + b)),
    has: ((value: unknown): value is ZnElement => ((typeof value === 'bigint') && (value >= 0n) && (value < n))),
    equals: ((a: ZnElement, b: ZnElement): boolean => (a === b)),

    // Quasigroup
    leftDiv: ((a: ZnElement, b: ZnElement): ZnElement => mod(b - a)),
    rightDiv: ((a: ZnElement, b: ZnElement): ZnElement => mod(a - b)),

    // UnitalMagma
    identity: mod(0n),

    // InverseSemigroup
    // eslint-disable-next-line @typescript-eslint/no-unsafe-unary-minus
    inverse: ((a: ZnElement): ZnElement => mod(-a)),

    // Finite
    order: n,
    // eslint-disable-next-line func-names
    elements: (function* (): Generator<ZnElement, void, unknown> {
      for(let i = 0n; i < n; i++) {
        yield mod(i);
      }
    }),

    // Cyclic
    generator: mod(1n)
  } as unknown) as Zn);
});

/**
 * Recovers n from the structure.
 *
 * @param zn - The structure to recover n from.
 * @returns The value of n.
 */
// const znN = ((zn: Zn): bigint => zn.order);
const znN = ((zn: Zn): bigint => zn.modulus);

/**
 * Creates a {@link ZnElement} by reducing {@link value} modulo n.
 *
 * @param zn - The structure to recover n from.
 * @param value - The value to reduce modulo n.
 * @returns The {@link ZnElement} by reducing {@link value} modulo n.
 * @throws {RangeError} If {@link value} is not a valid element.
 */
const znElement = ((zn: Zn, value: bigint): ZnElement => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const e1 = ((((value % znN(zn)) + znN(zn)) % znN(zn)) as ZnElement);

  if(!zn.has(e1)) {
    throw (new RangeError(`${value} is not a valid element.`));
  }

  return e1;
});

export type {
  ZnElement,
  Zn
};
export {
  zn,
  znN,
  znElement
};
