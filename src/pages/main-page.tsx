import Header from '../components/header.tsx';
import Tabs from '../components/tabs.tsx';
import OffersList from '../components/offers-list.tsx';
import Map from '../components/map.tsx';
import { useState } from 'react';
import { useAppSelector } from '../hooks';
import { City, RequestStatus, SortType } from '../settings.ts';
import Spinner from '../components/spinner.tsx';
import SortingVariants from '../components/sorting-variants.tsx';
import { OfferCompressed } from '../types/offer.ts';


const getSortedOffers = (offers: OfferCompressed[], sortType: SortType) => {
  if (sortType === SortType.LowToHigh) {
    return offers.sort((a, b) => a.price - b.price);
  }
  if (sortType === SortType.HighToLow) {
    return offers.sort((a, b) => b.price - a.price);
  }
  if (sortType === SortType.TopRated) {
    return offers.sort((a, b) => b.rating - a.rating);
  }
  return offers;
};


function MainPage() {
  const rawOffers = useAppSelector((state) => state.offers);
  const currentCityName = useAppSelector((state) => state.currentCityName);
  const offersFetchingStatus = useAppSelector((state) => state.offersFetchingStatus);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [activeSortType, setActiveSortType] = useState<SortType>(SortType.Popular);

  if (offersFetchingStatus === RequestStatus.Pending) {
    return <Spinner />;
  }

  const offers = rawOffers.filter((x) => x.city.name === currentCityName);
  const sortedOffers = getSortedOffers(offers, activeSortType);

  const content = offers.length > 0
    ? (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCityName}</b>
          <SortingVariants activeSortType={activeSortType} setActiveSortType={setActiveSortType} />
          <OffersList offers={sortedOffers} setActiveOfferId={setActiveOfferId} />
        </section>
        <div className="cities__right-section">
          <Map location={City[currentCityName].center} offers={offers} specialOfferId={activeOfferId} type="cities" />
        </div>
      </div>
    )
    : (
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in Amsterdam</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    );

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          {content}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
