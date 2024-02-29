import { Location, LocationCity } from './location.ts';
import { User } from './user.ts';

export enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

export interface OfferCompressed {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: LocationCity;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export interface Offer {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: LocationCity;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}
