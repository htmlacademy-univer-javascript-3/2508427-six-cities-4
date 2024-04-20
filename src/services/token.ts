import {TOKEN_KEY_NAME} from '../settings.ts';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY_NAME) ?? '';
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY_NAME, token);
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY_NAME);
}
