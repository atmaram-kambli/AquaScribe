import React from 'react';
import './geoLocation.css';

const GeoLocation = (props) => {
  const {city, latitude, longitude} = props.geoDetails
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  // console.log(city)
  // console.log(latitude,longitude)
  return (
    <div className="geoContainer">
      <h3 className="city"> {city}, India </h3>
      <div className="mapContainer">
        <iframe
          width="98%"
          height="96%"
          src={mapSrc}
          frameBorder="0" 
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          className='iframe-box'
        ></iframe>
      </div>
    </div>
  );
};

export default GeoLocation;
