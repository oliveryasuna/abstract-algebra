/** Brands a structure with the cancellation property: `op(a, b) = op(a, c)` implies `b = c`. */
interface Cancellative {
  readonly __cancellative: (unique symbol);
}

export type {
  Cancellative
};
