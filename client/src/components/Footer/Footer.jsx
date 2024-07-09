import React from 'react';
import './Footer.css';
// import logo from '../../../assets/img/logo512.png';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo512.png';

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer-navi">
        <div className="logo">
          <img src={logo} alt="LOGO" width="64px"/>
          <p>Aqua Scribe</p>
        </div>
          <ul className="navigate">
              <li><Link to="/" className="link">Home</Link></li>
              <li><Link to="/dashboard" className="link">Dashboard</Link></li>
              <li><Link to="/controls" className="link">Controls</Link></li>
              <li><Link to="/contact" className="link">Contact</Link></li>
          </ul>
        </div>
        <hr className='linebreak' />
        <div className="rights">
            <p>&copy; {`${new Date().getFullYear()}`} <span id="currentYear"></span> Aqua Scribe | All Rights Reserved</p>
            <p>Aqua Scribe Team</p>
        </div>
    </section>
  )
}

export default Footer