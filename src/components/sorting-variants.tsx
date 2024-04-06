import { useState } from 'react';
import { SortType } from '../settings.ts';
import SortingVariant from './sorting-variant.tsx';

type SortingVariantsProps = {
  activeSortType: SortType;
  setActiveSortType: (sortType: SortType) => void;
};

function SortingVariants({activeSortType, setActiveSortType}: SortingVariantsProps) {
  const [active, setActive] = useState<boolean>(false);

  function setSortType(sortType: SortType) {
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
        {Array.from(Object.values(SortType)).map((x) =>
          (
            <SortingVariant key={x} sortType={x} activeSortType={activeSortType} setSortType={setSortType} />
          ))}
      </ul>
    </form>
  );
}

export default SortingVariants;
