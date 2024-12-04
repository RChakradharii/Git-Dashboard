import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import '../Style/LanguageChart.css';  // Import the CSS file

Chart.register(ArcElement, Tooltip, Legend);
const LanguageChart = ({ languages }) => {
  const data = {
    labels: Object.keys(languages),
    datasets: [
      {
        data: Object.values(languages),
        backgroundColor: ['#f39c12', '#e74c3c', '#8e44ad', '#3498db'],
      },
    ],
  };

  return (
    <div className="chart">
      <h3>Languages Used</h3>
      <Pie data={data} />
    </div>
  );
};

export default LanguageChart;








// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
// import '../styles/LanguageChart.css';

// Chart.register(ArcElement, Tooltip, Legend);

// const LanguageChart = ({ languages }) => {
//   const data = {
//     labels: Object.keys(languages),
//     datasets: [
//       {
//         data: Object.values(languages),
//         backgroundColor: ['#f39c12', '#e74c3c', '#8e44ad', '#3498db'],
//       },
//     ],
//   };

//   return (
//     <div className="chart-container">
//       <h3>Languages Used</h3>
//       <Pie data={data} />
//     </div>
//   );
// };

// export default LanguageChart;
