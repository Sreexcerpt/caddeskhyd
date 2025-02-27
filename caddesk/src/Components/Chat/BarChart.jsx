import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Utility function to generate random numbers
const getRandomNumbers = (count, min, max) =>
  Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1) + min));

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const BarChart = () => {
  const DATA_COUNT = 7;

  const [chartData, setChartData] = useState({
    labels: months.slice(0, DATA_COUNT),
    datasets: [
      {
        label: "Fully Rounded",
        data: getRandomNumbers(DATA_COUNT, -100, 100),
        borderColor: "#27a19f",
        backgroundColor: "#27a19f",
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: "Small Radius",
        data: getRandomNumbers(DATA_COUNT, -100, 100),
        borderColor: "#5eb85e",
        backgroundColor: "#5eb85e",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  });

  const options = {
    responsive: true,
    
  };

  // Function to randomize data
  const randomizeData = () => {
    setChartData((prev) => ({
      ...prev,
      datasets: prev.datasets.map((dataset) => ({
        ...dataset,
        data: getRandomNumbers(DATA_COUNT, -100, 100),
      })),
    }));
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
      <button onClick={randomizeData} style={buttonStyle}>Randomize Data</button>
    </div>
  );
};

// Button Styling
const buttonStyle = {
  marginTop: "10px",
  padding: "8px",
  cursor: "pointer",
};

export default BarChart;
