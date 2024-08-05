import React from 'react'
import ReactDOM from 'react-dom';
import Carousel from '../../assets/Gallery-assets/gallery-crsl';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs as needed
];

function Hero() {
  return (
    <div>
      <Carousel images={images}></Carousel>
    </div>
  )
}

export default Hero
