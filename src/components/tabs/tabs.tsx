import { CityName } from '../../settings.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentCityName } from '../../store/actions.ts';


function Tabs() {
  const dispatch = useAppDispatch();
  const currentCityName = useAppSelector((state) => state.currentCityName);
  const handleTabClick = (city: CityName) => dispatch(setCurrentCityName(city));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityName).map((cityName) =>
            (
              <li onClick={() => handleTabClick(cityName)} className="locations__item" key={cityName}>
                <a className={`locations__item-link tabs__item ${currentCityName === cityName ? 'tabs__item--active' : ''}`} href="#">
                  <span>{cityName}</span>
                </a>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
