import React, { useState } from "react";
import Chart from "react-apexcharts";

const StockChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "STOCK ABC",
        data: [34, 45, 31, 55, 42, 67, 80, 95, 105, 115], // Sample stock price data
      },
    ],
  });

  const chartOptions = {
    chart: {
      type: "area",
      height: 350,
      zoom: { enabled: false },
    },
    colors: ["#FF5733"], // Custom color
    dataLabels: { enabled: false },
    stroke: { curve: "straight" },
    title: { text: "Fundamental Analysis of Stocks", align: "left" },
    subtitle: { text: "Price Movements", align: "left" },
    labels: [
      "2024-01-01",
      "2024-01-02",
      "2024-01-03",
      "2024-01-04",
      "2024-01-05",
      "2024-01-06",
      "2024-01-07",
      "2024-01-08",
      "2024-01-09",
      "2024-01-10",
    ], // Sample dates
    xaxis: { type: "datetime" },
    yaxis: { opposite: true },
    legend: { horizontalAlign: "left" },
  };

  return (
    <div>
      <h2>Stock Price Chart</h2>
      <Chart options={chartOptions} series={chartData.series} type="area" height={350} />
    </div>
  );
};

export default StockChart;
