import type {EuclideanDomain} from '../../../composed';
import type {Monoid, Semigroup, IntegerAdditiveGroup, IntegerElement} from '../../../group';

type IntegerRing = (EuclideanDomain<IntegerElement> & {
  readonly add: IntegerAdditiveGroup;
});

// eslint-disable-next-line max-lines-per-function
const integerRing = ((addGroup: IntegerAdditiveGroup): IntegerRing => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mk = ((v: bigint): IntegerElement => (v as IntegerElement));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-unary-minus
  const abs = ((v: IntegerElement): bigint => ((v < 0n) ? -v : v));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mulSemigroup: Semigroup<IntegerElement> = (({
    op: ((a: IntegerElement, b: IntegerElement): IntegerElement => mk(a * b)),
    // eslint-disable-next-line @typescript-eslint/unbound-method
    has: addGroup.has,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    equals: addGroup.equals
  } as unknown) as Semigroup<IntegerElement>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mulMonoid: Monoid<IntegerElement> = (({
    ...mulSemigroup,
    identity: mk(1n)
  } as unknown) as Monoid<IntegerElement>);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    add: addGroup,
    mul: mulMonoid,

    mulInverse: ((a: IntegerElement): IntegerElement => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      if((a !== (1n as IntegerElement)) && (a !== ((-1n) as IntegerElement))) {
        throw (new RangeError('Only 1 and -1 have multiplicative inverses in Z.'));
      }

      return a;
    }),

    norm: ((a: IntegerElement): bigint => abs(a)),

    divMod: ((a: IntegerElement, b: IntegerElement): {quot: IntegerElement;
      rem: IntegerElement;} => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      if(b === (0n as IntegerElement)) {
        throw (new RangeError('Division by zero.'));
      }

      // Truncated division matching mathematical convention:
      // a = quot * b + rem, where 0 <= |rem| < |b|
      const quot = mk(a / b);
      const rem = mk(a - (quot * b));

      return ({
        quot: quot,
        rem: rem
      });
    })
  } as unknown) as IntegerRing);
});

export type {
  IntegerRing
};
export {
  integerRing
};
