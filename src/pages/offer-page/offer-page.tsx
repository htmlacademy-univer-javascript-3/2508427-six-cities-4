import Header from '../../components/header/header.tsx';
import PremiumLabel from '../../components/premium-label/premium-label.tsx';
import {useEffect} from 'react';
import Map from '../../components/map/map.tsx';
import OfferCard from '../../components/offer-card/offer-card.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {changeFavourite, fetchOffer} from '../../store/api-actions.ts';
import Reviews from '../../components/reviews/reviews.tsx';
import {AuthorizationStatus, City, Path, RequestStatus} from '../../settings.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import {Offer, OfferBase} from '../../types/offer.ts';
import {setActiveOfferId} from '../../store/actions.ts';

function OfferPage() {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
    }
  }, [dispatch, id]);

  const offer = useAppSelector((state) => state.offer) as Offer;
  const suggestions = useAppSelector((state) => state.suggestions);
  const fetchingOfferStatus = useAppSelector((state) => state.fetchingOfferStatus);
  const activeOfferId = useAppSelector((state) => state.activeOfferId);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const suggestionsOffers = suggestions.slice(0, 3);
  const mapOffers: OfferBase[] = [offer, ...suggestionsOffers];

  function onBookmarkClick() {
    if (authorizationStatus === AuthorizationStatus.Authorized) {
      dispatch(changeFavourite({offerId: offer.id, status: offer.isFavorite ? 0 : 1}));
    } else {
      navigate(Path.Login);
    }
  }

  function handleHover(offerId: string | null) {
    dispatch(setActiveOfferId(offerId ?? offer.id));
  }

  return (
    <div className="page">
      <Header/>
      {(fetchingOfferStatus === RequestStatus.Error) && <Navigate to={'/error'}/>}
      {fetchingOfferStatus === RequestStatus.Success && (
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.map((imagePath) => (
                  <div className="offer__image-wrapper" key={imagePath}>
                    <img className="offer__image" src={imagePath} alt="Photo studio"/>
                  </div>))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                <PremiumLabel visible={offer.isPremium} big/>
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">{offer.title}</h1>
                  <button onClick={onBookmarkClick} className={`offer__bookmark-button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''} button`} type="button">
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
                    {offer.goods.map((good) => <li key={good} className="offer__inside-item">{good}</li>)}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className={`${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} offer__avatar-wrapper user__avatar-wrapper`}>
                      <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="offer__user-name">{offer.host.name}</span>
                    {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">{offer.description}</p>
                  </div>
                </div>
                <Reviews/>
              </div>
            </div>
            {<Map location={City[offer.city.name].center} offers={mapOffers} specialOfferId={activeOfferId} type="offer"/>}
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {suggestionsOffers.map((card) => <OfferCard key={card.id} offer={card} onHover={handleHover}/>)}
              </div>
            </section>
          </div>
        </main>
      )}
      {fetchingOfferStatus === RequestStatus.Pending && (
        <main className="page__main page__main--offer">
          <Spinner/>
        </main>
      )}
    </div>
  );
}

export default OfferPage;
