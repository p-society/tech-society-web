import React, { useEffect, useRef } from 'react';

const Gallery_crsl = ({ images }) => {
  const outerRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    let scrollInterval;

    if (outer) {
      scrollInterval = setInterval(() => {
        if (outer.scrollLeft + outer.clientWidth >= outer.scrollWidth) {
          outer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          outer.scrollBy({ left: outer.clientWidth, behavior: 'smooth' });
        }
      }, 3000); // Adjust the interval timing as needed
    }

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative w-full h-[30vh] overflow-hidden">
      <div className="absolute top-[-480%] left-1/2 w-[400%] h-[500%] bg-black rounded-full transform -translate-x-1/2 z-10"></div>
      <div className="absolute bottom-[-480%] left-1/2 w-[400%] h-[500%] bg-black rounded-full transform -translate-x-1/2 z-10"></div>
      <div className="absolute flex overflow-x-scroll scroll-smooth snap-x snap-mandatory w-full h-full" ref={outerRef}>
        {images.map((image, index) => (
          <div className="flex-none w-1/3 snap-center" key={index}>
            <div className="w-full h-full border-10 border-black">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery_crsl;