import React from "react";

const DropDownProfile = () => {
    return (
        <ul className='flex flex-col space-x-10 text-custom-white items-center'>
            <li className='px-2'><a className='text-sm font-inter' href="/">Home</a></li>
            <li className='px-2'><a className='text-sm font-inter' href="/gallery">Gallery</a></li>
            <li className='px-2'><a className='text-sm font-inter' href="#events">Events</a></li>
            <li className='px-2'><a className='text-sm font-inter' href="#about">About Us</a></li>
            <li className='px-2'><a className='text-sm font-inter' href="/">Contact Us</a></li>
        </ul>
    )
}

export default DropDownProfile