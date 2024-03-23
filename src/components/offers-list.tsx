import OfferCard from './offer-card.tsx';
import { OfferCompressed } from '../types/offer.ts';

type OffersListProps = {
  offers: OfferCompressed[];
  setActiveOfferId: (offerId: string | null) => void;
};

function OffersList({offers, setActiveOfferId}: OffersListProps) {
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
