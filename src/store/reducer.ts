import { CityName, RequestStatus } from '../settings.ts';
import { createReducer } from '@reduxjs/toolkit';
import { Offer, OfferCompressed } from '../types/offer.ts';
import { Review } from '../types/review.ts';
import { fetchFavourites, fetchOffer, fetchOffers, fetchReviews, fetchSuggestions } from './api-actions.ts';
import { setCurrentCityName } from './actions.ts';

const initialState: {
  offers: OfferCompressed[];
  suggestions: OfferCompressed[];
  reviews: Review[];
  offer: Offer | null;
  favourites: OfferCompressed[];
  currentCityName: CityName;
  offersFetchingStatus: RequestStatus;
  offerFetchingStatus: RequestStatus;
  suggestionsFetchingStatus: RequestStatus;
  favouritesFetchingStatus: RequestStatus;
  reviewsFetchingStatus: RequestStatus;
} = {
  offers: [],
  suggestions: [],
  reviews: [],
  offer: null,
  favourites: [],
  currentCityName: CityName.Amsterdam,
  offersFetchingStatus: RequestStatus.Idle,
  offerFetchingStatus: RequestStatus.Idle,
  suggestionsFetchingStatus: RequestStatus.Idle,
  favouritesFetchingStatus: RequestStatus.Idle,
  reviewsFetchingStatus: RequestStatus.Idle
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers.pending, (state) => {
      state.offersFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offersFetchingStatus = RequestStatus.Success;
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.offersFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.offerFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offerFetchingStatus = RequestStatus.Success;
      state.offer = action.payload;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.offerFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchSuggestions.pending, (state) => {
      state.suggestionsFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchSuggestions.fulfilled, (state, action) => {
      state.suggestionsFetchingStatus = RequestStatus.Success;
      state.suggestions = action.payload;
    })
    .addCase(fetchSuggestions.rejected, (state) => {
      state.suggestionsFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchReviews.pending, (state) => {
      state.reviewsFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviewsFetchingStatus = RequestStatus.Success;
      state.reviews = action.payload;
    })
    .addCase(fetchReviews.rejected, (state) => {
      state.reviewsFetchingStatus = RequestStatus.Error;
    })
    .addCase(fetchFavourites.pending, (state) => {
      state.favouritesFetchingStatus = RequestStatus.Pending;
    })
    .addCase(fetchFavourites.fulfilled, (state, action) => {
      state.favouritesFetchingStatus = RequestStatus.Success;
      state.favourites = action.payload;
    })
    .addCase(fetchFavourites.rejected, (state) => {
      state.favouritesFetchingStatus = RequestStatus.Error;
    })
    .addCase(setCurrentCityName, (state, action) => {
      state.currentCityName = action.payload;
    });
});
