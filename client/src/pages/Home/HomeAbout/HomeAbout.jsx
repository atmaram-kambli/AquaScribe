import React from 'react';
import './HomeAbout.css';
import machine_photo from '../../../assets/img/machine.webp'

const HomeAbout = () => {
  return (
    <div className='about'>
      <div className='left'>
        <img src={machine_photo} alt="" />
      </div>
      <div className="right">
        <h1>AquaScribe</h1>
        <div className='right-para'>

        <p>The project is aimed to develop a novel Smart Irrigation System (SIS) to address water scarcity challenges in agriculture, by leveraging the strengths of Internet of Things (IoT), Machine Learning (ML), and web development</p>
        <p>This three-stage approach combines the power of real-time data collection, predictive analytics, and user-friendly visualization for a comprehensive Smart Irrigation System. By integrating these technologies, we aim to empower farmers with data-driven insights for optimizing water usage, maximizing crop health, and promoting sustainable agricultural practices </p>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout