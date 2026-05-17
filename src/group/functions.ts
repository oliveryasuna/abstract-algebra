import {highBit} from '../utils';
import type {Group, Monoid, Semigroup} from './structures';

/**
 * Applies the semigroup operation to an element with itself {@link n} times.
 *
 * Requires {@link n} >= 1.
 * Uses repeating squaring for `O(log n)` operations.
 *
 * @param s - The semigroup to apply the operation to.
 * @param a - The element to apply the operation to.
 * @param n - The number of times to apply the operation.
 * @returns The result of the operation.
 * @throws {RangeError} If {@link n} is less than 1.
 */
const repeat = (<TElement>(s: Semigroup<TElement>, a: TElement, n: bigint): TElement => {
  if(n <= 0n) {
    throw (new RangeError('n must be >= 1 for a semigroup (no identity element).'));
  }

  // Start at the highest bit below the leading 1.

  let result: TElement = a;
  let mask: bigint = (highBit(n) >> 1n);

  while(mask > 0n) {
    result = s.op(result, result);

    if((n & mask) !== 0n) {
      result = s.op(result, a);
    }

    mask >>= 1n;
  }

  return result;
});

/**
 * Applies the monoid operation ot an element with itself {@link n} times.
 *
 * Requires {@link n} >= 0.
 * Returns the identity element when {@link n} is 0.
 *
 * @param m - The monoid to apply the operation to.
 * @param a - The element to apply the operation to.
 * @param n - The number of times to apply the operation.
 * @returns The result of the operation.
 * @throws {RangeError} If {@link n} is less than 0.
 */
const power = (<TElement>(m: Monoid<TElement>, a: TElement, n: bigint): TElement => {
  if(n < 0n) {
    throw (new RangeError('n must be >= 0 for a monoid (no inverse). use groupPower for negative exponents.'));
  }

  if(n === 0n) {
    return m.identity;
  }

  return repeat(m, a, n);
});

/**
 * Applies the group operation to an element with itself {@link n} times.
 *
 * Supports negative {link n} via the group inverse.
 *
 * @param g - The group to apply the operation to.
 * @param a - The element to apply the operation to.
 * @param n - The number of times to apply the operation.
 * @returns The result of the operation.
 * @throws {RangeError} If {@link n} is less than 0.
 */
const groupPower = (<TElement>(g: Group<TElement>, a: TElement, n: bigint): TElement => {
  if(n < 0n) {
    return power(g, g.inverse(a), -n);
  }

  return power(g, a, n);
});

export {
  repeat,
  power,
  groupPower
};
