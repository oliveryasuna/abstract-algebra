import type {CommutativeRing} from '../../../composed';
import type {Semigroup} from '../../../group';
import type {Ring} from '../ring';

/**
 * Branded matrix element, stored as a flat row-major array.
 *
 * @typeParam TEntry - The entry type from the base ring.
 */
type MatrixElement<TEntry> = ({
  readonly entries: (readonly TEntry[]);
  readonly size: number;
} & {readonly __brand: (unique symbol);});

/**
 * The ring of n×n matrices over a commutative ring R.
 *
 * Non-commutative for n >= 2.
 *
 * @typeParam TEntry - The entry type from the base ring.
 */
type MatrixRing<TEntry> = (Ring<MatrixElement<TEntry>> & {
  readonly baseRing: CommutativeRing<TEntry>;
  readonly size: number;
});

/**
 * Creates the ring of n×n matrices over a commutative ring R.
 *
 * @param baseRing - The entry ring.
 * @param n - The matrix dimension.
 * @returns The matrix ring M_n(R).
 * @throws {RangeError} If {@link n} is not a positive integer.
 */
// eslint-disable-next-line max-lines-per-function, max-statements
const matrixRing = (<TEntry>(baseRing: CommutativeRing<TEntry>, n: number): MatrixRing<TEntry> => {
  if((n < 1) || !Number.isInteger(n)) {
    throw (new RangeError('n must be a positive integer.'));
  }

  type M = MatrixElement<TEntry>;

  const mk = ((entries: TEntry[]): M =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    (({
      entries: entries,
      size: n
    } as unknown) as M)
  );

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const get = ((m: M, row: number, col: number): TEntry => m.entries[(row * n) + col]!);

  const zeroEntries = ((): TEntry[] =>
    Array.from({length: (n * n)}, (() => baseRing.add.identity)));

  const identityEntries = ((): TEntry[] => {
    const entries = zeroEntries();

    for(let i = 0; i < n; i++) {
      entries[(i * n) + i] = baseRing.mul.identity;
    }

    return entries;
  });

  const zero = mk(zeroEntries());
  const one = mk(identityEntries());

  const equals = ((a: M, b: M): boolean =>
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    a.entries.every(((v, i) => baseRing.add.equals(v, b.entries[i]!))));

  const has = ((value: unknown): value is M =>
    ((value !== null)
      && (typeof value === 'object')
      && ('entries' in value)
      && ('size' in value)
      && Array.isArray((value as {entries: unknown;}).entries)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      && ((value as {
        entries: unknown[];
        size: number;
      }).entries.length === (n * n))
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      && ((value as {size: number;}).size === n)));

  const add = ((a: M, b: M): M =>
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    mk(a.entries.map(((v, i) => baseRing.add.op(v, b.entries[i]!)))));

  const negate = ((a: M): M =>
    mk(a.entries.map((v => baseRing.add.inverse(v)))));

  const multiply = ((a: M, b: M): M => {
    const entries: TEntry[] = [];

    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        let sum = baseRing.add.identity;

        for(let k = 0; k < n; k++) {
          sum = baseRing.add.op(sum, baseRing.mul.op(get(a, i, k), get(b, k, j)));
        }

        entries.push(sum);
      }
    }

    return mk(entries);
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const addSemigroup: Semigroup<M> = (({
    op: add,
    has: has,
    equals: equals
  } as unknown) as Semigroup<M>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mulSemigroup: Semigroup<M> = (({
    op: multiply,
    has: has,
    equals: equals
  } as unknown) as Semigroup<M>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    baseRing: baseRing,
    size: n,

    add: {
      ...addSemigroup,
      identity: zero,
      inverse: negate,
      leftDiv: ((a: M, b: M): M => add(negate(a), b)),
      rightDiv: ((a: M, b: M): M => add(a, negate(b)))
    },

    mul: {
      ...mulSemigroup,
      identity: one
    }
  } as unknown) as MatrixRing<TEntry>);
});

/**
 * Creates a matrix element from a row-major array of entries.
 *
 * @param ring - The matrix ring.
 * @param entries - Row-major entries (length must be n*n).
 * @returns The matrix element.
 * @throws {RangeError} If the entries array has the wrong length.
 */
const matrix = (<TEntry>(ring: MatrixRing<TEntry>, entries: TEntry[]): MatrixElement<TEntry> => {
  const expected = (ring.size * ring.size);

  if(entries.length !== expected) {
    throw (new RangeError(`Expected ${expected} entries for a ${ring.size}x${ring.size} matrix, got ${entries.length}.`));
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    entries: [...entries],
    size: ring.size
  } as unknown) as MatrixElement<TEntry>);
});

/**
 * Creates a matrix element from a 2D array of entries.
 *
 * @param ring - The matrix ring.
 * @param rows - Array of rows.
 * @returns The matrix element.
 * @throws {RangeError} If dimensions don't match.
 */
const matrixFromRows = (<TEntry>(ring: MatrixRing<TEntry>, rows: TEntry[][]): MatrixElement<TEntry> => {
  if(rows.length !== ring.size) {
    throw (new RangeError(`Expected ${ring.size} rows, got ${rows.length}.`));
  }

  const entries: TEntry[] = [];

  for(const row of rows) {
    if(row.length !== ring.size) {
      throw (new RangeError(`Expected ${ring.size} columns, got ${row.length}.`));
    }

    entries.push(...row);
  }

  return matrix(ring, entries);
});

/**
 * Returns the entry at row i, column j.
 *
 * @param m - The matrix.
 * @param i - Row index (0-based).
 * @param j - Column index (0-based).
 * @returns The entry.
 */
const matrixGet = (<TEntry>(m: MatrixElement<TEntry>, i: number, j: number): TEntry =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  m.entries[(i * m.size) + j]!);

/**
 * Returns the trace of a square matrix.
 *
 * @param ring - The matrix ring.
 * @param m - The matrix.
 * @returns The sum of diagonal entries.
 */
const matrixTrace = (<TEntry>(ring: MatrixRing<TEntry>, m: MatrixElement<TEntry>): TEntry => {
  let sum = ring.baseRing.add.identity;

  for(let i = 0; i < ring.size; i++) {
    sum = ring.baseRing.add.op(sum, matrixGet(m, i, i));
  }

  return sum;
});

/**
 * Returns the transpose of a matrix.
 *
 * @param ring - The matrix ring.
 * @param m - The matrix.
 * @returns The transposed matrix.
 */
const matrixTranspose = (<TEntry>(ring: MatrixRing<TEntry>, m: MatrixElement<TEntry>): MatrixElement<TEntry> => {
  const entries: TEntry[] = [];

  for(let i = 0; i < ring.size; i++) {
    for(let j = 0; j < ring.size; j++) {
      // eslint-disable-next-line sonarjs/arguments-order
      entries.push(matrixGet(m, j, i));
    }
  }

  return matrix(ring, entries);
});

export type {
  MatrixElement,
  MatrixRing
};
export {
  matrixRing,
  matrix,
  matrixFromRows,
  matrixGet,
  matrixTrace,
  matrixTranspose
};
