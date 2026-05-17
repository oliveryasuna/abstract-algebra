import * as fc from 'fast-check';
import {describe, it, expect} from 'vitest';

import {booleanGroup} from '../src/group/structures/impl/boolean-group';
import {integerAdditiveGroup} from '../src/group/structures/impl/integer-additive-group';
import {zn, znElement} from '../src/group/structures/impl/zn';
import {booleanRing} from '../src/ring/structures/impl/boolean-ring-impl';
import {integerRing} from '../src/ring/structures/impl/integer-ring';
import {matrixRing, matrixFromRows, matrixGet, matrixTrace, matrixTranspose} from '../src/ring/structures/impl/matrix-ring';
import {polynomialRing, polynomialEuclideanDomain, polynomial, polynomialDegree, polynomialEvaluate} from '../src/ring/structures/impl/polynomial-ring';
import {quaternionRing} from '../src/ring/structures/impl/quaternion-ring';
import {rationalField, rational} from '../src/ring/structures/impl/rational-field';
import {znRing} from '../src/ring/structures/impl/zn-ring';
import {zpField} from '../src/ring/structures/impl/zp-field';
import {arbZn, arbBoolean, arbInteger, arbIntegerNonZero, arbRational, arbRationalNonZero, arbQuaternion, arbPolynomial, arbPolynomialNonZero, arbMatrix} from './arbitraries';
import {runLaws} from './helpers';
import {commutativeRingLaws, euclideanDomainLaws, fieldLaws, ringLaws} from './laws';

// ── Ring tests ──

describe('Integer ring (Z)', (() => {
  const Z = integerAdditiveGroup();
  const ZRing = integerRing(Z);

  runLaws(euclideanDomainLaws(ZRing, arbIntegerNonZero));
  runLaws(commutativeRingLaws(ZRing, arbInteger));
}));

describe('Z/6Z ring', (() => {
  const Z6 = zn(6n);
  const Z6Ring = znRing(Z6);
  const arb = arbZn(6n);

  runLaws(commutativeRingLaws(Z6Ring, arb));
}));

describe('Z/12Z ring', (() => {
  const Z12 = zn(12n);
  const Z12Ring = znRing(Z12);
  const arb = arbZn(12n);

  runLaws(commutativeRingLaws(Z12Ring, arb));
}));

describe('Boolean ring ({false, true}, XOR, AND)', (() => {
  const BRing = booleanRing(booleanGroup());

  runLaws(commutativeRingLaws(BRing, arbBoolean));
}));

// ── Field tests ──

describe('Z/5Z field (GF(5))', (() => {
  const Z5 = zn(5n);
  const Z5Ring = znRing(Z5);
  const GF5 = zpField(Z5Ring);
  const arb = arbZn(5n);
  const arbNonZero = fc.bigInt({
    min: 1n,
    max: 4n
  }).map((v => znElement(Z5, v)));

  runLaws(fieldLaws(GF5, arb, arbNonZero));
}));

describe('Z/7Z field (GF(7))', (() => {
  const Z7 = zn(7n);
  const Z7Ring = znRing(Z7);
  const GF7 = zpField(Z7Ring);
  const arb = arbZn(7n);
  const arbNonZero = fc.bigInt({
    min: 1n,
    max: 6n
  }).map((v => znElement(Z7, v)));

  runLaws(fieldLaws(GF7, arb, arbNonZero));
}));

describe('Z/2Z field (GF(2))', (() => {
  const Z2 = zn(2n);
  const Z2Ring = znRing(Z2);
  const GF2 = zpField(Z2Ring);
  const arb = arbZn(2n);
  const arbNonZero = fc.constant(znElement(Z2, 1n));

  runLaws(fieldLaws(GF2, arb, arbNonZero));
}));

describe('Rational field (Q)', (() => {
  const Q = rationalField();

  runLaws(fieldLaws(Q, arbRational, arbRationalNonZero));
}));

describe('Quaternion ring (H)', (() => {
  const H = quaternionRing();

  runLaws(ringLaws(H, arbQuaternion));
}));

// ── Polynomial ring tests ──

describe('Polynomial ring Q[x]', (() => {
  const Q = rationalField();
  const QX = polynomialRing(Q);
  const arb = arbPolynomial(QX, arbRational);

  runLaws(commutativeRingLaws(QX, arb));
}));

describe('Polynomial ring GF(5)[x]', (() => {
  const Z5 = zn(5n);
  const GF5 = zpField(znRing(Z5));
  const GF5X = polynomialRing(GF5);
  const arbCoeff = arbZn(5n);
  const arb = arbPolynomial(GF5X, arbCoeff);

  runLaws(commutativeRingLaws(GF5X, arb));
}));

describe('Polynomial Euclidean domain Q[x]', (() => {
  const Q = rationalField();
  const QXE = polynomialEuclideanDomain(Q);
  const arbCoeff = arbRational;
  const arbCoeffNonZero = arbRationalNonZero;
  const QX = polynomialRing(Q);
  const arbNonZero = arbPolynomialNonZero(QX, arbCoeffNonZero, arbCoeff);

  runLaws(euclideanDomainLaws(QXE, arbNonZero));
}));

