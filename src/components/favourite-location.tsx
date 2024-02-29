import OfferCardFavourite from './offer-card-favourite.tsx';
import { Offer } from '../types/offer.ts';

type FavouriteLocationProps = {
  location: string;
  offers: Offer[];
};

function FavouriteLocation({location, offers}: FavouriteLocationProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((x) => <OfferCardFavourite key={x.id} offer={x} />)}
      </div>
    </li>
  );
}

export default FavouriteLocation;
