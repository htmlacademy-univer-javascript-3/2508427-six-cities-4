import {AuthorizationStatus, CityName, RequestStatus} from '../settings.ts';
import {createReducer} from '@reduxjs/toolkit';
import {Offer, OfferCompressed} from '../types/offer.ts';
import {Review} from '../types/review.ts';
import {checkAuth, fetchFavourites, fetchOffer, fetchOffers, login, logout, sendReview} from './api-actions.ts';
import {setCurrentCityName} from './actions.ts';
import {UserIdentity} from '../types/user.ts';

const initialState: {
  offers: OfferCompressed[];
  suggestions: OfferCompressed[];
  reviews: Review[];
  offer: Offer | null;
  favourites: OfferCompressed[];
  currentCityName: CityName;
  fetchingOffersStatus: RequestStatus;
  fetchingOfferStatus: RequestStatus;
  fetchingFavouritesStatus: RequestStatus;
  sendingReviewStatus: RequestStatus;
  authorizationStatus: AuthorizationStatus;
  user: UserIdentity | null;
} = {
  offers: [],
  suggestions: [],
  reviews: [],
  offer: null,
  favourites: [],
  currentCityName: CityName.Amsterdam,
  fetchingOffersStatus: RequestStatus.Pending,
  fetchingOfferStatus: RequestStatus.Pending,
  fetchingFavouritesStatus: RequestStatus.Pending,
  sendingReviewStatus: RequestStatus.Pending,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers.pending, (state) => {
      state.fetchingOffersStatus = RequestStatus.Pending;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.fetchingOffersStatus = RequestStatus.Success;
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.fetchingOffersStatus = RequestStatus.Error;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.fetchingOfferStatus = RequestStatus.Pending;
      state.offer = null;
      state.suggestions = [];
      state.reviews = [];
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.fetchingOfferStatus = RequestStatus.Success;
      state.offer = action.payload.offer;
      state.suggestions = action.payload.suggestions;
      state.reviews = action.payload.reviews;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.fetchingOfferStatus = RequestStatus.Error;
      state.offer = null;
      state.suggestions = [];
      state.reviews = [];
    })
    .addCase(fetchFavourites.pending, (state) => {
      state.fetchingFavouritesStatus = RequestStatus.Pending;
    })
    .addCase(fetchFavourites.fulfilled, (state, action) => {
      state.fetchingFavouritesStatus = RequestStatus.Success;
      state.favourites = action.payload;
    })
    .addCase(fetchFavourites.rejected, (state) => {
      state.fetchingFavouritesStatus = RequestStatus.Error;
    })
    .addCase(setCurrentCityName, (state, action) => {
      state.currentCityName = action.payload;
    })
    .addCase(checkAuth.pending, (state) => {
      state.authorizationStatus = AuthorizationStatus.Unknown;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Authorized;
    })
    .addCase(checkAuth.rejected, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NotAuthorized;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Authorized;
    })
    .addCase(login.rejected, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NotAuthorized;
    })
    .addCase(sendReview.pending, (state) => {
      state.sendingReviewStatus = RequestStatus.Pending;
    })
    .addCase(sendReview.fulfilled, (state, action) => {
      state.reviews.push(action.payload);
      state.sendingReviewStatus = RequestStatus.Success;
    })
    .addCase(sendReview.rejected, (state) => {
      state.sendingReviewStatus = RequestStatus.Error;
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NotAuthorized;
    });
});
