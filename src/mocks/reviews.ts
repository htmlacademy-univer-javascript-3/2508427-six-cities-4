import { Review } from '../types/review.ts';

export const reviews: Review[] = [
  {
    id: 1,
    author: {name: 'Alex', image: 'img/avatar-max.jpg'},
    rating: 3,
    date: 'April 2014',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: 2,
    author: {name: 'Andrew', image: 'img/avatar-max.jpg'},
    rating: 1,
    date: 'April 2014',
    text: 'Good place'
  }
];
