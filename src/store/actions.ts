import { createAction } from '@reduxjs/toolkit';
import { CityName, Namespace } from '../settings.ts';
import { Offer } from '../types/offer.ts';

export const fetchOffers = createAction(`${Namespace.Offers}/fetch`);
export const fetchOffer = createAction<Offer['id']>(`${Namespace.Offer}/fetch`);
export const fetchSuggestions = createAction<Offer['id']>(`${Namespace.Suggestions}/fetch`);
export const fetchFavourites = createAction(`${Namespace.Favourites}/fetch`);
export const fetchReviews = createAction<Offer['id']>(`${Namespace.Reviews}/fetch`);
export const setCurrentCityName = createAction<CityName>(`${Namespace.Offers}/setCurrentCityName`);
