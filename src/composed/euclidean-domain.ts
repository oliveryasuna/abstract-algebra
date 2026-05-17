import type {IntegralDomain} from './integral-domain';

/** An integral domain equipped with a Euclidean function (norm) and division with remainder. */
type EuclideanDomain<TElement> = (IntegralDomain<TElement> & {
  norm(a: TElement): bigint;
  divMod(a: TElement, b: TElement): {
    quot: TElement;
    rem: TElement;
  };
});

export type {
  EuclideanDomain
};
