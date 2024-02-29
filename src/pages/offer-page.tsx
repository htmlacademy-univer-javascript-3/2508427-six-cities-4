import Header from '../components/header.tsx';
import Reviews from '../components/reviews.tsx';
import { Offer } from '../types/offer.ts';
import OffersSuggestions from '../components/offers-suggestions.tsx';
import { useParams } from 'react-router-dom';

type OfferPageProps = {
  offers: Offer[];
};

function OfferPage({offers}: OfferPageProps) {
  const { id } = useParams();

  const offer = offers.filter((x) => x.id.toString() === id)[0];

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((x) => (
                <div className="offer__image-wrapper" key={x}>
                  <img className="offer__image" src={x} alt="Photo studio"/>
                </div>))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.premium && <div className="offer__mark"><span>Premium</span></div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.header}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${Math.ceil(100 * offer.rating / 5)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">{offer.bedroomsAmount} Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {offer.maxAdultsAmount} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.extraFeatures.map((x) => <li key={x} className="offer__inside-item">{x}</li>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`${offer.owner.pro ? 'offer__avatar-wrapper--pro' : ''} offer__avatar-wrapper user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={offer.owner.image} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.owner.name}
                  </span>
                  {offer.owner.pro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  {offer.description.map((x) => <p key={x} className="offer__text">{x}</p>)}
                </div>
              </div>
              <Reviews reviews={offer.reviews} />
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersSuggestions offers={offers} maxAmount={3} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
