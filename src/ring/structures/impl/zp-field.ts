import type {Field} from '../../../composed';
import type {ZnElement} from '../../../group';
import type {Finite} from '../../../properties';
import {extendedGcd} from '../../../utils';
import type {ZnRing} from './zn-ring';

type ZpField = (Field<ZnElement> & Finite<ZnElement> & {
  readonly modulus: bigint;
});

const zpField = ((ring: ZnRing): ZpField => {
  const p = ring.modulus;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const mod = ((v: bigint): ZnElement => ((((v % p) + p) % p) as ZnElement));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (({
    ...ring,

    mulInverse: ((a: ZnElement): ZnElement => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      if(a === (0n as ZnElement)) {
        throw (new RangeError('Zero has no multiplicative inverse.'));
      }

      // Extended Euclidean algorithm: find x such that a*x ≡ 1 (mod p).
      const {x} = extendedGcd(a, p);

      return mod(x);
    })
  } as unknown) as ZpField);
});

export type {
  ZpField
};
export {
  zpField
};
