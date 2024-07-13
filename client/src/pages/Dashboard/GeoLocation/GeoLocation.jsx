import React from 'react';
import './geoLocation.css';

const GeoLocation = (props) => {
  const {city, latitude, longitude} = props.geoDetails
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  // console.log(city)
  // console.log(latitude,longitude)
  return (
    <div className="geoContainer">
      {/* <h3 className="city"> {city} </h3> */}
      <div className="mapContainer">
        <iframe
          width="100%"
          height="100%"
          src={mapSrc}
          frameBorder="0" 
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default GeoLocation;
