import React, { useState, useEffect } from 'react';
import './navbar.css';
import techLogo2 from '../assets/techlogo3.png'; 
import { Link } from 'react-router-dom';
import Community from './Community'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Add scroll event listener when component mounts
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (window.pageYOffset > 50) {
        navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.boxShadow = "none";
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav>
        <img src={techLogo2} alt="Tech Logo" />
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
          <li><Link to="/Community" onClick={toggleMenu}>COMMUNITY</Link></li>
          <li><Link to="/Gallery" onClick={toggleMenu}>GALLERY</Link></li>
          <li><Link to="/About" onClick={toggleMenu}>ABOUT US</Link></li>
          <li><Link to="/Contact" onClick={toggleMenu}>CONTACT</Link></li>
        </ul> 
      </nav>
    </div>
  );
};

export default Navbar;
