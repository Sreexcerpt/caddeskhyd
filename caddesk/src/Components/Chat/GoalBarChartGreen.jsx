import { Colors } from "chart.js";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const GoalBarChartGreen = () => {
    const [chartData, setChartData] = useState({
        series: [{ data: [ 1390, 880, 1390] }],
      });
    
      const chartOptions = {
        chart: { type: "bar", height: 140 },
        plotOptions: {
          bar: { borderRadius: 1, borderRadiusApplication: "end", horizontal: true },
        },
        dataLabels: { enabled: false },
        Color:["green"],
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
          ],
        },
      };

  return (
    <div>
      <Chart options={chartOptions} series={chartData.series} type="bar" height={140} />
    </div>
  );
};

export default GoalBarChartGreen;
