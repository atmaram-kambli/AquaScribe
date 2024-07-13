import React, { useState, useEffect } from 'react';
import './weeklyDetails.css';

const WeeklyDetails = () => {
  const weatherAPI = import.meta.env.VITE_WEATHER_API_KEY;
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=18.5204&lon=73.8567&appid=${weatherAPI}&units=metric`);
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  const dailyForecast = forecastData.list.filter((item) => {
    const itemDate = new Date(item.dt_txt);
    return itemDate.getHours() === 12;
  });
//   console.log(forecastData)
  const dailyForecastAvg = forecastData.list.map((item) => {
    // console.log(item)
    const itemDate = new Date(item.dt_txt);
    return itemDate.getHours() === 12;
  });
  console.log("\n\n")
  return (
    <div className="weekly-details-container">
      <h3>Forecast - week</h3>
      <div className="forecast-grid">
        {dailyForecast.map((item, index) => (
          <div key={index} className="daily-summary">
            <p className="day">{new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</p>
            <p>{item.main.humidity}%</p>
            <div className="conditions">
              <img 
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} 
                alt={item.weather[0].description} 
              />
              {/* <p>{item.weather[0].description}</p> */}
            </div>
            <p>{item.main.temp_min.toFixed(0)}°C / {item.main.temp_max.toFixed(0)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyDetails;
