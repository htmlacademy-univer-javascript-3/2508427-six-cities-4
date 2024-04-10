import FavouriteLocation from '../components/favourite-location.tsx';
import Header from '../components/header.tsx';
import Logo, { LogoType } from '../components/logo.tsx';
import { useAppSelector } from '../hooks';

function FavouritesPage() {
  const offers = useAppSelector((state) => state.offers);
  const citiesNames = [...new Set(offers.map((x) => x.city.name))];
  const content = citiesNames.length > 0
    ? (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {citiesNames.map((cityName) => (
            <FavouriteLocation
              key={cityName}
              cityName={cityName}
              offers={offers.filter((x) => x.city.name === cityName)}
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
