import {describe} from 'vitest';

import {booleanGroup} from '../src/group/structures/impl/boolean-group';
import {integerAdditiveGroup} from '../src/group/structures/impl/integer-additive-group';
import {symmetricGroup} from '../src/group/structures/impl/symmetric-group';
import {zn} from '../src/group/structures/impl/zn';
import {arbZn, arbPermutation, arbBoolean, arbInteger} from './arbitraries';
import {runLaws} from './helpers';
import {groupLaws, commutativityLaw} from './laws';

describe('Z/7Z additive group', (() => {
  const Z7 = zn(7n);
  const arb = arbZn(7n);

  runLaws(groupLaws(Z7, arb));
  runLaws(commutativityLaw(Z7, arb));
}));

describe('Z/1Z additive group (trivial)', (() => {
  const Z1 = zn(1n);
  const arb = arbZn(1n);

  runLaws(groupLaws(Z1, arb));
}));

describe('S(3) symmetric group', (() => {
  const S3 = symmetricGroup(3);
  const arb = arbPermutation(3);

  runLaws(groupLaws(S3, arb));
}));

describe('S(4) symmetric group', (() => {
  const S4 = symmetricGroup(4);
  const arb = arbPermutation(4);

  runLaws(groupLaws(S4, arb));
}));

describe('Boolean XOR group', (() => {
  runLaws(groupLaws(booleanGroup(), arbBoolean));
  runLaws(commutativityLaw(booleanGroup(), arbBoolean));
}));

describe('Integer additive group', (() => {
  const Z = integerAdditiveGroup();

  runLaws(groupLaws(Z, arbInteger));
  runLaws(commutativityLaw(Z, arbInteger));
}));
