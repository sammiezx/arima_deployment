// src/components/Home.js
import React from 'react';
import './Home.css'; // Import the stylesheet

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>ARIMA Analytix</h1>
        <p> Welcome to unleashing Data Dynamics </p>
      </header>

      <section className="main-content">
        <p>
        Discover the power of data with ARIMA Analytix, your trusted partner in unlocking actionable insights. We specialize in advanced analytics, machine learning, and data engineering, empowering businesses to navigate the complexities of the modern data landscape.
        </p>
        <button className="cta-button">Get Started</button>
      </section>

      
    </div>
  );
};

export default Home;
