/**
 * Returns the highest set bit as a bitmask.
 *
 * E.g., highBit(5n) = 4n (0b100).
 *
 * @param n - The number to get the highest set bit of.
 * @returns The highest set bit as a bitmask.
 */
const highBit = ((n: bigint): bigint => {
  let bit = 1n;

  while(bit <= n) {
    bit <<= 1n;
  }

  return (bit >> 1n);
});

const factorial = ((n: number): bigint => {
  let result = 1n;
  for(let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }

  return result;
});

/**
 * Generates all permutations of {0, ..., n-1} via Heap's algorithm.
 *
 * @param n - The number of elements to generate permutations for.
 * @yields {Generator<number[]>} A generator of all permutations of {0, ..., n-1}.
 */
// eslint-disable-next-line func-names
const permutations = (function* (n: number): Generator<number[]> {
  const a = Array.from({length: n}, ((_, i) => i));
  // eslint-disable-next-line unicorn/no-new-array
  const c = (new Array<number>(n)).fill(0);

  yield [...a];

  let i = 0;

  while(i < n) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if(c[i]! < i) {
      if((i % 2) === 0) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        [a[0], a[i]] = [a[i]!, a[0]!];
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        [a[c[i]!], a[i]] = [a[i]!, a[c[i]!]!];
      }

      yield [...a];

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      c[i]!++;
      i = 0;
    } else {
      c[i] = 0;
      i++;
    }
  }
});

/**
 * Computes base^exp mod m using repeated squaring.
 *
 * @param base - The base.
 * @param exp - The exponent.
 * @param m - The modulus.
 * @returns The result of base^exp mod m.
 */
const modPow = ((base: bigint, exp: bigint, m: bigint): bigint => {
  let result = 1n;
  let b = (((base % m) + m) % m);
  let e = exp;

  while(e > 0n) {
    if((e & 1n) !== 0n) {
      result = ((result * b) % m);
    }

    b = ((b * b) % m);
    e >>= 1n;
  }

  return result;
});

/**
 * Returns whether {@link n} is a probable prime using Miller-Rabin.
 *
 * Deterministic for n < 3,317,044,064,679,887,385,961,981.
 *
 * @param n - The number to test.
 * @returns Whether {@link n} is likely prime.
 */
// eslint-disable-next-line max-lines-per-function, max-statements, sonarjs/cognitive-complexity, complexity
const isPrime = ((n: bigint): boolean => {
  if(n < 2n) {
    return false;
  }

  if((n === 2n) || (n === 3n)) {
    return true;
  }

  if(((n % 2n) === 0n) || ((n % 3n) === 0n)) {
    return false;
  }

  // Factor n-1 as 2^r * d.
  let d = (n - 1n);
  let r = 0n;

  while((d % 2n) === 0n) {
    d >>= 1n;
    r++;
  }

  // Deterministic witnesses for n < 3,317,044,064,679,887,385,961,981.
  const witnesses = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n];

  for(const a of witnesses) {
    if(a >= n) {
      continue;
    }

    let x = modPow(a, d, n);

    if((x === 1n) || (x === (n - 1n))) {
      continue;
    }

    let composite = true;

    for(let i = 0n; i < (r - 1n); i++) {
      x = modPow(x, 2n, n);

      if(x === (n - 1n)) {
        composite = false;

        break;
      }
    }

    if(composite) {
      return false;
    }
  }

  return true;
});

/**
 * Extended Euclidean algorithm.
 *
 * Returns {gcd, x, y} such that a*x + b*y = gcd.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The result of the extended Euclidean algorithm.
 */
const extendedGcd = ((a: bigint, b: bigint): {gcd: bigint;
  x: bigint;
  y: bigint;} => {
  let [oldR, r] = [a, b];
  let [oldS, s] = [1n, 0n];
  let [oldT, t] = [0n, 1n];

  while(r !== 0n) {
    const q = (oldR / r);

    [oldR, r] = [r, (oldR - (q * r))];
    [oldS, s] = [s, (oldS - (q * s))];
    [oldT, t] = [t, (oldT - (q * t))];
  }

  return ({
    gcd: oldR,
    x: oldS,
    y: oldT
  });
});

const bigintAbs = ((n: bigint): bigint => ((n < 0n) ? -n : n));

const bigintGcd = ((a: bigint, b: bigint): bigint => {
  let x = bigintAbs(a);
  let y = bigintAbs(b);

  while(y !== 0n) {
    [x, y] = [y, (x % y)];
  }

  return x;
});

export {
  highBit,
  factorial,
  permutations,
  modPow,
  isPrime,
  extendedGcd,
  bigintAbs,
  bigintGcd
};
