import React, { useState, useRef, useEffect } from 'react';
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
            <li><a className='block px-4 py-2 text-white hover:bg-gray-200' href="/" onClick={handleMenuItemClick}>Home</a></li>
            <li><a className='block px-4 py-2 text-white hover:bg-gray-200' href="/gallery" onClick={handleMenuItemClick}>Gallery</a></li>
            <li><a className='block px-4 py-2 text-white hover:bg-gray-200' href="/#events" onClick={handleMenuItemClick}>Events</a></li>
            <li><a className='block px-4 py-2 text-white hover:bg-gray-200' href="/team" onClick={handleMenuItemClick}>Our Team</a></li>
            <li><a className='block px-4 py-2 text-white hover:bg-gray-200' href="/" onClick={handleMenuItemClick}>Contact Us</a></li>
          </ul>
        </div>
      )}

      <ul className='hidden sm:flex space-x-10 text-custom-white items-center justify-end'>
        <li className='px-2'><a className='text-md font-inter hover:text-white' href="/">Home</a></li>
        <li className='px-2'><a className='text-md font-inter hover:text-white' href="/gallery">Gallery</a></li>
        <li className='px-2'><a className='text-md font-inter hover:text-white' href="/#events">Events</a></li>
        <li className='px-2'><a className='text-md font-inter hover:text-white' href="/team">Our Team</a></li>
        <li className='px-2'><a className='text-md font-inter hover:text-white' href="/">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;