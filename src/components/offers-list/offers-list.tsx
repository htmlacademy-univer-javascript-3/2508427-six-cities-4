import OfferCard from '../offer-card/offer-card.tsx';
import {OfferCompressed} from '../../types/offer.ts';
import {useAppDispatch} from '../../hooks';
import {setActiveOfferId} from '../../store/actions.ts';

type OffersListProps = {
  offers: OfferCompressed[];
};

function OffersList({offers}: OffersListProps) {
  const dispatch = useAppDispatch();

  function handleHover(offerId: string | null) {
    dispatch(setActiveOfferId(offerId));
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} onHover={handleHover}/>)}
    </div>
  );
}

export default OffersList;
