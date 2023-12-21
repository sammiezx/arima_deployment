// src/components/CarouselContainer.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AsteroidReport from './AsteroidReport';
import AirQualityComponent from './AirQualityComponent';
import GeologicalNewsComponent from './GeologicalNewsComponent';
import './CarouselContainer.css';

const CarouselContainer = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set autoplay speed to 2 seconds (2000 milliseconds)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <AsteroidReport />
        </div>
        <div>
          <AirQualityComponent />
        </div>
        <div>
          <GeologicalNewsComponent />
        </div>
        {/* Add more components as needed */}
      </Slider>
    </div>
  );
};

export default CarouselContainer;
