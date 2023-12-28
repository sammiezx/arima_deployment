// src/components/MainContent.js
import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Filler from './components/Filler';
import Clients from './components/Clients';
import Contact from './components/Contact';
import CarouselContainer from './components/CarouselContainer';

const Body = () => {
  return (
    <div>
      <Home />
      <Services />
      <Pricing />
      {/* <CarouselContainer /> */}
      <Filler />
      <Clients />
      <Contact />
    </div>
  );
};

export default Body;
