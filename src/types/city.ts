import { Location } from './location.ts';
import { CityName } from '../settings.ts';

export interface City {
  name: CityName;
  center: Location;
}
