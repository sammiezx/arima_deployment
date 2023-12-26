import React from 'react';
import './Innovation.css'; // Make sure to create Innovation.css file for styling

const Innovation = () => {
  return (
    <div className="innovation-container">
      <h2 className="section-heading">Innovation Initiatives</h2>

      <h1>ACTIVE PROJECTS</h1>
      <div className="innovation-card">
        <h3>NASA Asteroid Vault</h3>
        <p>
          Our collaboration with NASA involves creating an Asteroid Vault using advanced data analytics. We analyze
          asteroid data, trajectories, and potential threats to Earth, contributing to space exploration safety.
        </p>
        <p>
          Technologies Used: Space Data Analytics, Orbital Mechanics Modeling
        </p>
        <p>
          Impact: Enhancing asteroid threat detection and supporting space exploration missions.
        </p>
      </div>

      <div className="innovation-card">
        <h3>Air Quality Assessment</h3>
        <p>
          In our Air Quality Assessment initiative, we deploy sensor networks and data analytics to monitor air quality
          in urban areas. The goal is to provide real-time information for environmental management and public health.
        </p>
        <p>
          Technologies Used: IoT Sensors, Data Analytics, Environmental Monitoring
        </p>
        <p>
          Impact: Supporting environmental conservation, public health awareness, and policy decisions.
        </p>
      </div>

      <h1>FUTURE PROJECTS</h1>

      <div className="innovation-card">
        <h3>AI-Powered Healthcare Solutions</h3>
        <p>
          We are at the forefront of innovation in healthcare, developing AI-powered solutions to enhance diagnostics,
          personalized treatment plans, and healthcare management. Our projects include predictive disease modeling,
          medical imaging analysis, and patient care optimization.
        </p>
        <p>
          Technologies Used: Artificial Intelligence (AI), Machine Learning, Healthcare Informatics
        </p>
        <p>
          Impact: Improving patient outcomes, reducing healthcare costs, and advancing medical research.
        </p>
      </div>

      <div className="innovation-card">
        <h3>Sustainable Energy Analytics</h3>
        <p>
          Addressing global sustainability challenges, our Sustainable Energy Analytics initiative focuses on
          optimizing energy consumption, promoting renewable energy sources, and developing smart energy grids. We
          collaborate with energy providers and environmental organizations to drive positive change.
        </p>
        <p>
          Technologies Used: Energy Analytics, IoT Integration, Renewable Energy Modeling
        </p>
        <p>
          Impact: Supporting the transition to sustainable energy practices and reducing the carbon footprint.
        </p>
      </div>

      <div className="innovation-card">
        <h3>Blockchain for Supply Chain Transparency</h3>
        <p>
          Our innovation in blockchain technology is geared towards enhancing supply chain transparency. By
          implementing distributed ledger solutions, we enable secure and transparent tracking of products across the
          supply chain, reducing fraud, ensuring authenticity, and improving overall efficiency.
        </p>
        <p>
          Technologies Used: Blockchain, Smart Contracts, Supply Chain Integration
        </p>
        <p>
          Impact: Ensuring product authenticity, reducing fraud, and optimizing supply chain operations.
        </p>
      </div>

      <div className="innovation-card">
        <h3>Smart City Infrastructure</h3>
        <p>
          Contributing to the development of smart cities, our projects focus on leveraging data analytics and IoT
          technologies to enhance urban infrastructure. This includes traffic management, waste optimization, and
          public safety initiatives for creating more sustainable and livable cities.
        </p>
        <p>
          Technologies Used: IoT, Data Analytics, Urban Planning Solutions
        </p>
        <p>
          Impact: Improving city living standards, reducing congestion, and promoting sustainability.
        </p>
      </div>

      <div className="innovation-card">
        <h3>Economy Forecasting</h3>
        <p>
          Our Economy Forecasting project involves predictive modeling and data analytics to forecast economic trends.
          We analyze various economic indicators, helping businesses and policymakers make informed decisions.
        </p>
        <p>
          Technologies Used: Predictive Modeling, Economic Data Analytics
        </p>
        <p>
          Impact: Assisting businesses in strategic planning, investment decisions, and economic policy formulation.
        </p>
      </div>

      {/* Add more innovation cards as needed */}
    </div>
  );
};

export default Innovation;
