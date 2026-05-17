/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as fc from 'fast-check';
import type {CommutativeRing, EuclideanDomain, Field, Magma, Semigroup, UnitalMagma, Quasigroup, Loop, InverseSemigroup, Monoid, Group, Commutative, Rng, Ring} from '../src';

//==================================================
// Group-like laws
//==================================================

const magmaLaws = (<TElement>(m: Magma<TElement>, arb: fc.Arbitrary<TElement>) => ({
  closure: fc.property(arb, arb, ((a, b) => m.has(m.op(a, b)))),
  equalsReflexive: fc.property(arb, (a => m.equals(a, a)))
}));

const semigroupLaws = (<TElement>(s: Semigroup<TElement>, arb: fc.Arbitrary<TElement>) => ({
  ...magmaLaws(s, arb),
  associativity: fc.property(arb, arb, arb, ((a, b, c) => s.equals(s.op(s.op(a, b), c), s.op(a, s.op(b, c)))))
}));

const unitalMagmaLaws = (<TElement>(u: UnitalMagma<TElement>, arb: fc.Arbitrary<TElement>) => ({
  ...magmaLaws(u, arb),
  leftIdentity: fc.property(arb, (a => u.equals(u.op(u.identity, a), a))),
  rightIdentity: fc.property(arb, (a => u.equals(u.op(a, u.identity), a)))
}));

const quasigroupLaws = (<TElement>(q: Quasigroup<TElement>, arb: fc.Arbitrary<TElement>) => ({
  ...magmaLaws(q, arb),
  leftDivision: fc.property(arb, arb, ((a, b) => q.equals(q.op(a, q.leftDiv(a, b)), b))),
  rightDivision: fc.property(arb, arb, ((a, b) => q.equals(q.op(q.rightDiv(a, b), b), a)))
}));

const loopLaws = (<TElement>(l: Loop<TElement>, arb: fc.Arbitrary<TElement>) => ({
  ...quasigroupLaws(l, arb),
  ...unitalMagmaLaws(l, arb)
}));

const inverseSemigroupLaws = (<TElement>(is: InverseSemigroup<TElement>, arb: fc.Arbitrary<TElement>) => ({
  ...semigroupLaws(is, arb),
  ...quasigroupLaws(is, arb),
  inverseInvolution: fc.property(arb, (a => is.equals(is.inverse(is.inverse(a)), a))),
  inverseLaw: fc.property(arb, (a => is.equals(is.op(a, is.op(is.inverse(a), a)), a)))
}));

const monoidLaws = (<TElement>(m: Monoid<TElement>, arb: fc.Arbitrary<TElement>) => ({
  ...semigroupLaws(m, arb),
  ...unitalMagmaLaws(m, arb)
}));

const groupLaws = (<TElement>(g: Group<TElement>, arb: fc.Arbitrary<TElement>) => ({
  ...monoidLaws(g, arb),
  ...inverseSemigroupLaws(g, arb),
  ...loopLaws(g, arb),
  leftInverse: fc.property(arb, (a => g.equals(g.op(g.inverse(a), a), g.identity))),
  rightInverse: fc.property(arb, (a => g.equals(g.op(a, g.inverse(a)), g.identity)))
}));

const commutativityLaw = (<TElement>(m: (Magma<TElement> & Commutative), arb: fc.Arbitrary<TElement>) =>
  // eslint-disable-next-line sonarjs/arguments-order
  ({commutativity: fc.property(arb, arb, ((a, b) => m.equals(m.op(a, b), m.op(b, a))))}));

//==================================================
// Ring-like laws
//==================================================

const rngLaws = (<TElement>(r: Rng<TElement>, arb: fc.Arbitrary<TElement>) => ({
  additiveGroupLaws: groupLaws(r.add, arb),
  additiveCommutativity: commutativityLaw(r.add, arb),
  multiplicativeSemigroupLaws: semigroupLaws(r.mul, arb),
  leftDistributivity: fc.property(arb, arb, arb, ((a, b, c) => {
    // a * (b + c) = (a * b) + (a * c)
    const lhs = r.mul.op(a, r.add.op(b, c));
    const rhs = r.add.op(r.mul.op(a, b), r.mul.op(a, c));

    return r.add.equals(lhs, rhs);
  })),
  rightDistributivity: fc.property(arb, arb, arb, ((a, b, c) => {
    // (a + b) * c = (a * c) + (b * c)
    const lhs = r.mul.op(r.add.op(a, b), c);
    const rhs = r.add.op(r.mul.op(a, c), r.mul.op(b, c));

    return r.add.equals(lhs, rhs);
  })),
  zeroAnnihilation: fc.property(arb, ((a) => {
    const zero = r.add.identity;

    return (r.add.equals(r.mul.op(a, zero), zero)
      && r.add.equals(r.mul.op(zero, a), zero));
  }))
}));

const ringLaws = (<TElement>(r: Ring<TElement>, arb: fc.Arbitrary<TElement>) => ({
  ...rngLaws(r, arb),
  multiplicativeMonoidLaws: monoidLaws(r.mul, arb)
}));

const commutativeRingLaws = (<TElement>(r: CommutativeRing<TElement>, arb: fc.Arbitrary<TElement>) => ({
  ...ringLaws(r, arb),
  multiplicativeCommutativity: commutativityLaw(r.mul, arb)
}));

const euclideanDomainLaws = (<TElement>(ed: EuclideanDomain<TElement>, arbNonZero: fc.Arbitrary<TElement>) => ({
  divisionAlgorithm: fc.property(arbNonZero, arbNonZero, ((a, b) => {
    // a = quot * b + rem
    const {quot, rem} = ed.divMod(a, b);
    const reconstructed = ed.add.op(ed.mul.op(quot, b), rem);

    return ed.add.equals(reconstructed, a);
  })),
  normDecreasing: fc.property(arbNonZero, arbNonZero, ((a, b) => {
    const {rem} = ed.divMod(a, b);

    // rem = 0 or norm(rem) < norm(b)
    return (ed.add.equals(rem, ed.add.identity)
      || (ed.norm(rem) < ed.norm(b)));
  }))
}));

const fieldLaws = (<TElement>(
  f: Field<TElement>,
  arb: fc.Arbitrary<TElement>,
  arbNonZero: fc.Arbitrary<TElement>
) => ({
  ...commutativeRingLaws(f, arb),
  mulInverseLeft: fc.property(arbNonZero, (a => f.mul.equals(f.mul.op(f.mulInverse(a), a), f.mul.identity))),
  mulInverseRight: fc.property(arbNonZero, (a => f.mul.equals(f.mul.op(a, f.mulInverse(a)), f.mul.identity))),
  inverseInvolution: fc.property(arbNonZero, (a => f.mul.equals(f.mulInverse(f.mulInverse(a)), a)))
}));

export {
  magmaLaws,
  semigroupLaws,
  unitalMagmaLaws,
  quasigroupLaws,
  loopLaws,
  inverseSemigroupLaws,
  monoidLaws,
  groupLaws,
  commutativityLaw,
  rngLaws,
  ringLaws,
  commutativeRingLaws,
  euclideanDomainLaws,
  fieldLaws
};
