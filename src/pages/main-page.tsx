import Header from '../components/header.tsx';
import Tabs from '../components/tabs.tsx';
import OffersList from '../components/offers-list.tsx';
import Map from '../components/map.tsx';
import { useState } from 'react';
import { useAppSelector } from '../hooks';
import { City, RequestStatus } from '../settings.ts';
import Spinner from '../components/spinner.tsx';


function MainPage() {
  const rawOffers = useAppSelector((state) => state.offers);
  const currentCityName = useAppSelector((state) => state.currentCityName);
  const fetchingStatus = useAppSelector((state) => state.fetchingStatus);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  if (fetchingStatus === RequestStatus.Pending) {
    return <Spinner />;
  }

  const offers = rawOffers.filter((x) => x.city.name === currentCityName);
  const content = offers.length > 0
    ? (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCityName}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            {/*<ul className="places__options places__options--custom places__options--opened">*/}
            {/*  <li className="places__option places__option--active" tabIndex={0}>Popular</li>*/}
            {/*  <li className="places__option" tabIndex={0}>Price: low to high</li>*/}
            {/*  <li className="places__option" tabIndex={0}>Price: high to low</li>*/}
            {/*  <li className="places__option" tabIndex={0}>Top rated first</li>*/}
            {/*</ul>*/}
          </form>
          <OffersList offers={offers} setActiveOfferId={setActiveOfferId} />
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
