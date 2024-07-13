import React from 'react'
import './dashboard.css'

import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import DashboardHeader from './DashboardHeader/DashboardHeader'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import GeoLocation from './GeoLocation/GeoLocation'
import WeatherMap from './WeatherMap/WeatherMap.jsx'
import WeeklyDetails from './WeeklyDetails/WeeklyDetails.jsx'

// import ShowTemperature from '../Components/ShowTemperature/ShowTemperature';
// import WeatherDetails from '../Components/WeatherDetails/WeatherDetails';
// import GeoLocation from '../Components/GeoLocation/GeoLocation';
// import WeeklyForecast from '../Components/WeeklyForecast/WeeklyForecast';

const Dashboard = () => {
  const weatherDetails = {
    condition: 'Cloudy',
    humidity: 60,
    windSpeed: 10.5,
    minTemp: 15.3,
    maxTemp: 22.7,
    sunrise: '6:30 AM',
    sunset: '7:45 PM',
  };

  const weatherDataStyle = {
    padding: "30px 0",
    text: "center",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  }
  const geoDetails = {
    city: 'Pune',
    latitude: '18.5204',
    longitude: '73.8567',
  };

  return (
    <div className='dashboard-main'>
    <ContentWrapper >
      <DashboardHeader />
      <div className="weather-map-container">
        <WeatherDetails />
        <GeoLocation geoDetails={geoDetails} />

      </div>
      <div className="weather-map-container">
        <WeeklyDetails />
        <WeatherMap/>

      </div>
      {/* <div className="weather-api-data" style={weatherDataStyle}> */}
      {/* <ShowTemperature temperature={39} icon={null} /> */}
      {/* <WeatherDetails
        condition={weatherDetails.condition}
        humidity={weatherDetails.humidity}
        windSpeed={weatherDetails.windSpeed}
        minTemp={weatherDetails.minTemp}
        maxTemp={weatherDetails.maxTemp}
        sunrise={weatherDetails.sunrise}
        sunset={weatherDetails.sunset}
      /> */}
      {/* <GeoLocation
        city={geoDetails.city}
        latitude={geoDetails.latitude}
        longitude={geoDetails.longitude}
      /> */}
      {/* </div> */}
      {/* <WeeklyForecast /> */}
    </ContentWrapper>

    </div>
  )
}

export default Dashboard