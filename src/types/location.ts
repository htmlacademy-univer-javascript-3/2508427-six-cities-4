export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface LocationCity {
  name: string;
  location: Location;
}
