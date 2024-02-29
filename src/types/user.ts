export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface UserIdentity {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
