'use client'

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions, ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateMockData = () => {
  const labels = Array.from({ length: 10 }, (_, i) => `Ponto ${i + 1}`);
  const barData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  const lineData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  return { labels, barData, lineData };
};

const MixedChart: React.FC = () => {
  const { labels, barData, lineData } = generateMockData();

  const chartData: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'Dados em Barra',
        data: barData,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        type: 'line' as const,
        label: 'Dados em Linha',
        data: lineData,
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico Composto',
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default MixedChart;

