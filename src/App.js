// src/App.js
import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import CarouselContainer from './components/CarouselContainer';
import './App.css';

function App() {
  return (
    <div>
      <Home />
      <Services />
      <Pricing />
      <CarouselContainer />
      <Contact />
    </div>
  );
}

export default App;
