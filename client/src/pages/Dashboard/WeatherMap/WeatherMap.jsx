import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
const { BaseLayer, Overlay } = LayersControl;
import 'leaflet/dist/leaflet.css';
import './weatherMap.css'


const WeatherMap = () => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  return (
    <div className='weather-map'>
      <h3>Weather Map</h3>
      <MapContainer center={[20, 77]} zoom={2} style={{ height: '96%', width: '100%', borderRadius:"8px" }}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              
            />
          </BaseLayer>
          <Overlay name="Clouds">
            <TileLayer
              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              attribution='&copy; <a href="https://www.openweathermap.org/">OpenWeatherMap</a> contributors'
            />
          </Overlay>
          <Overlay checked name="Temperature">
            <TileLayer
              url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              attribution='&copy; <a href="https://www.openweathermap.org/">OpenWeatherMap</a> contributors'
            />
          </Overlay>
          <Overlay name="Precipitation">
            <TileLayer
              url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              attribution='&copy; <a href="https://www.openweathermap.org/">OpenWeatherMap</a> contributors'
            />
          </Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
