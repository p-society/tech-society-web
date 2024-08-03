import React, { useState, useEffect, useRef } from 'react';
import './gallery.css';
import carouselImages from './galleryimg';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  const totalImages = carouselImages.length;
  const images = [carouselImages[totalImages - 1], ...carouselImages, carouselImages[0]];

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(totalImages);
      } else if (currentIndex === totalImages + 1) {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }
    };

    const track = trackRef.current;
    track.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      track.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, totalImages]);

  useEffect(() => {
    if (!isTransitioning) {
      const track = trackRef.current;
      track.style.transition = 'none';
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      requestAnimationFrame(() => {
        track.style.transition = '';
      });
    }
  }, [isTransitioning, currentIndex]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel-slide" key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Gallery;