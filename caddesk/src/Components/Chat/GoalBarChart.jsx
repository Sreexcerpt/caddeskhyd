import React, { useState } from "react";
import Chart from "react-apexcharts";

const GoalBarChartGreen = () => {
    const [chartData, setChartData] = useState({
        series: [{ data: [1390, 880, 1390] }],
    });

    const chartOptions = {
        chart: { type: "bar", height: 160 },
        plotOptions: {
            bar: { borderRadius: 1, borderRadiusApplication: "end", horizontal: true },
        },
        dataLabels: { enabled: false },
        colors: ["#28a745"], // Green color
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
            <Chart options={chartOptions} series={chartData.series} type="bar" height={160} />
        </div>
    );
};

export default GoalBarChartGreen;
