import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-main'>
          <div className="hero-content">
            <h1>Aqua Scribe</h1>
            <h2>A Simple & Smart Way To Manage Your Farm</h2>
            <p>AquaScribe is a smart water management system that leverages IoT sensors, ML Algorithms and automation to optimize irrigation processes in real-time</p>
            <button onClick={()=> (window.scrollTo({top:650, left:0, behavior:"smooth"}))}>Explore The Future Agriculture</button>
          </div>
      </div>
    </div>
  )
}

export default Hero