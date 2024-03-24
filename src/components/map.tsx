import useMap from '../hooks/use-map.tsx';
import { useEffect, useRef } from 'react';
import { OfferCompressed } from '../types/offer.ts';
import { Location } from '../types/location.ts';
import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  location: Location;
  offers: OfferCompressed[];
  specialOfferId: string | null;
};

const defaultIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const activeIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

function Map({location, offers, specialOfferId}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          offer.id === specialOfferId ? activeIcon : defaultIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId]);

  return <section className="cities__map map" ref={mapRef} />;
}

export default Map;
