export enum AuthorizationStatus {
  NotAuthorized,
  Authorized
}

export enum Path {
  Main = '/',
  Login = '/login',
  Favourites = '/favourites',
  OfferById = '/offers/:id',
  Error = '*'
}
