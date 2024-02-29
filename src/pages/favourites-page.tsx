import FavouriteLocation from '../components/favourite-location.tsx';
import Header from '../components/header.tsx';
import Logo, { LogoType } from '../components/logo.tsx';
import { Offer, OfferLocation } from '../types/offer.ts';

type FavouritesPageProps = {
  offers: Offer[];
};

function groupOffers(offers: Offer[]): {[key in OfferLocation]?: Offer[]} {
  if (offers.length === 0) {
    return {};
  }
  const clonedOffers = structuredClone(offers);
  clonedOffers.sort((a, b) => (a.location > b.location) ? 1 : -1);

  const result = {[clonedOffers[0].location]: [clonedOffers[0]]};
  let previousLocation = clonedOffers[0].location;
  for (let i = 1; i < clonedOffers.length; i++) {
    if (clonedOffers[i].location === previousLocation) {
      result[previousLocation].push(clonedOffers[i]);
    } else {
      result[clonedOffers[i].location] = [clonedOffers[i]];
      previousLocation = clonedOffers[i].location;
    }
  }

  return result;
}

function FavouritesPage({offers}: FavouritesPageProps) {
  const groupedOffers = groupOffers(offers);
  const content = offers.length > 0
    ? (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {Object.entries(groupedOffers).map(([location, offersGroup]) => (
            <FavouriteLocation
              key={location}
              location={location}
              offers={offersGroup}
            />))}
        </ul>
      </section>
    )
    : (
      <section className="favorites favorites--empty">
        <h1 className="visually-hidden">Favorites (empty)</h1>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">Nothing yet saved.</b>
          <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
        </div>
      </section>
    );

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {content}
        </div>
      </main>
      <footer className="footer container">
        <Logo type={LogoType.Footer}/>
      </footer>
    </div>
  );
}

export default FavouritesPage;
