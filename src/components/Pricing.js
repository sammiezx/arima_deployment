// src/components/Pricing.js
import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-items">
        <div className="pricing-item">
          <h3>Basic Plan</h3>
          <p>Perfect for startups and small businesses</p>
          <p>$99/month</p>
        </div>
        <div className="pricing-item">
          <h3>Pro Plan</h3>
          <p>Great for growing businesses with moderate data needs</p>
          <p>$299/month</p>
        </div>
        <div className="pricing-item">
          <h3>Premium Plan</h3>
          <p>For large enterprises with extensive data analysis requirements</p>
          <p>$599/month</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
