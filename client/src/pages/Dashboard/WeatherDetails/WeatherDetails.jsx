import React, { useState, useEffect } from 'react';
import './weatherDetails.css';

const WeatherDetails = () => {
  const weatherAPI = import.meta.env.VITE_WEATHER_API_KEY;
  const [weatherCurrentData, setWeatherCurrentData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=18.5204&lon=73.8567&appid=${weatherAPI}&units=metric`);
        const data = await response.json();
        setWeatherCurrentData(data);
        // console.log(data)
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherCurrentData) {
    return <div>Loading...</div>;
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="weather-container">
      <h3>Today's forecast</h3>
      <div className="weather-current">
      <div className="weather-main">
        <div className="weather-temp">
          <img
            src={`http://openweathermap.org/img/wn/${weatherCurrentData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
        <div className="weather-condition">
          <h3>+{weatherCurrentData.main.temp.toFixed(0)}°</h3>
          <p>{weatherCurrentData.weather[0].description}</p>
          <p>{weatherCurrentData.main.temp_min.toFixed(0)}°/{weatherCurrentData.main.temp_max.toFixed(0)}° feels like {weatherCurrentData.main.feels_like.toFixed(0)}°</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="weather-detail">
          <img src="https://img.icons8.com/color/48/000000/humidity.png" alt="Humidity" />
          <p>Humidity</p>
          <p>{weatherCurrentData.main.humidity}%</p>
        </div>
        <div className="weather-detail">
          <img src="https://img.icons8.com/color/48/000000/wind.png" alt="Wind Speed" />
          <p>Wind </p>
          <p>{weatherCurrentData.wind.speed} m/s</p>
        </div>
        <div className="weather-detail">
          <img src="https://img.icons8.com/color/48/000000/pressure.png" alt="Pressure" />
          <p>Pressure</p>
          <p>{weatherCurrentData.main.pressure} hPa</p>
        </div>
        <div className="weather-detail weather-detail-sun">
          <div>
            <img src="https://img.icons8.com/color/48/000000/sunrise.png" alt="Sunrise" />
            <p>Sunrise</p>
            <p>{formatDate(weatherCurrentData.sys.sunrise)}</p>
          </div>
          <div>

            <img src="https://img.icons8.com/color/48/000000/sunset.png" alt="Sunset" />
            <p>Sunset</p>
            <p>{formatDate(weatherCurrentData.sys.sunset)}</p>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default WeatherDetails;
