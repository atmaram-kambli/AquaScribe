import React from 'react';
import './FeatureHead.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const FreatureHead = ({heading, showFeature, id, isActive, domainImage}) => {
  return (
    <div className='panel-head' style={(isActive === id-1) ? {backgroundColor: "#2A7D2E", color:"white"}:null} onClick={() => showFeature(id-1)}>        
        <img className='domain-image' src={ domainImage } alt="domain-profile" />
            <h2 className='heading'>{ heading }</h2>
            <FontAwesomeIcon icon={faPlus} size='3x' className='plus-icon' onClick={() => showFeature(id-1)} />
    </div>
  )
}

export default FreatureHead