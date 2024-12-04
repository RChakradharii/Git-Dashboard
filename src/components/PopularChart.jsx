import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import '../Style/PopularChart.css';

Chart.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const PopularChart = ({ popularRepos }) => {
  const data = {
    labels: popularRepos.map((repo) => repo.name),
    datasets: [
      {
        label: 'Stars',
        data: popularRepos.map((repo) => repo.stars),
        backgroundColor: '#3498db',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#555' },
      },
      y: {
        ticks: { color: '#555' },
      },
    },
  };

  return (
    <div className="container">
      <h3>Most Popular</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PopularChart;
