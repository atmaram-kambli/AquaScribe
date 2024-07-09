import React from 'react';
// import React, { useState } from 'react';
import './Working.css';
import working_video from '../../../assets/video/652333414.mp4';
import water_image from '../../../assets/img/water1.jpg';

const Working = () => {
  // const [isDesktop, setIsDesktop] = useState((window.innerWidth >= 992));
  
  return (
    <div className='working'>
    <div className="left">
        <p>SIMPLE YET EFFICIENT</p>
        <h3>How It Works</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores ab praesentium suscipit natus provi ollitia accusantium nostrum eveniet non. Quaerat Numquam, uptatum.</p>
        <button className='dashboard'>Explore the Dashboard</button>
    </div>
    <div className="right">
        <div className="video-container">
          <video width={600} height={350} poster={water_image} controls>
            <source src={working_video} type="video/mp4" />
          </video>
        </div>
        {/* { !isDesktop && <button className='dashboard'>Explore the Dashboard</button>} */}
    </div>
    </div>
  )
}

export default Working