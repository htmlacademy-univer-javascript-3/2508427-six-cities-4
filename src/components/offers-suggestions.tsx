import { Offer } from '../types/offer.ts';
import OfferCard from './offer-card.tsx';
import { useState } from 'react';

type OffersSuggestionsProps = {
  offers: Offer[];
  maxAmount?: number;
};

function OffersSuggestions({offers, maxAmount}: OffersSuggestionsProps) {
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setActiveOfferId(id);
  };
  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };

  const validOffers = maxAmount !== undefined && maxAmount > 0
    ? offers.slice(0, maxAmount)
    : offers;
  const classes = maxAmount === undefined
    ? 'cities__places-list places__list tabs__content'
    : 'near-places__list places__list';

  return (
    <div className={classes}>
      {validOffers.map((x) => <OfferCard key={x.id} offer={x} onMouseEnter={() => handleMouseEnter(x.id)} onMouseLeave={handleMouseLeave} />)}
    </div>
  );
}

export default OffersSuggestions;
