export enum AuthorizationStatus {
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
