import type {IntegralDomain} from './integral-domain';

/**
 * A field is an integral domain where every non-zero element has a
 * multiplicative inverse.
 *
 * `mulInverse` returns the multiplicative inverse for non-zero elements.
 * The caller is responsible for not passing the additive identity (zero).
 */
type Field<TElement> = (IntegralDomain<TElement> & {
  mulInverse(a: TElement): TElement;
});

export type {
  Field
};
