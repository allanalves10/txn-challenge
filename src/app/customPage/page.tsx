'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { useStore } from '../_store/store';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin,
  zoomPlugin
);

const Home: React.FC = () => {
  const { labels, data } = useStore((state) => state.chartData);
  const handleUpdateData = useStore((state) => state.updateData);

  const chartData: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Dados',
        data,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grafico Customizado',
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 50,
            yMax: 50,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
          },
        },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy',
        },
        zoom: {
          enabled: true,
          mode: 'xy',
        },
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        console.log('Ponto selecionado:', index, data[index]);
      }
    },
    onHover: (event, elements) => {
      event.native!.target!.style.cursor = elements.length ? 'pointer' : 'default';
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Line data={chartData} options={options} />
      <button
        onClick={handleUpdateData}
        className="
          bg-[rgb(75,192,192)] 
          text-white 
          font-semibold 
          py-2 
          px-4 
          rounded 
          shadow 
          hover:bg-[rgba(75,192,192,0.8)] 
          hover:shadow-lg 
          cursor-pointer 
          transition 
          duration-300
          mt-2
        "
      >
        Atualizar Dados
      </button>
    </div>
  );
};

export default Home;
