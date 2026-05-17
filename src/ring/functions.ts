import type {EuclideanDomain, Field} from '../composed';
import type {Ring} from './structures';

/**
 * Computes the greatest common divisor of two elements in a Euclidean domain
 * using the Euclidean algorithm.
 *
 * @param ed - The Euclidean domain.
 * @param a - The first element.
 * @param b - The second element.
 * @returns The GCD of {@link a} and {@link b}.
 */
const gcd = (<TElement>(ed: EuclideanDomain<TElement>, a: TElement, b: TElement): TElement => {
  let r0 = a;
  let r1 = b;

  while(!ed.mul.equals(r1, ed.add.identity)) {
    const {rem} = ed.divMod(r0, r1);

    r0 = r1;
    r1 = rem;
  }

  return r0;
});

/**
 * Computes the least common multiple of two elements in a Euclidean domain.
 *
 * lcm(a, b) = |a * b| / gcd(a, b)
 *
 * Returns the additive identity (zero) if either argument is zero.
 *
 * @param ed - The Euclidean domain.
 * @param a - The first element.
 * @param b - The second element.
 * @returns The LCM of {@link a} and {@link b}.
 */
const lcm = (<TElement>(ed: EuclideanDomain<TElement>, a: TElement, b: TElement): TElement => {
  if(ed.mul.equals(a, ed.add.identity) || ed.mul.equals(b, ed.add.identity)) {
    return ed.add.identity;
  }

  const g = gcd(ed, a, b);
  const {quot} = ed.divMod(a, g);

  return ed.mul.op(quot, b);
});

/**
 * Multiplies an element by a non-negative integer scalar using the
 * additive group.
 *
 * scalarMul(r, a, 3n) = add(a, add(a, a))
 *
 * @param r - The ring.
 * @param a - The element.
 * @param n - The non-negative scalar.
 * @returns The result of adding {@link a} to itself {@link n} times.
 * @throws {RangeError} If {@link n} is negative.
 */
const scalarMul = (<TElement>(r: Ring<TElement>, a: TElement, n: bigint): TElement => {
  if(n < 0n) {
    return scalarMul(r, r.add.inverse(a), -n);
  }

  if(n === 0n) {
    return r.add.identity;
  }

  // Repeated doubling via the additive group.
  let result: TElement = r.add.identity;
  let base: TElement = a;
  let e: bigint = n;

  while(e > 0n) {
    if((e & 1n) !== 0n) {
      result = r.add.op(result, base);
    }

    base = r.add.op(base, base);
    e >>= 1n;
  }

  return result;
});

/**
 * Raises a ring element to a non-negative integer power using the
 * multiplicative monoid.
 *
 * ringPow(r, a, 3n) = mul(a, mul(a, a))
 *
 * @param r - The ring.
 * @param a - The element.
 * @param n - The non-negative exponent.
 * @returns The result of multiplying {@link a} by itself {@link n} times.
 * @throws {RangeError} If {@link n} is negative.
 */
const ringPow = (<TElement>(r: Ring<TElement>, a: TElement, n: bigint): TElement => {
  if(n < 0n) {
    throw (new RangeError('n must be >= 0 for ringPow. Use fieldPow for negative exponents.'));
  }

  if(n === 0n) {
    return r.mul.identity;
  }

  let result: TElement = r.mul.identity;
  let base: TElement = a;
  let e: bigint = n;

  while(e > 0n) {
    if((e & 1n) !== 0n) {
      result = r.mul.op(result, base);
    }

    base = r.mul.op(base, base);
    e >>= 1n;
  }

  return result;
});

/**
 * Raises a field element to an integer power, supporting negative exponents
 * via the multiplicative inverse.
 *
 * @param f - The field.
 * @param a - The element (must be non-zero for negative exponents).
 * @param n - The exponent.
 * @returns The result of raising {@link a} to the power {@link n}.
 * @throws {RangeError} If {@link n} is negative and {@link a} is zero.
 */
const fieldPow = (<TElement>(f: Field<TElement>, a: TElement, n: bigint): TElement => {
  if(n < 0n) {
    return ringPow(f, f.mulInverse(a), -n);
  }

  return ringPow(f, a, n);
});

/**
 * Computes the characteristic of a ring — the smallest positive integer n
 * such that n * 1 = 0, or 0n if no such n exists.
 *
 * Warning: for infinite-characteristic rings, this will not terminate.
 * Use {@link characteristicBounded} with a limit instead.
 *
 * @param r - The ring.
 * @returns The characteristic.
 */
const characteristic = (<TElement>(r: Ring<TElement>): bigint => {
  const one = r.mul.identity;
  const zero = r.add.identity;

  let sum: TElement = one;
  let n = 1n;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  while(true) {
    if(r.add.equals(sum, zero)) {
      return n;
    }

    sum = r.add.op(sum, one);
    n++;
  }
});

/**
 * Computes the characteristic of a ring up to a bound.
 *
 * Returns the characteristic if found within {@link limit}, or 0n if
 * no characteristic was found (suggesting characteristic 0 or very large).
 *
 * @param r - The ring.
 * @param limit - The maximum n to test.
 * @returns The characteristic, or 0n if not found within the limit.
 */
const characteristicBounded = (<TElement>(r: Ring<TElement>, limit: bigint): bigint => {
  const one = r.mul.identity;
  const zero = r.add.identity;

  let sum: TElement = one;

  for(let n = 1n; n <= limit; n++) {
    if(r.add.equals(sum, zero)) {
      return n;
    }

    sum = r.add.op(sum, one);
  }

  return 0n;
});

export {
  gcd,
  lcm,
  scalarMul,
  ringPow,
  fieldPow,
  characteristic,
  characteristicBounded
};
