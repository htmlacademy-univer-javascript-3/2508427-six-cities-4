import { locations } from './locations.ts';
import { City } from '../types/city.ts';

export const cities: City[] = [
  {name: 'Paris', center: locations[0]},
  {name: 'Cologne', center: locations[1]},
  {name: 'Brussels', center: locations[2]},
  {name: 'Amsterdam', center: locations[3]},
  {name: 'Hamburg', center: locations[0]},
  {name: 'Dusseldorf', center: locations[1]},
];
