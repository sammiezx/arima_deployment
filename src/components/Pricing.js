// src/components/Pricing.js
import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-items">
        <div className="pricing-item baremetal">
          <h3>BareMetal</h3>
          <p>Perfect for startups and small businesses</p>
          <p>$45/month</p>
          <div className="pricing-item-content">
            <ul>
              <li>Automated KPIs, Visualizations and Reporting</li>
              <li>Demand And Inventory Forecasting</li>
              <li>Recommendation Systems</li>
              <li>Natural Language Processing</li>
            </ul>
          </div>
        </div>
        <div className="pricing-item resurgence">
          <h3>Resurgence</h3>
          <p>Great for growing businesses with moderate data needs</p>
          <p>$120/month</p>
          <div className="pricing-item-content">
            <ul>
              <li>Customer Segmentation</li>
              <li>Automated KPIs, Visualizations and Reporting</li>
              <li>Demand And Inventory Forecasting</li>
              <li>Recommendation Systems</li>
              <li>Churn Prediction</li>
              <li>A/B Testing</li>
              <li>Natural Language Processing</li>
              <li>Customer Lifetime Value (CLV) Prediction</li>
            </ul>
          </div>
        </div>
        <div className="pricing-item infinity">
          <h3>Infinity</h3>
          <p>For large enterprises with extensive data analysis requirements</p>
          <p>$300/month</p>
          <div className="pricing-item-content">
            <ul>
              <li>Customer Segmentation</li>
              <li>Automated KPIs, Visualizations and Reporting</li>
              <li>Demand And Inventory Forecasting</li>
              <li>Recommendation Systems</li>
              <li>Fraud Detection</li>
              <li>Churn Prediction</li>
              <li>A/B Testing</li>
              <li>Image Recognition (for products)</li>
              <li>Natural Language Processing</li>
              <li>Customer Lifetime Value (CLV) Prediction</li>
              <li>Dynamic Pricing</li>
              <li>Supply Chain Optimization</li>
              <li>Personalization Engines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
