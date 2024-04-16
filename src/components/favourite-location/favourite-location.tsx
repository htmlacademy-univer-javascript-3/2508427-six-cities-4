import OfferCardFavourite from '../offer-card-favourite/offer-card-favourite.tsx';
import {OfferCompressed} from '../../types/offer.ts';

type FavouriteLocationProps = {
  cityName: string;
  offers: OfferCompressed[];
};

function FavouriteLocation({cityName, offers}: FavouriteLocationProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <OfferCardFavourite key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
}

export default FavouriteLocation;
