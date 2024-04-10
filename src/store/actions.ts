import { createAction } from '@reduxjs/toolkit';
import { CityName, Namespace } from '../settings.ts';


export const setCurrentCityName = createAction<CityName>(`${Namespace.Offers}/setCurrentCityName`);
