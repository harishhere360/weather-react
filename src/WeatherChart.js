import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale } from 'chart.js';
import {LinearScale } from 'chart.js';
import {PointElement } from 'chart.js';
import { LineElement } from 'chart.js';

const WeatherChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Temperature (°F)",
        data: data.temperature,
        fill: false,
        borderColor: "red",
        tension: 0.1
      },
      {
        label: "Humidity (%)",
        data: data.humidity,
        fill: false,
        borderColor: "blue",
        tension: 0.1
      },
      {
        label: "Conditions",
        data: data.conditions,
        fill: false,
        borderColor: "green",
        tension: 0.1,
        yAxisID: "y-axis-2",
        pointStyle: "rectRot",
        pointRadius: 8,
        pointBackgroundColor: data.conditions.map((condition) => {
          if (condition === "Clear") {
            return "yellow";
          } else if (condition === "Clouds") {
            return "gray";
          } else if (condition === "Rain") {
            return "blue";
          } else {
            return "black";
          }
        })
      }
    ]
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          id: "y-axis-1",
          type: "linear",
          position: "left"
        },
        {
          id: "y-axis-2",
          type: "point",
          position: "right"
        }
      ]
    }
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default WeatherChart;
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);