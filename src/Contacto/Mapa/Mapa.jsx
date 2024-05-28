import React from 'react';
import '../Mapa/mapa.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Ajustar el icono de Leaflet para que funcione correctamente con React
delete L.Icon.Default.prototype._getIconUrl;


const MapComponent = () => {
    const position = [39.453002, -0.354567]; // Coordenadas de la Ciudad de las Artes y las Ciencias

  return (
    <MapContainer center={position} zoom={15} style={{ height: '60vh', width: '65%', borderRadius:"10px", border:"10px solid rgb(80, 182, 185)", padding:"2px" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
