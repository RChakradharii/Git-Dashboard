import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import '../Style/MostForkedChart.css';

Chart.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const MostForkedChart = ({ forkedRepos = [] }) => {
  // Check if forkedRepos is an array and has data
  const hasData = forkedRepos && forkedRepos.length > 0;

  const data = {
    labels: hasData ? forkedRepos.map((repo) => repo.name) : [],
    datasets: hasData
      ? [
          {
            label: 'Forks',
            data: forkedRepos.map((repo) => repo.forks),
            backgroundColor: '#8e44ad',
          },
        ]
      : [],
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
    <div className="chart-container">
      <h3>Most Forked</h3>
      {hasData ? (
        <Bar data={data} options={options} />
      ) : (
        <p>No data available for forked repositories.</p>
      )}
    </div>
  );
};

export default MostForkedChart;
