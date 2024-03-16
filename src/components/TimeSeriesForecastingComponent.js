import React, { useState, useRef } from 'react'; // Import useRef hook
import { FiUpload } from 'react-icons/fi'; // Import the upload icon from react-icons
import './TimeSeriesForecastingComponent.css';
import BarPlot from './BarPlot'; // Import the BarPlot component

const TimeSeriesForecastingComponent = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [algorithm, setAlgorithm] = useState('ARIMA');
  const [forecastResult, setForecastResult] = useState(null);
  const fileInputRef = useRef(null); // Create a ref for file input

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Check file size
    if (file && file.size < 25000000) { // 25 MB in bytes
      setCsvFile(file);
    } else {
      alert("File size exceeds the limit of 25 MB.");
      event.target.value = ''; // Clear input field
    }
  };

  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };

  const handleForecastButtonClick = async () => {
    if (csvFile) {
      // Proceed with forecast if file is selected and within size limit
      const formData = new FormData();
      formData.append('csvFile', csvFile);
      formData.append('algorithm', algorithm);

      try {
        const response = await fetch('https://dadabagh.tailf5a01.ts.net/forecast', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const data = await response.json();
          setForecastResult(data);
          fileInputRef.current.value = null; // Reset file input value to null
        } else {
          throw new Error('Failed to fetch data from server.');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    } else {
      alert("Please select a CSV file before proceeding.");
    }
  };

  return (
    <div className="forecasting-container">
      <h2>Mr. Forecast</h2>
      <div className="input-section">
        {/* Download icon */}
        <FiUpload className="upload-icon" />

        {/* Browse/Upload Button */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleFileInputChange}
        />
        {/* Dropdown for selecting algorithm */}
        <select value={algorithm} onChange={handleAlgorithmChange}>
          <option value="ARIMA">ARIMA</option>
          <option value="Prophet">Prophet</option>
          <option value="LSTM">LSTM</option>
        </select>
        {/* Forecast Button */}
        <button onClick={handleForecastButtonClick}>Forecast</button>
      </div>
      {/* Display forecast result */}
      {forecastResult && (
        <div>
          {/* Render the BarPlot component if forecastResult.data is available */}
          {forecastResult.data && <BarPlot data={forecastResult.data} />}
        </div>
      )}
    </div>
  );
};

export default TimeSeriesForecastingComponent;
