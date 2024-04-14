import { OfferCompressed } from '../../types/offer.ts';
import { Link } from 'react-router-dom';
import '../../style.css';
import PremiumLabel from '../premium-label/premium-label.tsx';
import {changeFavourite} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks';


type PlaceProps = {
  offer: OfferCompressed;
  onHover: (id: string | null) => void;
};

function OfferCard({offer, onHover}: PlaceProps) {
  const dispatch = useAppDispatch();

  function onBookmarkClick() {
    dispatch(changeFavourite({offerId: offer.id, status: offer.isFavorite ? 0 : 1}));
  }

  return (
    <article className="cities__card place-card" onMouseEnter={() => onHover(offer.id)} onMouseLeave={() => onHover(null)}>
      <PremiumLabel visible={offer.isPremium} />
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title}/>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={onBookmarkClick} className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.ceil(100 * offer.rating / 5)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offers/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type text__capital">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
