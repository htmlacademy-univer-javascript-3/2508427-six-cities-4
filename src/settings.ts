export enum AuthorizationStatus {
  Unknown,
  NotAuthorized,
  Authorized
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum Namespace {
  Offers = 'Offers',
  Offer = 'Offer',
  Suggestions = 'Suggestions',
  Favourites = 'Favourites',
  Reviews = 'Reviews',
  User = 'User',
}

export enum Path {
  Main = '/',
  Login = '/login',
  Favourites = '/favourites',
  OfferById = '/offers/:id',
  Error = '*'
}

export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export const City = {
  [CityName.Paris]: {name: CityName.Paris, center: {latitude: 48.8566, longitude: 2.3522, zoom: 10}},
  [CityName.Cologne]: {name: CityName.Cologne, center: {latitude: 50.935173, longitude: 6.953101, zoom: 10}},
  [CityName.Brussels]: {name: CityName.Brussels, center: {latitude: 50.8503, longitude: 4.3517, zoom: 10}},
  [CityName.Amsterdam]: {name: CityName.Amsterdam, center: {latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 10}},
  [CityName.Hamburg]: {name: CityName.Hamburg, center: {latitude: 53.5511, longitude: 9.9937, zoom: 10}},
  [CityName.Dusseldorf]: {name: CityName.Dusseldorf, center: {latitude: 51.2277, longitude: 6.7735, zoom: 10}},
} as const;

export const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
export const RequestTimeout = 5000;
export const TokenKeyName = 'six-cities-token';

export enum ApiRoute {
  Offers = '/offers',
  Reviews = '/comments',
  Favourites = '/favorite',
  Login = '/login',
  Logout = '/logout'
}

export enum RequestStatus {
  Pending,
  Success,
  Error
}
