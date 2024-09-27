import React, { useEffect } from 'react';
import './navbar.css';
import techLogo2 from '../assets/techlogo3.png'; 
import {Link} from "react-router-dom";
import Community from './Community'; 

const Navbar = () => {

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

  return (
   
    <div>
      <nav>
        <img src={techLogo2} alt="Tech Logo" />
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Community">COMMUNITY</Link> </li>
          <li><Link to="/Gallery">GALLERY</Link></li>
          <li><Link to="/About">ABOUT US</Link></li>
            <li><Link to="/Contact">CONTACT</Link></li>  
        </ul> 
      </nav>
    </div>
     
    
  );
};

export default Navbar;

