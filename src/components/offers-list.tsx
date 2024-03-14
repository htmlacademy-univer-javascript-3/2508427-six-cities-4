import OfferCard from './offer-card.tsx';
import { useState } from 'react';
import { OfferCompressed } from '../types/offer.ts';

type OffersListProps = {
  offers: OfferCompressed[];
};

function OffersList({offers}: OffersListProps) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  function handleHover(offerId: string | null) {
    setActiveOfferId(offerId);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((x) => <OfferCard key={x.id} offer={x} onHover={handleHover} />)}
    </div>
  );
}

export default OffersList;
