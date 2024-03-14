import OfferCard from './offer-card.tsx';
import { useState } from 'react';
import { offersCompressed } from '../mocks/offers.ts';

type OffersSuggestionsProps = {
  offerId: string;
  maxAmount?: number;
};

function OffersSuggestions({offerId, maxAmount = 3}: OffersSuggestionsProps) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  function handleHover(id: string | null) {
    setActiveOfferId(id);
  }

  // API get offers by offerId
  const validOffers = offersCompressed.slice(0, maxAmount);

  return (
    <div className="near-places__list places__list">
      {validOffers.map((x) => <OfferCard key={x.id} offer={x} onHover={handleHover} />)}
    </div>
  );
}

export default OffersSuggestions;
