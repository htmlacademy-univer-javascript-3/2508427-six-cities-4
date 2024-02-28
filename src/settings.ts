export enum Path {
  Main = '/',
  Login = '/login',
  Favourites = '/favourites',
  OfferById = '/offer/:id',
  Error = '*'
}

export enum MainPageSettings {
  FoundPlacesAmount = 312
}

export enum AuthorizationStatus {
  NotAuthorized,
  Authorized
}
