import { Location } from './location.ts';
import { User } from './user.ts';
import { City } from './city.ts';

export enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

interface OfferBase {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export interface OfferCompressed extends OfferBase {
  previewImage: string;
}

export interface Offer extends OfferBase {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}
