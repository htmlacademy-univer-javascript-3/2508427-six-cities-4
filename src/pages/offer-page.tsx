import Header from '../components/header.tsx';
import Reviews from '../components/reviews.tsx';
import { offersCompressed } from '../mocks/offers.ts';
import PremiumLabel from '../components/premium-label.tsx';
import { useState } from 'react';
import Map from '../components/map.tsx';
import OfferCard from '../components/offer-card.tsx';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useParams } from 'react-router-dom';
import { fetchOffer } from '../store/actions.ts';

function OfferPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  dispatch(fetchOffer(id!));
  const offer = useAppSelector((state) => state.offer)!;
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const validOffers = offersCompressed.slice(0, 3);

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
              <PremiumLabel visible={offer.isPremium} big />
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
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
                <li className="offer__feature offer__feature--bedrooms">{offer.bedrooms} Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {offer.maxAdults} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((x) => <li key={x} className="offer__inside-item">{x}</li>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} offer__avatar-wrapper user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <Reviews offerId={offer.id} />
            </div>
          </div>
          <Map location={offer.city.center} offers={validOffers} specialOfferId={activeOfferId} type="offer" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {validOffers.map((x) => <OfferCard key={x.id} offer={x} onHover={setActiveOfferId}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
