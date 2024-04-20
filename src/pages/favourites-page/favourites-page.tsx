import Header from '../../components/header/header.tsx';
import Logo from '../../components/logo/logo.tsx';
import {useAppSelector} from '../../hooks';
import {LogoType} from '../../settings.ts';
import FavouriteLocation from '../../components/favourite-location/favourite-location.tsx';

function FavouritesPage() {
  const favourites = useAppSelector((state) => state.favourites);
  const citiesNames = [...new Set(favourites.map((offer) => offer.city.name))];

  const content = citiesNames.length > 0
    ? (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {citiesNames.map((cityName) => (
            <FavouriteLocation
              key={cityName}
              cityName={cityName}
              offers={favourites.filter((offer) => offer.city.name === cityName)}
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