describe('Polynomial specific operations', (() => {
  const Q = rationalField();
  const QX = polynomialRing(Q);

  it('degree of zero polynomial is -1', (() => {
    const zero = polynomial(QX);

    expect(polynomialDegree(zero)).toBe(-1);
  }));

  it('degree of constant polynomial is 0', (() => {
    const c = polynomial(QX, rational(3n));

    expect(polynomialDegree(c)).toBe(0);
  }));

  it('degree of 1 + 2x + 3x² is 2', (() => {
    const p = polynomial(QX, rational(1n), rational(2n), rational(3n));

    expect(polynomialDegree(p)).toBe(2);
  }));

  it('evaluate p(x) = 1 + 2x at x = 3 gives 7', (() => {
    const p = polynomial(QX, rational(1n), rational(2n));
    const result = polynomialEvaluate(QX, p, rational(3n));

    expect(Q.add.equals(result, rational(7n))).toBe(true);
  }));

  it('evaluate p(x) = x² at x = 5 gives 25', (() => {
    const p = polynomial(QX, rational(0n), rational(0n), rational(1n));
    const result = polynomialEvaluate(QX, p, rational(5n));

    expect(Q.add.equals(result, rational(25n))).toBe(true);
  }));

  it('zero polynomial evaluates to zero', (() => {
    const zero = polynomial(QX);
    const result = polynomialEvaluate(QX, zero, rational(42n));

    expect(Q.add.equals(result, Q.add.identity)).toBe(true);
  }));

  it('polynomial division: (x² + 2x + 1) / (x + 1) = (x + 1) remainder 0', (() => {
    const QXE = polynomialEuclideanDomain(Q);
    const p = polynomial(QX, rational(1n), rational(2n), rational(1n));
    const d = polynomial(QX, rational(1n), rational(1n));
    const {quot, rem} = QXE.divMod(p, d);

    expect(QX.add.equals(quot, d)).toBe(true);
    expect(QX.add.equals(rem, QX.add.identity)).toBe(true);
  }));
}));

// ── Matrix ring tests ──

describe('Matrix ring M_2(GF(5))', (() => {
  const Z5 = zn(5n);
  const GF5Ring = znRing(Z5);
  const M2 = matrixRing(GF5Ring, 2);
  const arbEntry = arbZn(5n);
  const arb = arbMatrix(M2, arbEntry);

  runLaws(ringLaws(M2, arb));
}));

describe('Matrix ring M_3(Z/6Z)', (() => {
  const Z6Ring = znRing(zn(6n));
  const M3 = matrixRing(Z6Ring, 3);
  const arb = arbMatrix(M3, arbZn(6n));

  runLaws(ringLaws(M3, arb));
}));

describe('Matrix specific operations', (() => {
  const Z5 = zn(5n);
  const Z5Ring = znRing(Z5);
  const M2 = matrixRing(Z5Ring, 2);
  const mk = ((v: bigint) => znElement(Z5, v));

  it('identity matrix has trace = n * 1', (() => {
    const tr = matrixTrace(M2, M2.mul.identity);

    // trace(I_2) = 1 + 1 = 2 in Z/5Z
    expect(Z5Ring.add.equals(tr, mk(2n))).toBe(true);
  }));

  it('trace of specific matrix', (() => {
    const A = matrixFromRows(M2, [
      [mk(1n), mk(2n)],
      [mk(3n), mk(4n)]
    ]);

    // trace = 1 + 4 = 5 ≡ 0 mod 5
    expect(Z5Ring.add.equals(matrixTrace(M2, A), mk(0n))).toBe(true);
  }));

  it('transpose is involution', (() => {
    const A = matrixFromRows(M2, [
      [mk(1n), mk(2n)],
      [mk(3n), mk(4n)]
    ]);

    const ATT = matrixTranspose(M2, matrixTranspose(M2, A));

    expect(M2.add.equals(A, ATT)).toBe(true);
  }));

  it('transpose of identity is identity', (() => {
    const IT = matrixTranspose(M2, M2.mul.identity);

    expect(M2.mul.equals(IT, M2.mul.identity)).toBe(true);
  }));

  it('matrixGet retrieves correct entries', (() => {
    const A = matrixFromRows(M2, [
      [mk(1n), mk(2n)],
      [mk(3n), mk(4n)]
    ]);

    expect(Z5Ring.add.equals(matrixGet(A, 0, 0), mk(1n))).toBe(true);
    expect(Z5Ring.add.equals(matrixGet(A, 0, 1), mk(2n))).toBe(true);
    expect(Z5Ring.add.equals(matrixGet(A, 1, 0), mk(3n))).toBe(true);
    expect(Z5Ring.add.equals(matrixGet(A, 1, 1), mk(4n))).toBe(true);
  }));

  it('matrix multiplication is non-commutative', (() => {
    const A = matrixFromRows(M2, [
      [mk(1n), mk(2n)],
      [mk(0n), mk(1n)]
    ]);

    const B = matrixFromRows(M2, [
      [mk(1n), mk(0n)],
      [mk(3n), mk(1n)]
    ]);

    const AB = M2.mul.op(A, B);
    const BA = M2.mul.op(B, A);

    // AB ≠ BA in general
    expect(M2.mul.equals(AB, BA)).toBe(false);
  }));

  it('zero matrix annihilates', (() => {
    const A = matrixFromRows(M2, [
      [mk(1n), mk(2n)],
      [mk(3n), mk(4n)]
    ]);

    const AZ = M2.mul.op(A, M2.add.identity);

    expect(M2.add.equals(AZ, M2.add.identity)).toBe(true);
  }));
}));
