import React from 'react';
import Plot from 'react-plotly.js';

const BarPlot = ({ data }) => {
  // Check if data is an array and contains arrays as elements
  if (!Array.isArray(data) || !data.every(Array.isArray)) {
    return <div>Error: Invalid data format</div>;
  }

  // Extract labels and values from data
  const labels = data.map((_, index) => `Dataset ${index + 1}`);
  const values = data.map(dataset => dataset.map(value => Math.abs(value))); // Take absolute values

  // Create data array for Plotly
  const plotData = values.map((datasetValues, index) => ({
    type: 'scatter',
    mode: 'lines',
    name: labels[index],
    x: [...Array(datasetValues.length).keys()], // Generate x values as sequential integers
    y: datasetValues,
    line: {
      color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, // Random color
      width: 3, // Thicker line
    },
  }));

  return (
    <div>
      {/* <h2>Plot</h2> */}
      <Plot
        data={plotData}
        layout={{
          width: 1700, // Adjusted width
          height: 400, // Adjusted height
          title: 'TIME SERIES PLOT',
          xaxis: {
            title: 'TIME',
            linecolor: 'white', // Set x-axis line color
          },
          yaxis: {
            title: 'VALUES',
            linecolor: 'white', // Set y-axis line color
          },
          plot_bgcolor: 'rgba(0, 0, 0, 0.5)', // Set plot background color to black with 50% transparency
          paper_bgcolor: 'rgba(0, 0, 0, 0)', // Set paper background color to transparent
        }}
      />
    </div>
  );
};

export default BarPlot;
