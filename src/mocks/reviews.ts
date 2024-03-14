import { Review } from '../types/review.ts';
import { users } from './users.ts';

export const reviews: Review[] = [
  {id: '1', date: '2024-02-28', user: users[0], comment: 'Great product!', rating: 5},
  {id: '2', date: '2024-02-27', user: users[1], comment: 'Awesome service!', rating: 4},
  {id: '3', date: '2024-02-26', user: users[2], comment: 'Not bad, could be better.', rating: 3},
  {id: '4', date: '2024-02-25', user: users[3], comment: 'Would not recommend.', rating: 2},
  {id: '5', date: '2024-02-24', user: users[4], comment: 'Excellent!', rating: 5},
  {id: '6', date: '2024-02-23', user: users[5], comment: 'Great product!', rating: 4},
  {id: '7', date: '2024-02-22', user: users[6], comment: 'Awesome service!', rating: 3},
  {id: '8', date: '2024-02-21', user: users[7], comment: 'Not bad, could be better.', rating: 2},
  {id: '9', date: '2024-02-20', user: users[8], comment: 'Would not recommend.', rating: 1},
  {id: '10', date: '2024-02-19', user: users[9], comment: 'Excellent!', rating: 5},
  {id: '11', date: '2024-02-18', user: users[10], comment: 'Great product!', rating: 4},
  {id: '12', date: '2024-02-17', user: users[11], comment: 'Awesome service!', rating: 3},
  {id: '13', date: '2024-02-16', user: users[12], comment: 'Not bad, could be better.', rating: 2},
  {id: '14', date: '2024-02-15', user: users[13], comment: 'Would not recommend.', rating: 1},
  {id: '15', date: '2024-02-14', user: users[2], comment: 'Excellent!', rating: 5},
  {id: '16', date: '2024-02-13', user: users[1], comment: 'Great product!', rating: 4},
  {id: '17', date: '2024-02-12', user: users[1], comment: 'Awesome service!', rating: 3},
  {id: '18', date: '2024-02-11', user: users[0], comment: 'Not bad, could be better.', rating: 2},
  {id: '19', date: '2024-02-10', user: users[0], comment: 'Would not recommend.', rating: 1},
  {id: '20', date: '2024-02-09', user: users[0], comment: 'Excellent!', rating: 5},
];
