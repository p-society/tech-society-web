import React from 'react';
import { assets } from '../../assets/Home-assets/assets';


function Navbar() {
  return (
    <nav className='flex lg:px-16 bg-custom-black justify-between items-center py-3 '>
        <div className='pl-4 pt-1'>
            <img src ={assets.logo} alt="" className='lg:h-14 lg:w-80 w-32 h-6' />
        </div>

        
        {/** MENU BUTTON FOR THE NAVBAR*/}

        <button className='text-white sm:hidden text-xl pr-5 pt-3' >☰</button>

      <ul className='sm:flex space-x-10 text-custom-white items-center justify-end hidden'>
        <li className='px-2'><a className='text-md font-inter' href="/">Home</a></li>
        <li className='px-2'><a className='text-md font-inter' href="/gallery">Gallery</a></li>
        <li className='px-2'><a className='text-md font-inter' href="#events">Events</a></li>
        <li className='px-2'><a className='text-md font-inter' href="#about">About Us</a></li>
        <li className='px-2'><a className='text-md font-inter' href="/">Contact Us</a></li>
      </ul>
    </nav> 
  );
} 
export default Navbar; 
