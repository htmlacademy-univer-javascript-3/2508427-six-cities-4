import { offers, offersCompressed } from '../mocks/offers.ts';
import { CityName } from '../settings.ts';
import { createReducer } from '@reduxjs/toolkit';
import { Offer, OfferCompressed } from '../types/offer.ts';
import { Review } from '../types/review.ts';
import { reviews } from '../mocks/reviews.ts';
import {
  dropOffer,
  fetchFavourites,
  fetchOffer,
  fetchOffers,
  fetchReviews,
  fetchSuggestions,
  setCurrentCityName,
} from './actions.ts';

const initialState: {
  offers: OfferCompressed[];
  suggestions: Offer[];
  reviews: Review[];
  offer: Offer | null;
  favourites: OfferCompressed[];
  currentCityName: CityName;
} = {
  offers: offersCompressed,
  suggestions: [],
  reviews: [],
  offer: null,
  favourites: [],
  currentCityName: CityName.Amsterdam
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offersCompressed;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchSuggestions, (state, action) => {
      state.suggestions = offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.suggestions = [];
    })
    .addCase(setCurrentCityName, (state, action) => {
      state.currentCityName = action.payload;
    })
    .addCase(fetchFavourites, (state) => {
      state.favourites = state.offers.filter((offer) => offer.isFavorite);
    });
});
