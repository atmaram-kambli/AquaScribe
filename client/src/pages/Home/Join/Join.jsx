import React from 'react';
import './Join.css';
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div className='join'>
        <div className="left">
            <h1>Let's Join Us To Build A Sustainable Future with AquaScribe</h1>
            <p>Ready to transform your agricultural practices with AquaScribe? Contact our team today to learn more about our solutions and how we can collaborate for a sustainable future.</p>
        </div>
        <div className="right">
            <button ><Link to="/contact" onClick={()=>(window.scrollTo({top:0, left:0, behavior:"smooth"}))} className="link">Contact Us</Link></button>
        </div>
    </div>
  )
}

export default Join