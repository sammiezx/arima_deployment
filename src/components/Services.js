// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-item">
        <h3>Data Analysis</h3>
        <p>Unlock valuable insights from your data to drive informed decision-making.</p>
      </div>
      <div className="service-item">
        <h3>Predictive Modeling</h3>
        <p>Utilize advanced predictive models to forecast trends and make proactive decisions.</p>
      </div>
      <div className="service-item">
        <h3>Data Visualization</h3>
        <p>Transform complex data into visual representations for easy understanding and analysis.</p>
      </div>
    </section>
  );
};

export default Services;
