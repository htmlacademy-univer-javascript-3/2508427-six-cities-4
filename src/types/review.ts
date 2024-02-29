import { UserCompressed } from './user.ts';

export interface Review {
  id: number;
  author: UserCompressed;
  rating: number;
  date: string;
  text: string;
}

export interface ReviewTemplate {
  rating: number;
  text: string;
}
