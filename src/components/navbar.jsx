import React, { useEffect } from 'react';
import './navbar.css';
import techLogo from '../assets/techlogo.png'; 

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
        <img src={techLogo} alt="Tech Logo" />
        <ul>
          <li>HOME</li>
          <li>COMMUNITY</li>
          <li>GALLERY</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

