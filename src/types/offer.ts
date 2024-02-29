import { Review } from './review.ts';
import { User } from './user.ts';

export enum OfferType {
  Apartment = 'Apartment',
  Room = 'Room',
  House = 'House',
  Hotel = 'Hotel'
}

export enum OfferLocation {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export interface Offer {
  id: number;
  images: string[];
  header: string;
  description: string[];
  premium: boolean;
  type: OfferType;
  rating: number;
  bedroomsAmount: number;
  maxAdultsAmount: number;
  price: number;
  extraFeatures: string[];
  owner: User;
  reviews: Review[];
  location: OfferLocation;
}
