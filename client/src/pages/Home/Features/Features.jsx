import React, { useState } from 'react';
import './Features.css';
import features_data from '../../../assets/data/feature_data.js';
import Feature from './Feature/Feature';
import FreatureHead from './FeatureHead/FreatureHead';


const Features = () => {
  // const [showFeature, setShowFeature] = useState(0);
  const [featureID, setFeatureID] = useState(0);
  const showFeature = (id) => {
    setFeatureID(id);
  }

  return (
    <div className='features'>
      <p>Explore the features</p>
      <h3>What AquaScribe Offers</h3>
      <div className='features-accordian'>
        <div className="panel-head-list">
          <FreatureHead heading={`${features_data[0].heading}`} showFeature={showFeature} domainImage={`${features_data[0].image}`} id={`${features_data[0].id}`} isActive={featureID} />
          <FreatureHead heading={`${features_data[1].heading}`} showFeature={showFeature} domainImage={`${features_data[1].image}`} id={`${features_data[1].id}`} isActive={featureID} />
          <FreatureHead heading={`${features_data[2].heading}`} showFeature={showFeature} domainImage={`${features_data[2].image}`} id={`${features_data[2].id}`} isActive={featureID} />
        </div>
        <div className="panel-content">
          <Feature title={`${features_data[featureID].title}`} desc={`${features_data[featureID].desc}`} />
        </div>
      </div>
    </div>
  )
}

export default Features