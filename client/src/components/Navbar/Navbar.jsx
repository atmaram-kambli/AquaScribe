import React , { useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/img/logo-no-background.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggleBtn, setToggleBtn] = useState(false);
    function showToggleBTN() {
        setToggleBtn(!toggleBtn);
    }

  return (
    <>
        <nav className="main-nav">
        <div className="navbar">
            <Link to="/" className="link">
            <div className="logo">
                <img src={logo} alt="logo" width="64px" />
                <h1>AquaScribe</h1>

            </div>
            </Link>
            <div className="menu-container">
                {<ul className={`menu-index ${(window.innerWidth < 992 && toggleBtn)? "active":""}`}>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/dashboard" className="link">Dashboard</Link></li>
                    <li><Link to="/controls" className="link">Controls</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                </ul> }
            </div>
            <div className="menu-btn" onClick={showToggleBTN}>
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
            </div> 
            {/* <div className="index-btn" id="toggleBtn"><i className="fas fa-bars"></i></div> */}
        </div>
    </nav>
    </>
  )
}

export default Navbar