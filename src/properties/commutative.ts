/** Brands a structure whose operation is commutative: `op(a, b) = op(b, a)`. */
interface Commutative {
  readonly __commutative: (unique symbol);
}

export type {
  Commutative
};
