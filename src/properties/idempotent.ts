/** Brands a structure whose operation is idempotent: `op(a, a) = a`. */
interface Idempotent {
  readonly __idempotent: (unique symbol);
}

export type {
  Idempotent
};
