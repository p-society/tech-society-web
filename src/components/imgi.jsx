import React from 'react';
import Slider from "react-slick";
import imgi1 from '../assets/img1.png'; 
import imgi2 from '../assets/img2.png'; 
import imgi3 from '../assets/img3.png'; 
import techblue from '../assets/techblue.png'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './imgi.css'

const Imgi = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, 
    centerMode: false, // Ensure that only one image is centered and fully visible
    focusOnSelect: true, // Enable focus on selected slide
    centerPadding: '0px', 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={imgi1} alt="img1" />
        </div>
        <div>
          <img src={imgi2} alt="img2" />
        </div>
        <div>
          <img src={imgi3} alt="img3" />
        </div>
        <div>
          <img src={techblue} alt="techblue" />
        </div>
      </Slider>
    </div>
  );
};
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="arrow right"></i>
    </div>
  );
};

// Custom Prev Arrow
const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="arrow left"></i>
    </div>
  );
};

 

export default Imgi;
