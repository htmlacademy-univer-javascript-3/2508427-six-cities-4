import axios from 'axios';
import { BACKEND_URL, RequestTimeout } from '../settings.ts';
import { getToken } from './token.ts';


export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: RequestTimeout
  });

  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['x-token'] = token;
    }
    return config;
  });

  return api;
};
