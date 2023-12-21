// src/App.js
import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Home />
      <Services />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
