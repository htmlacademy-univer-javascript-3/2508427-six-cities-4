import axios from 'axios';
import { BackendUrl, RequestTimeout } from '../settings.ts';
import { getToken } from './token.ts';


export const createApi = () => {
  const api = axios.create({
    baseURL: BackendUrl,
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
