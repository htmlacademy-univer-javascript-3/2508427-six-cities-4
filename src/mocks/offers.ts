import { Offer, OfferLocation, OfferType } from '../types/offer.ts';
import { reviews } from './reviews.ts';


export const offers: Offer[] = [
  {
    id : 1,
    header : 'Beautiful & luxurious studio at great location',
    images: ['img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'],
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    premium: true,
    type: OfferType.Apartment,
    rating: 4.8,
    bedroomsAmount: 3,
    maxAdultsAmount: 4,
    price: 120,
    extraFeatures: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    owner: {name: 'Angelina', image: 'img/avatar-angelina.jpg', pro: true},
    reviews: [reviews[0], reviews[1]],
    location: OfferLocation.Dusseldorf
  },
  {
    id : 2,
    header : 'Very gud house',
    images: ['img/apartment-02.jpg'],
    description: ['I live here'],
    premium: false,
    type: OfferType.Hotel,
    rating: 3.4,
    bedroomsAmount: 1,
    maxAdultsAmount: 1,
    price: 1300,
    extraFeatures: ['Wi-Fi', 'Dishwasher'],
    owner: {name: 'Andrew', image: 'img/avatar-angelina.jpg', pro: false},
    reviews: [],
    location: OfferLocation.Paris
  },
  {
    id : 3,
    header : 'Incredible house',
    images: ['img/apartment-02.jpg', 'img/apartment-01.jpg'],
    description: ['I don\'t live here'],
    premium: false,
    type: OfferType.Hotel,
    rating: 2.4,
    bedroomsAmount: 41,
    maxAdultsAmount: 3,
    price: 150,
    extraFeatures: [],
    owner: {name: 'Angelina', image: 'img/avatar-angelina.jpg', pro: true},
    reviews: [reviews[0]],
    location: OfferLocation.Amsterdam
  },
  {
    id : 4,
    header : 'Ordinary apartments for people',
    images: ['img/apartment-01.jpg'],
    description: ['It\'s good enough', 'However, neighbours are bad'],
    premium: true,
    type: OfferType.Apartment,
    rating: 1.4,
    bedroomsAmount: 2,
    maxAdultsAmount: 1,
    price: 100,
    extraFeatures: ['Garden', 'Storage'],
    owner: {name: 'Max', image: 'img/avatar-angelina.jpg', pro: false},
    reviews: [reviews[0], reviews[1]],
    location: OfferLocation.Brussels
  },
];
