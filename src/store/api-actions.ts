import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute, Namespace } from '../settings.ts';
import { Offer, OfferCompressed } from '../types/offer.ts';
import { AxiosInstance } from 'axios';
import { Review } from '../types/review.ts';

export const fetchOffers = createAsyncThunk<OfferCompressed[], undefined, {extra: AxiosInstance}>(
  `${Namespace.Offers}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferCompressed[]>(ApiRoute.Offers);
    return data;
  }
);

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], {extra: AxiosInstance}>(
  `${Namespace.Offer}/fetch`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(`${ApiRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], Offer['id'], {extra: AxiosInstance}>(
  `${Namespace.Reviews}/fetch`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${ApiRoute.Reviews}/${offerId}`);
    return data;
  }
);

export const fetchSuggestions = createAsyncThunk<OfferCompressed[], Offer['id'], {extra: AxiosInstance}>(
  `${Namespace.Suggestions}/fetch`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferCompressed[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);

export const fetchFavourites = createAsyncThunk<OfferCompressed[], undefined, {extra: AxiosInstance}>(
  `${Namespace.Favourites}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferCompressed[]>(ApiRoute.Favourites);
    return data;
  }
);
