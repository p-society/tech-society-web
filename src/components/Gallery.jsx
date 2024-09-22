import React from 'react';
import './Gallery.css';
import image1 from '../assets/img1.png';  
import image2 from '../assets/img3.png';
import image3 from '../assets/img2.png';
import image4 from '../assets/img4.png';
import image5 from '../assets/img5.png';
import image6 from '../assets/img6.png';
import Imgi from './imgi.jsx';
const Gallery = () => {
  const images = [image1, image2, image3, image4,image5,image6];


  return (
    <div className='fullgallery'>
      <div className="headline"> 
        <p>snapshots</p>
      </div>
    <div className='gallery'>
     
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery Item ${index + 1}`} />
        </div>
      ))}  
      
    </div>
   <div className="imgii"><Imgi/></div>
    </div>
  );
}

export default Gallery;
