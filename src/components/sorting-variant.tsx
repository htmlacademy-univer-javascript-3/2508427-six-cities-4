import { SortType } from '../settings.ts';

type SortingVariantProps = {
  sortType: SortType;
  activeSortType: SortType;
  setSortType: (sortType: SortType) => void;
};

function SortingVariant({sortType, activeSortType, setSortType}: SortingVariantProps) {
  return (
    <li
      className={`places__option ${sortType === activeSortType ? 'places__option--active' : ''}`}
      onClick={() => setSortType(sortType)}
    >
      {sortType}
    </li>
  );
}

export default SortingVariant;
