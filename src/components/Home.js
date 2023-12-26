// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import arima_word_art from '../data/arima_word_art.png'; 
import arima_logo from '../data/arima_logo.png'; 
import './Home.css'; // Import the stylesheet

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleGetStartedClick = () => {
    // Navigate to the desired route
    navigate('/gettingstarted');
  };

  return (
    <div className="home-container">
      <header>
        <h1>ARIMA Analytix</h1>
        {/* <div className='arima-word-art-container'>
          <img src={arima_word_art} alt="ARIMA Analytix" className="arima-word-art" />
        </div> */}
        <p> Welcome to unleashing Data Dynamics </p>
      </header>

      <div className='floating-image-container'>
        <img src={arima_logo} alt="ARIMA LOGO" className="arima-logo" />
      </div>
      <section className="main-content">
        <p>
        Discover the power of data with ARIMA Analytix, your trusted partner in unlocking actionable insights. We specialize in advanced analytics, machine learning, and data engineering, empowering businesses to navigate the complexities of the modern data landscape.
        </p>
        <button className="cta-button" onClick={handleGetStartedClick}>
        Get Started
      </button>
      </section>

      
    </div>
  );
};

export default Home;
