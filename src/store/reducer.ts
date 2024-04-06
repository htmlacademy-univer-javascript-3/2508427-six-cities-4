import { CityName, RequestStatus } from '../settings.ts';
import { createReducer } from '@reduxjs/toolkit';
import { Offer, OfferCompressed } from '../types/offer.ts';
import { Review } from '../types/review.ts';
import { fetchFavourites, fetchOffer, fetchOffers } from './api-actions.ts';
import { setCurrentCityName } from './actions.ts';

const initialState: {
  offers: OfferCompressed[];
  suggestions: OfferCompressed[];
  reviews: Review[];
  offer: Offer | null;
  favourites: OfferCompressed[];
  currentCityName: CityName;
  fetchingStatus: RequestStatus;
} = {
  offers: [],
  suggestions: [],
  reviews: [],
  offer: null,
  favourites: [],
  currentCityName: CityName.Amsterdam,
  fetchingStatus: RequestStatus.Idle
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers.pending, (state) => {
      state.fetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.fetchingStatus = RequestStatus.Success;
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.fetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.fetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.fetchingStatus = RequestStatus.Success;
      state.offer = action.payload.offer;
      state.suggestions = action.payload.suggestions;
      state.reviews = action.payload.reviews;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.fetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchFavourites.pending, (state) => {
      state.fetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchFavourites.fulfilled, (state, action) => {
      state.fetchingStatus = RequestStatus.Success;
      state.favourites = action.payload;
    })
    .addCase(fetchFavourites.rejected, (state) => {
      state.fetchingStatus = RequestStatus.Error;
    })
    .addCase(setCurrentCityName, (state, action) => {
      state.currentCityName = action.payload;
    });
});
