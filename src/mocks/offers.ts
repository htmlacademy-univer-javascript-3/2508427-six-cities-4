import { Offer, OfferBase, OfferCompressed, OfferType } from '../types/offer.ts';
import { AmsterdamLocations } from './locations.ts';
import { users } from './users.ts';
import { City } from './cities.ts';


const offersBases: OfferBase[] = [
  {
    id: '0',
    title: 'Cozy Apartment',
    type: OfferType.Apartment,
    price: 1200,
    city: City.Amsterdam,
    location: AmsterdamLocations[0],
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: '1',
    title: 'Digital house with garden',
    type: OfferType.Hotel,
    price: 100,
    city: City.Amsterdam,
    location: AmsterdamLocations[1],
    isFavorite: true,
    isPremium: false,
    rating: 1.5
  },
  {
    id: '2',
    title: 'Hotel with school nearby',
    type: OfferType.House,
    price: 10,
    city: City.Amsterdam,
    location: AmsterdamLocations[2],
    isFavorite: false,
    isPremium: true,
    rating: 5
  },
  {
    id: '3',
    title: 'House or flat idk',
    type: OfferType.Room,
    price: 500,
    city: City.Amsterdam,
    location: AmsterdamLocations[3],
    isFavorite: true,
    isPremium: true,
    rating: 5
  }
];

export const offers: Offer[] = [
  {
    ...offersBases[0],
    description: 'A cozy apartment in the heart of New York.',
    bedrooms: 2,
    goods: ['Fridge', 'Stove'],
    host: users[0],
    images: ['img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg'],
    maxAdults: 4,
  },
  {
    ...offersBases[1],
    description: 'A cozy apartment in the heart of New York.',
    bedrooms: 2,
    goods: ['Fridge', 'Stove'],
    host: users[1],
    images: ['img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg'],
    maxAdults: 2,
  },
  {
    ...offersBases[2],
    description: 'A cozy apartment in the heart of New York.',
    bedrooms: 2,
    goods: ['Fridge', 'Stove'],
    host: users[1],
    images: ['img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg'],
    maxAdults: 2,
  },
  {
    ...offersBases[3],
    description: 'A cozy apartment in the heart of New York.',
    bedrooms: 2,
    goods: ['Fridge', 'Stove'],
    host: users[1],
    images: ['img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-02.jpg'],
    maxAdults: 2,
  },
];

export const offersCompressed: OfferCompressed[] = [
  {
    ...offersBases[0],
    previewImage: 'img/apartment-02.jpg',
  },
  {
    ...offersBases[1],
    previewImage: 'img/apartment-02.jpg',
  },
  {
    ...offersBases[2],
    previewImage: 'img/apartment-02.jpg',
  },
  {
    ...offersBases[3],
    previewImage: 'img/apartment-02.jpg',
  }
];
