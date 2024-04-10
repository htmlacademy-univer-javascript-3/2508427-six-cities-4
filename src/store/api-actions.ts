import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute, Namespace } from '../settings.ts';
import { Offer, OfferCompressed } from '../types/offer.ts';
import { AxiosInstance } from 'axios';
import { Review } from '../types/review.ts';


type ThunkApiConfig = {
  extra: AxiosInstance;
};

type OfferExtended = {
  offer: Offer;
  reviews: Review[];
  suggestions: OfferCompressed[];
};

export const fetchOffers = createAsyncThunk<OfferCompressed[], undefined, ThunkApiConfig>(
  `${Namespace.Offers}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferCompressed[]>(ApiRoute.Offers);
    return data;
  }
);

export const fetchOffer = createAsyncThunk<OfferExtended, Offer['id'], ThunkApiConfig>(
  `${Namespace.Offer}/fetch`,
  async (offerId, {extra: api}) => {
    const {data: offer} = await api.get<Offer>(`${ApiRoute.Offers}/${offerId}`);
    const {data: reviews} = await api.get<Review[]>(`${ApiRoute.Reviews}/${offerId}`);
    const {data: suggestions} = await api.get<OfferCompressed[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    return {offer, reviews, suggestions};
  }
);

export const fetchFavourites = createAsyncThunk<OfferCompressed[], undefined, ThunkApiConfig>(
  `${Namespace.Favourites}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferCompressed[]>(ApiRoute.Favourites);
    return data;
  }
);
