import React from 'react';
import './Tools.css';
import TimeSeriesForecastingComponent from './TimeSeriesForecastingComponent';

const Tools = () => {
  return (
    <div className="tools-container">
      <h1 className="tools-heading">Machine Learning Tools</h1>
      <div className="tool-box">
        <h2 className="tool-title">Time Series Forecasting</h2>
        <TimeSeriesForecastingComponent />
      </div>
      <div className="tool-box">
        <h2 className="tool-title">Tool 2</h2>
        <p className="tool-description">Description of Tool 2</p>
      </div>
      <div className="tool-box">
        <h2 className="tool-title">Tool 3</h2>
        <p className="tool-description">Description of Tool 3</p>
      </div>
    </div>
  );
}

export default Tools;
