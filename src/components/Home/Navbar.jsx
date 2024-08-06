import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/Home-assets/assets';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='flex lg:px-16 bg-custom-black justify-between items-center py-3 relative'>
      <div className='pl-4 pt-1'>
        <span className='text-white text-xl'>
          <img src={assets.logo} alt="" className='lg:h-12 lg:w-72 w-32 h-6' />
        </span>
      </div>

      <button className='text-white sm:hidden text-xl pr-5 pt-3' onClick={toggleMenu}>
        ☰
      </button>

      {menuOpen && (
        <div 
          ref={menuRef}
          className='absolute top-full right-0 mt-2 mr-2 bg-[#0c0a0a] shadow-lg rounded-lg overflow-hidden z-50 border border-gray-600'
        >
          <ul className='py-2'>
            <li>
              <Link to="/" className='block px-4 py-2 text-white hover:bg-gray-200' onClick={handleMenuItemClick}>Home</Link>
            </li>
            <li>
              <Link to="/gallery" className='block px-4 py-2 text-white hover:bg-gray-200' onClick={handleMenuItemClick}>Gallery</Link>
            </li>
            <li>
              <Link to="/#events" className='block px-4 py-2 text-white hover:bg-gray-200' onClick={handleMenuItemClick}>Events</Link>
            </li>
            <li>
              <Link to="/team" className='block px-4 py-2 text-white hover:bg-gray-200' onClick={handleMenuItemClick}>Our Team</Link>
            </li>
            <li>
              <Link to="/" className='block px-4 py-2 text-white hover:bg-gray-200' onClick={handleMenuItemClick}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}

      <ul className='hidden sm:flex space-x-10 text-custom-white items-center justify-end'>
        <li className='px-2'>
          <Link to="/" className='text-md font-inter hover:text-white'>Home</Link>
        </li>
        <li className='px-2'>
          <Link to="/gallery" className='text-md font-inter hover:text-white'>Gallery</Link>
        </li>
        <li className='px-2'>
          <Link to="/#events" className='text-md font-inter hover:text-white'>Events</Link>
        </li>
        <li className='px-2'>
          <Link to="/team" className='text-md font-inter hover:text-white'>Our Team</Link>
        </li>
        <li className='px-2'>
          <Link to="/" className='text-md font-inter hover:text-white'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;