import type {CommutativeRing} from '../../../composed';
import type {Monoid, Semigroup, Zn as ZnGroup, ZnElement} from '../../../group';
import type {Commutative, Finite} from '../../../properties';

type ZnRing = (CommutativeRing<ZnElement> & Finite<ZnElement> & {
  readonly add: ZnGroup;
  readonly modulus: bigint;
});

const znRing = ((addGroup: ZnGroup): ZnRing => {
  const n = addGroup.modulus;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mod = ((v: bigint): ZnElement => ((((v % n) + n) % n) as ZnElement));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mulSemigroup: Semigroup<ZnElement> = (({
    op: ((a: ZnElement, b: ZnElement) => mod(a * b)),
    // eslint-disable-next-line @typescript-eslint/unbound-method
    has: addGroup.has,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    equals: addGroup.equals
  } as unknown) as Semigroup<ZnElement>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mulMonoid: Monoid<ZnElement> & Commutative = (({
    ...mulSemigroup,
    identity: mod(1n)
  } as unknown) as Monoid<ZnElement> & Commutative);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    modulus: n,

    add: addGroup,
    mul: mulMonoid,

    // Finite
    order: n,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    elements: addGroup.elements
  } as unknown) as ZnRing);
});

export type {
  ZnRing
};
export {
  znRing
};
