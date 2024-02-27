import FavouritePlace from '../favourite-place/favourite-place.tsx';

function FavouriteLocation() {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Cologne</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <FavouritePlace />
      </div>
    </li>
  );
}

export default FavouriteLocation;
