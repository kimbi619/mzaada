import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 3.848,
  lng: 11.502 // Coordinates for Yaoundé
};

const CustomMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY" // Replace with your actual API key
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // Generate 20 random markers around Yaoundé
  const markers = React.useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      position: {
        lat: center.lat + (Math.random() - 0.5) * 0.1,
        lng: center.lng + (Math.random() - 0.5) * 0.1
      }
    }));
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} />
      ))}
    </GoogleMap>
  ) : <></>
}

export default CustomMap;