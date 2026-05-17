# abstract-algebra

Abstract algebra structures for TypeScript. A typed, composable library providing group and ring hierarchies with branded element types and property-based verification.

TypeScript port of [oliveryasuna/math](https://github.com/oliveryasuna/math).

## Installation

```bash
bun add abstract-algebra
```

## Overview

The lbirary models algebraic structures as interfaces with branded element types. Structures compose via TypeScript intersections, and algebraic laws are enforeced at the type level using phantom brands.

### Group Hierarchy

```
Magma
├── Semigroup (+ associativity)
│   ├── Monoid (+ identity) ←── UnitalMagma
│   └── InverseSemigroup (+ inverse) ←── Quasigroup (+ division)
│        └── Group ←── Loop, Monoid
└── Quasigroup (+ left/right division)
    └── Loop (+ identity) ←── UnitalMagma
```

### Ring Hierarchy

```
Rng (additive AbelianGroup + multiplicative Semigroup + distributivity)
└── Ring (+ multiplicative identity)
    └── CommutativeRing (+ commutative multiplication)
        └── IntegralDomain (+ no zero divisors)
            ├── EuclideanDomain (+ norm + divMod)
            └── Field (+ multiplicative inverse)
```

### Property Brands

Properties like commutativity, idempotency, and cancellativity are modeled as phantom-branded interfaces. TypeScript's structural type system would otherwise collapse empty marker interfaces, so `unique symbol` brands ensure that a `Group<E>` cannot be passed where an `AbelianGroup<E>` is required unless the structure has been explicitly asserted as commutative.

```typescript
// Compile error — S3 is not commutative
const S3 = symmetricGroup(3);
diffieHellman(S3, element, secret);

// OK — Z7 is branded Commutative
const Z7 = zn(7n);
diffieHellman(Z7, element, secret);
```

### Branded Elements

Element types are branded to prevent mixing elements from different structures:

```typescript
type ZnElement = bigint & { readonly __brand: unique symbol };
type IntegerElement = bigint & { readonly __brand: unique symbol };
```

Both are `bigint` at runtime, but the type system prevents passing a `ZnElement` where an `IntegerElement` is expected.

## Usage

### Groups

```typescript
import { zn, znElement, groupPower } from 'abstract-algebra';

// Create Z/7Z (integers mod 7 under addition)
const Z7 = zn(7n);
const a = znElement(Z7, 3n);
const b = znElement(Z7, 5n);

Z7.op(a, b);        // 1n (3 + 5 mod 7)
Z7.inverse(a);      // 4n (-3 mod 7)
Z7.identity;         // 0n

// Exponentiation via repeated squaring — O(log n)
groupPower(Z7, a, 100n);  // (3 * 100) mod 7
```

```typescript
import { symmetricGroup, fromCycles, permutation } from 'abstract-algebra';

// Create S(4) — permutations of {0, 1, 2, 3}
const S4 = symmetricGroup(4);

// Cycle notation: (0 1 2) means 0→1, 1→2, 2→0
const sigma = fromCycles(S4, [0, 1, 2]);
const tau = fromCycles(S4, [2, 3]);

S4.op(sigma, tau);    // composition
S4.inverse(sigma);    // inverse permutation
S4.order;             // 24n (4!)
```

```typescript
import { booleanGroup } from 'abstract-algebra';

// {false, true} under XOR
const B = booleanGroup();
B.op(true as any, false as any);  // true (true XOR false)
B.inverse(true as any);           // true (self-inverse)
```

```typescript
import { integerAdditiveGroup, integerElement } from 'abstract-algebra';

// (Z, +) — infinite cyclic group
const Z = integerAdditiveGroup();
const x = integerElement(42n);
Z.inverse(x);  // -42n
```

### Rings

```typescript
import { zn, znRing, znElement } from 'abstract-algebra';

// Z/12Z as a commutative ring
const Z12 = zn(12n);
const Z12Ring = znRing(Z12);

const a = znElement(Z12, 3n);
const b = znElement(Z12, 5n);

Z12Ring.add.op(a, b);  // 8n  (3 + 5 mod 12)
Z12Ring.mul.op(a, b);  // 3n  (3 * 5 mod 12)
Z12Ring.mul.identity;  // 1n
```

```typescript
import { zn, znRing, zpField, znElement, fieldPow } from 'abstract-algebra';

// GF(7) — finite field of order 7
const Z7 = zn(7n);
const GF7 = zpField(znRing(Z7));

const a = znElement(Z7, 3n);
GF7.mulInverse(a);      // 5n (3 * 5 = 15 ≡ 1 mod 7)
fieldPow(GF7, a, -2n);  // (3^-2) mod 7
```

```typescript
import { integerAdditiveGroup, integerRing, integerElement, gcd, lcm } from 'abstract-algebra';

// Z as a Euclidean domain
const ZRing = integerRing(integerAdditiveGroup());
const mk = integerElement;

gcd(ZRing, mk(12n), mk(8n));  // 4n
lcm(ZRing, mk(4n), mk(6n));   // 12n

ZRing.divMod(mk(17n), mk(5n));  // { quot: 3n, rem: 2n }
```

### Ring Functions

```typescript
import { scalarMul, ringPow, characteristicBounded } from '@oliveryasuna/math-ts';

// Scalar multiplication: n * a via repeated addition
scalarMul(ring, a, 5n);  // a + a + a + a + a

// Ring exponentiation: a^n via repeated multiplication
ringPow(ring, a, 10n);

// Characteristic: smallest n where n * 1 = 0
characteristicBounded(GF7, 100n);  // 7n
characteristicBounded(ZRing, 1000n);  // 0n (char 0)
```

## Structure Composition

Rings are composed over existing group implementation. The factory pattern makes the dependency explicit:

```typescript
const Z7 = zn(7n);            // Additive group
const Z7Ring = znRing(Z7);     // Ring wrapping that group
const GF7 = zpField(Z7Ring);   // Field wrapping that ring
```

Each level reuses the structures below it rather than duplicating logic.

## Composed Types

Intersection types combine structures with property brands:

```typescript
type AbelianGroup<E> = Group<E> & Commutative;
type CommutativeRing<E> = Ring<E> & { mul: Commutative };
type IntegralDomain<E> = CommutativeRing<E> & { mul: Cancellative };
type Field<E> = IntegralDomain<E> & { mulInverse(a: E): E };
type EuclideanDomain<E> = IntegralDomain<E> & { norm(a: E): bigint; divMod(a: E, b: E): { quot: E; rem: E } };
```

## Testing

Tests use [fast-check](https://github.com/dubzzz/fast-check) for property-based verification of algebraic laws and [vitest](https://vitest.dev/) as the test runner.

```bash
bun test
```

The test suite defines reusable law-checked (`test/laws.ts`) that verify structure axioms (associativity, identity, inverse, distributivity, etc.) against arbitrary elements. Every concrete implementation is tested against the full set of laws its type claims to satisfy.

Note that most of the implementation was hand-written, but much of the tests were generated by AI. They have been manually verified and edited to ensure accuracy. Please report any issues you find.

## License

See [LICENSE](LICENSE).
