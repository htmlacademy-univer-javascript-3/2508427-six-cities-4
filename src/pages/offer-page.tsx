import Header from '../components/header.tsx';
import PremiumLabel from '../components/premium-label.tsx';
import {useEffect, useState} from 'react';
import Map from '../components/map.tsx';
import OfferCard from '../components/offer-card.tsx';
import {useAppDispatch, useAppSelector} from '../hooks';
import {useNavigate, useParams} from 'react-router-dom';
import {fetchOffer} from '../store/api-actions.ts';
import Reviews from '../components/reviews.tsx';
import {City, RequestStatus} from '../settings.ts';
import Spinner from '../components/spinner.tsx';

function OfferPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
    }
  }, [dispatch, id]);

  const { offer, suggestions, fetchingOfferStatus } = useAppSelector((state) => state);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  if (fetchingOfferStatus === RequestStatus.Error) {
    navigate('/error');
  }

  const validOffer = offer!;
  const validOffers = suggestions.slice(0, 3);

  const content = fetchingOfferStatus === RequestStatus.Success
    ? (
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {validOffer.images.map((x) => (
                <div className="offer__image-wrapper" key={x}>
                  <img className="offer__image" src={x} alt="Photo studio"/>
                </div>))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumLabel visible={validOffer.isPremium} big />
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{validOffer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${Math.ceil(100 * validOffer.rating / 5)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{validOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{validOffer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">{validOffer.bedrooms} Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {validOffer.maxAdults} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{validOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {validOffer.goods.map((x) => <li key={x} className="offer__inside-item">{x}</li>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`${validOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} offer__avatar-wrapper user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={validOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">{validOffer.host.name}</span>
                  {validOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{validOffer.description}</p>
                </div>
              </div>
              <Reviews/>
            </div>
          </div>
          {<Map location={City[offer!.city.name].center} offers={validOffers} specialOfferId={activeOfferId} type="offer"/>}
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
    )
    : (
      <main className="page__main page__main--offer">
        <Spinner/>
      </main>
    );

  return (
    <div className="page">
      <Header/>
      {content}
    </div>
  );
}

export default OfferPage;
