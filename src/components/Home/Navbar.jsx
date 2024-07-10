import React from 'react';

function Navbar() {
  return (
    <nav>
        <div>
            {/* Logo  */}
        </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="/">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
