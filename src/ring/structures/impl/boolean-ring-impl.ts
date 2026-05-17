import type {BooleanRing as BooleanRingType} from '../../../composed';
import type {Monoid, Semigroup, BooleanElement, BooleanGroup} from '../../../group';
import type {Finite} from '../../../properties';

type BooleanRingImpl = (BooleanRingType<BooleanElement> & Finite<BooleanElement> & {readonly add: BooleanGroup;});

const booleanRing = ((addGroup: BooleanGroup): BooleanRingImpl => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mk = ((v: boolean): BooleanElement => (v as BooleanElement));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mulSemigroup: Semigroup<BooleanElement> = (({
    op: ((a: BooleanElement, b: BooleanElement): BooleanElement => mk(a && b)),
    // eslint-disable-next-line @typescript-eslint/unbound-method
    has: addGroup.has,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    equals: addGroup.equals
  } as unknown) as Semigroup<BooleanElement>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mulMonoid: Monoid<BooleanElement> = (({
    ...mulSemigroup,
    identity: mk(true)
  } as unknown) as Monoid<BooleanElement>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    add: addGroup,
    mul: mulMonoid,

    // Finite
    order: 2n,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    elements: addGroup.elements
  } as unknown) as BooleanRingImpl);
});

export type {
  BooleanRingImpl
};
export {
  booleanRing
};
