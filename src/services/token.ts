import { TokenKeyName } from '../settings.ts';

export function getToken() {
  return localStorage.getItem(TokenKeyName) ?? '';
}

export function setToken(token: string) {
  localStorage.setItem(TokenKeyName, token);
}

export function deleteToken() {
  localStorage.removeItem(TokenKeyName);
}
