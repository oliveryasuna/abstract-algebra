# abstract-algebra

![NPM Version](https://img.shields.io/npm/v/abstract-algebra)

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

### Morphisms

The library provides typed group and ring homomorphisms with utilities for composition, kernel/image computation, and verification.

```typescript
import { zn, znElement, groupHomomorphism, verifyGroupHomomorphism, kernel, imageSet, isInjective, isSurjective } from 'abstract-algebra';

// Z/6Z → Z/3Z (mod 3 reduction)
const Z6 = zn(6n);
const Z3 = zn(3n);

const f = groupHomomorphism(Z6, Z3, (a) => znElement(Z3, (a as bigint) % 3n));

verifyGroupHomomorphism(f);  // true
[...kernel(f)];              // [0n, 3n]
imageSet(f).length;          // 3 (surjective)
isInjective(f);              // false
isSurjective(f);             // true
```

```typescript
import { zn, znRing, znElement, ringHomomorphism, verifyRingHomomorphism, ringKernel } from 'abstract-algebra';

// Z/6Z → Z/3Z as a ring homomorphism
const Z6Ring = znRing(zn(6n));
const Z3Ring = znRing(zn(3n));

const f = ringHomomorphism(Z6Ring, Z3Ring, (a) => znElement(zn(3n), (a as bigint) % 3n));

verifyRingHomomorphism(f);     // true
[...ringKernel(f)].length;     // 2 (kernel is the ideal {0, 3})
```

Homomorphisms compose via `composeGroupHomomorphisms` / `composeRingHomomorphisms`, and isomorphisms can be inverted with `invertIsomorphism` / `invertRingIsomorphism`.

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

### Rational Field

```typescript
import { rationalField, rational } from 'abstract-algebra';

// Q — the field of rational numbers
const Q = rationalField();
const a = rational(3n, 4n);   // 3/4
const b = rational(1n, 6n);   // 1/6

Q.add.op(a, b);               // 11/12
Q.mul.op(a, b);               // 1/8
Q.mulInverse(a);               // 4/3
Q.compare(a, b);               // 1 (3/4 > 1/6)
```

### Polynomial Ring

```typescript
import { rationalField, rational, polynomialRing, polynomialEuclideanDomain, polynomial, polynomialEvaluate } from 'abstract-algebra';

const Q = rationalField();
const QX = polynomialRing(Q);

// p(x) = 1 + 2x + 3x²
const p = polynomial(QX, rational(1n), rational(2n), rational(3n));

// q(x) = 2 + x
const q = polynomial(QX, rational(2n), rational(1n));

QX.add.op(p, q);   // 3 + 3x + 3x²
QX.mul.op(p, q);   // 2 + 5x + 8x² + 3x³

// Evaluate p(2) = 1 + 4 + 12 = 17
polynomialEvaluate(QX, p, rational(2n));  // 17/1

// Polynomial division over a field (Euclidean domain)
const QXE = polynomialEuclideanDomain(Q);
const { quot, rem } = QXE.divMod(p, q);
```

### Matrix Ring

```typescript
import { zn, znRing, znElement, matrixRing, matrixFromRows, matrixGet, matrixTrace, matrixTranspose } from 'abstract-algebra';

const Z5Ring = znRing(zn(5n));
const M2Z5 = matrixRing(Z5Ring, 2);

const mk = (v: bigint) => znElement(zn(5n), v);

// 2x2 matrices over Z/5Z
const A = matrixFromRows(M2Z5, [
  [mk(1n), mk(2n)],
  [mk(3n), mk(4n)]
]);

const B = matrixFromRows(M2Z5, [
  [mk(0n), mk(1n)],
  [mk(1n), mk(0n)]
]);

M2Z5.add.op(A, B);         // matrix addition mod 5
M2Z5.mul.op(A, B);         // matrix multiplication mod 5

matrixTrace(M2Z5, A);       // 1 + 4 = 0 (mod 5)
matrixTranspose(M2Z5, A);   // [[1, 3], [2, 4]]
```

### Quaternion Ring

```typescript
import { quaternionRing, quaternion, quaternionConjugate, quaternionNorm } from 'abstract-algebra';

// H — the quaternion division ring (non-commutative)
const H = quaternionRing();

const q = quaternion(1, 2, 3, 4);   // 1 + 2i + 3j + 4k
const r = quaternion(0, 1, 0, 0);   // i

H.mul.op(q, r);                      // quaternion multiplication
H.mulInverse(q);                     // q^-1 = conjugate(q) / |q|²
quaternionConjugate(q);              // 1 - 2i - 3j - 4k
quaternionNorm(q);                   // sqrt(1 + 4 + 9 + 16) = sqrt(30)

// Non-commutative: i*j ≠ j*i
const i = quaternion(0, 1, 0, 0);
const j = quaternion(0, 0, 1, 0);
H.mul.op(i, j);  // k   = (0, 0, 0, 1)
H.mul.op(j, i);  // -k  = (0, 0, 0, -1)
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
type DivisionRing<E> = Ring<E> & { mulInverse(a: E): E };
```

## Concrete Implementations

### Groups

| Structure | Type | Properties |
|---|---|---|
| Z/nZ | `Zn` | Commutative, Finite, Cyclic |
| S(n) | `SymmetricGroup` | Finite, non-abelian (n ≥ 3) |
| ({false, true}, XOR) | `BooleanGroup` | Commutative, Finite, Cyclic |
| (Z, +) | `IntegerAdditiveGroup` | Commutative, Cyclic, infinite |

### Rings

| Structure | Type | Properties |
|---|---|---|
| (Z, +, ×) | `IntegerRing` | EuclideanDomain |
| (Z/nZ, +, ×) | `ZnRing` | CommutativeRing, Finite |
| GF(p) | `ZpField` | Field, Finite |
| ({false, true}, XOR, AND) | `BooleanRingImpl` | BooleanRing, Finite |
| (Q, +, ×) | `RationalField` | Field, Ordered |
| R[x] | `PolynomialRing` | CommutativeRing |
| F[x] | `PolynomialEuclideanDomain` | EuclideanDomain |
| M_n(R) | `MatrixRing` | Ring (non-commutative for n ≥ 2) |
| H | `QuaternionRing` | DivisionRing (non-commutative) |


## Testing

Tests use [fast-check](https://github.com/dubzzz/fast-check) for property-based verification of algebraic laws and [vitest](https://vitest.dev/) as the test runner.

```bash
bun test
```

The test suite defines reusable law-checked (`test/laws.ts`) that verify structure axioms (associativity, identity, inverse, distributivity, etc.) against arbitrary elements. Every concrete implementation is tested against the full set of laws its type claims to satisfy.

Note that most of the implementation was hand-written, but much of the tests were generated by AI. They have been manually verified and edited to ensure accuracy. Please report any issues you find.

## License

See [LICENSE](LICENSE).
