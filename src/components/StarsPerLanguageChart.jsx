import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import '../Style/StarsPerLanguageChart.css';

Chart.register(ArcElement, Tooltip, Legend);

const StarsPerLanguageChart = ({ starsPerLanguage }) => {
  const data = {
    labels: Object.keys(starsPerLanguage),
    datasets: [
      {
        data: Object.values(starsPerLanguage),
        backgroundColor: ['#e74c3c', '#3498db', '#8e44ad', '#f39c12'],
      },
    ],
  };

  return (
    <div className="container">
      <h3>Stars Per Language</h3>
      <Pie data={data} />
    </div>
  );
};

export default StarsPerLanguageChart;
