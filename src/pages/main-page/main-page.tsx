import Header from '../../components/header/header.tsx';
import Tabs from '../../components/tabs/tabs.tsx';
import OffersList from '../../components/offers-list/offers-list.tsx';
import Map from '../../components/map/map.tsx';
import {City, RequestStatus, SortOption} from '../../settings.ts';
import {useEffect, useState} from 'react';
import {OfferCompressed} from '../../types/offer.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Spinner from '../../components/spinner/spinner.tsx';
import SortingVariants from '../../components/sorting-variants/sorting-variants.tsx';
import {fetchOffers} from '../../store/api-actions.ts';


const getSortedOffers = (offers: OfferCompressed[], sortType: SortOption) => {
  switch (sortType) {
    case SortOption.LowToHigh:
      return offers.sort((offerA, offerB) => offerA.price - offerB.price);
    case SortOption.HighToLow:
      return offers.sort((offerA, offerB) => offerB.price - offerA.price);
    case SortOption.TopRated:
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
};


function MainPage() {
  const dispatch = useAppDispatch();
  const {offers, currentCityName, fetchingOffersStatus} = useAppSelector((state) => state);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [activeSortType, setActiveSortType] = useState<SortOption>(SortOption.Popular);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const filteredOffers = offers.filter((offer) => offer.city.name === currentCityName);
  const sortedOffers = getSortedOffers(filteredOffers, activeSortType);

  const content = filteredOffers.length > 0
    ? (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{filteredOffers.length} places to stay in {currentCityName}</b>
          <SortingVariants activeSortType={activeSortType} setActiveSortType={setActiveSortType}/>
          <OffersList offers={sortedOffers} setActiveOfferId={setActiveOfferId}/>
        </section>
        <div className="cities__right-section">
          <Map location={City[currentCityName].center} offers={filteredOffers} specialOfferId={activeOfferId}
               type="cities"/>
        </div>
      </div>
    )
    : (
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in
              Amsterdam</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    );

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
        <div className="cities">
          {fetchingOffersStatus === RequestStatus.Success && <div className="cities">{content}</div>}
          {fetchingOffersStatus === RequestStatus.Error && <h1>Error</h1>}
          {fetchingOffersStatus === RequestStatus.Pending && <Spinner/>}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
