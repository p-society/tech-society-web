import React from 'react';
import './Hero.css';

const CurvedCarousel = () => {
  const images = Array.from({ length: 16 }, (_, i) => `https://picsum.photos/seed/picsum${i + 1}/600/600`);

  return (
    <div className="carousel-container bg-[#0C0A0A]">

      <h1 className='text-[#3356E8] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold xl:mb-9'>
        Gallery
      </h1>
      <h2 className='text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl lg:mb-9'>
      &quot;Exploring the Digital Frontier: Capturing the Tech-Infused World&quot;
      </h2>
      
      <section>
        <div className="wrapper ">
          {images.concat(images).map((src, index) => (
            <div key={index} className="image-container">
              <img src={src} alt={`Image ${(index % 16) + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CurvedCarousel;