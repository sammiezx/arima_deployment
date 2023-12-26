// src/components/AsteroidReport.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AsteroidReport.css'; // Import the stylesheet
import nasaLogo from '../data/nasa_image.png'; // Import the NASA logo

const AsteroidReport = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://5fac-113-199-169-16.ngrok-free.app', {
          headers: {
            'ngrok-skip-browser-warning': '7',
          },
        });

        console.log('API Response:', response.data); // Log the response to the console
        setData(response.data.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="asteroid-report-container">
      <img src={nasaLogo} alt="NASA Logo" className="nasa-logo" />
      <h2>Daily Asteroid Report</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : data ? (
        <div>
          <p>
            <strong>ASTEROID FORECAST:</strong> {data.asteroid_count}
          </p>
          <p>
            <strong>POTENTIAL HAZARD:</strong> {data.potential_hazards}
          </p>
        </div>
      ) : (
        <p>Error fetching data</p>
      )}
    </div>
  );
};

export default AsteroidReport;
