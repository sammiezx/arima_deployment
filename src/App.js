// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './Body';
import Navbar from './components/Navbar';
import GettingStarted from './components/GettingStarted'; // New component
import Tools from './components/Tools'; // New component
import Career from './components/Career'; // New component
import Innovation from './components/Innovation'; // New component
import AboutUs from './components/AboutUs'; // New component
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          {/* New components as part of the app, not specific routes */}
          <Route path="/gettingstarted" element={<GettingStarted />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/career" element={<Career />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
