import * as fc from 'fast-check';
import {describe} from 'vitest';

import {booleanGroup} from '../src/group/structures/impl/boolean-group';
import {integerAdditiveGroup} from '../src/group/structures/impl/integer-additive-group';
import {zn, znElement} from '../src/group/structures/impl/zn';
import {booleanRing} from '../src/ring/structures/impl/boolean-ring-impl';
import {integerRing} from '../src/ring/structures/impl/integer-ring';
import {quaternionRing} from '../src/ring/structures/impl/quaternion-ring';
import {rationalField} from '../src/ring/structures/impl/rational-field';
import {znRing} from '../src/ring/structures/impl/zn-ring';
import {zpField} from '../src/ring/structures/impl/zp-field';
import {arbZn, arbBoolean, arbInteger, arbIntegerNonZero, arbRational, arbRationalNonZero, arbQuaternion} from './arbitraries';
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
