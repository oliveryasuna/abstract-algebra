import type {DivisionRing} from '../../../composed';
import type {Semigroup} from '../../../group';

/**
 * Branded quaternion element q = a + bi + cj + dk.
 *
 * Uses `number` for coefficients (IEEE 754 double precision).
 */
type QuaternionElement = ({
  readonly a: number;
  readonly b: number;
  readonly c: number;
  readonly d: number;
} & {readonly __brand: (unique symbol);});

/**
 * The quaternion division ring (H).
 *
 * Non-commutative. Every non-zero quaternion has a multiplicative inverse.
 */
type QuaternionRing = (DivisionRing<QuaternionElement>);

/**
 * Tolerance for floating-point equality comparison.
 */
const EPSILON = 1e-10;

/**
 * Creates the quaternion division ring.
 *
 * @returns The quaternion ring H.
 */
// eslint-disable-next-line max-lines-per-function
const quaternionRing = ((): QuaternionRing => {
  const mk = ((a: number, b: number, c: number, d: number): QuaternionElement =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    ({
      a: a,
      b: b,
      c: c,
      d: d
    } as QuaternionElement)
  );

  const zero = mk(0, 0, 0, 0);
  const one = mk(1, 0, 0, 0);

  const normSq = ((q: QuaternionElement): number =>
    ((((q.a * q.a) + (q.b * q.b)) + (q.c * q.c)) + (q.d * q.d)));

  const approxEquals = ((x: number, y: number): boolean =>
    (Math.abs(x - y) < EPSILON));

  const equals = ((p: QuaternionElement, q: QuaternionElement): boolean =>
    (approxEquals(p.a, q.a) && approxEquals(p.b, q.b)
      && approxEquals(p.c, q.c) && approxEquals(p.d, q.d)));

  const has = ((value: unknown): value is QuaternionElement =>
    ((value !== null)
      && (typeof value === 'object')
      && ('a' in value)
      && ('b' in value)
      && ('c' in value)
      && ('d' in value)
      && (typeof value.a === 'number')
      && (typeof value.b === 'number')
      && (typeof value.c === 'number')
      && (typeof value.d === 'number')));

  const add = ((p: QuaternionElement, q: QuaternionElement): QuaternionElement =>
    mk((p.a + q.a), (p.b + q.b), (p.c + q.c), (p.d + q.d)));

  const negate = ((q: QuaternionElement): QuaternionElement =>
    mk(-q.a, -q.b, -q.c, -q.d));

  // Hamilton product:
  // (a1 + b1i + c1j + d1k)(a2 + b2i + c2j + d2k)
  const multiply = ((p: QuaternionElement, q: QuaternionElement): QuaternionElement =>
    mk(
      ((((p.a * q.a) - (p.b * q.b)) - (p.c * q.c)) - (p.d * q.d)),
      ((((p.a * q.b) + (p.b * q.a)) + (p.c * q.d)) - (p.d * q.c)),
      ((((p.a * q.c) - (p.b * q.d)) + (p.c * q.a)) + (p.d * q.b)),
      ((((p.a * q.d) + (p.b * q.c)) - (p.c * q.b)) + (p.d * q.a))
    ));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const addSemigroup: Semigroup<QuaternionElement> = (({
    op: add,
    has: has,
    equals: equals
  } as unknown) as Semigroup<QuaternionElement>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mulSemigroup: Semigroup<QuaternionElement> = (({
    op: multiply,
    has: has,
    equals: equals
  } as unknown) as Semigroup<QuaternionElement>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    add: {
      ...addSemigroup,
      identity: zero,
      inverse: negate,
      leftDiv: ((a: QuaternionElement, b: QuaternionElement): QuaternionElement => add(negate(a), b)),
      rightDiv: ((a: QuaternionElement, b: QuaternionElement): QuaternionElement => add(a, negate(b)))
    },

    mul: {
      ...mulSemigroup,
      identity: one
    },

    mulInverse: ((q: QuaternionElement): QuaternionElement => {
      const ns = normSq(q);

      if(ns < EPSILON) {
        throw (new RangeError('Zero quaternion has no inverse.'));
      }

      // q^-1 = conjugate(q) / |q|^2
      return mk((q.a / ns), (-q.b / ns), (-q.c / ns), (-q.d / ns));
    })
  } as unknown) as QuaternionRing);
});

/**
 * Creates a quaternion element q = a + bi + cj + dk.
 *
 * @param a - Real part.
 * @param b - i coefficient.
 * @param c - j coefficient.
 * @param d - k coefficient.
 * @returns The quaternion element.
 */
// eslint-disable-next-line sonarjs/no-identical-functions
const quaternion = ((a: number, b = 0, c = 0, d = 0): QuaternionElement =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  ({
    a: a,
    b: b,
    c: c,
    d: d
  } as QuaternionElement)
);

/**
 * Returns the conjugate of a quaternion: a - bi - cj - dk.
 *
 * @param q - The quaternion.
 * @returns The conjugate.
 */
const quaternionConjugate = ((q: QuaternionElement): QuaternionElement =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  ({
    a: q.a,
    b: -q.b,
    c: -q.c,
    d: -q.d
  } as QuaternionElement)
);

/**
 * Returns the norm (magnitude) of a quaternion: sqrt(a² + b² + c² + d²).
 *
 * @param q - The quaternion.
 * @returns The norm.
 */
const quaternionNorm = ((q: QuaternionElement): number =>
  Math.hypot((q.a), (q.b), (q.c), (q.d)));

/**
 * Returns the squared norm of a quaternion: a² + b² + c² + d².
 *
 * @param q - The quaternion.
 * @returns The squared norm.
 */
const quaternionNormSq = ((q: QuaternionElement): number =>
  ((((q.a * q.a) + (q.b * q.b)) + (q.c * q.c)) + (q.d * q.d)));

export type {
  QuaternionElement,
  QuaternionRing
};
export {
  quaternionRing,
  quaternion,
  quaternionConjugate,
  quaternionNorm,
  quaternionNormSq,
  EPSILON
};
