import { useState } from 'react';
import { SortOption } from '../../settings.ts';

type SortingVariantsProps = {
  activeSortType: SortOption;
  setActiveSortType: (sortType: SortOption) => void;
};

function SortingVariants({activeSortType, setActiveSortType}: SortingVariantsProps) {
  const [active, setActive] = useState<boolean>(false);

  function setSortType(sortType: SortOption) {
    setActiveSortType(sortType);
    setActive(!active);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onMouseDown={() => setActive(!active)}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${active ? 'places__options--opened' : ''}`}>
        {Object.values(SortOption).map((option) => (<li key={option} className={`places__option ${option === activeSortType ? 'places__option--active' : ''}`} onClick={() => setSortType(option)}>{option}</li>))}
      </ul>
    </form>
  );
}

export default SortingVariants;
