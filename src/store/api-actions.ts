import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoute, Namespace} from '../settings.ts';
import {FavouritesWithUser, Offer, OfferCompressed, OfferExtended, OfferFavouriteTemplate} from '../types/offer.ts';
import {AxiosInstance} from 'axios';
import {Review, ReviewPost} from '../types/review.ts';
import {UserIdentity, UserLogin} from '../types/user.ts';
import {deleteToken, setToken} from '../services/token.ts';


type ThunkApiConfig = {
  extra: AxiosInstance;
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

export const checkAuth = createAsyncThunk<FavouritesWithUser, undefined, ThunkApiConfig>(
  `${Namespace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    const {data: user} = await api.get<UserIdentity>(ApiRoute.Login);
    const {data: favourites} = await api.get<OfferCompressed[]>(ApiRoute.Favourites);
    return {user, favourites};
  },
);

export const login = createAsyncThunk<FavouritesWithUser, UserLogin, ThunkApiConfig>(
  `${Namespace.User}/login`,
  async (userLogin: UserLogin, {extra: api}) => {
    const {data: user} = await api.post<UserIdentity>(ApiRoute.Login, userLogin);
    const {data: favourites} = await api.get<OfferCompressed[]>(ApiRoute.Favourites);
    setToken(user.token);
    return {user, favourites};
  },
);

export const logout = createAsyncThunk<void, undefined, ThunkApiConfig>(
  `${Namespace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
    deleteToken();
  },
);

export const sendReview = createAsyncThunk<Review, ReviewPost, ThunkApiConfig>(
  `${Namespace.Reviews}/post`,
  async (reviewPost: ReviewPost, {extra: api}) => {
    const {data} = await api.post<Review>(`${ApiRoute.Reviews}/${reviewPost.offerId}`, reviewPost.template);
    return data;
  },
);

export const changeFavourite = createAsyncThunk<OfferCompressed, OfferFavouriteTemplate, ThunkApiConfig>(
  `${Namespace.Favourites}/change`,
  async (offerFavouriteTemplate: OfferFavouriteTemplate, {extra: api}) => {
    const {data} = await api.post<OfferCompressed>(`${ApiRoute.Favourites}/${offerFavouriteTemplate.offerId}/${offerFavouriteTemplate.status}`);
    return data;
  }
);
