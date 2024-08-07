'use client'

import React, { useEffect, useRef } from 'react';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RealTimeChart: React.FC = () => {
  const { data, handleUpdateData } = useStore((state) => ({
    data: state.randomData,
    handleUpdateData: state.updateRandomData,
  }));

  const chartData: ChartData<'line'> = {
    labels: Array.from({ length: data.length }, (_, i) => `Ponto ${i + 1}`),
    datasets: [
      {
        label: 'Dados em tempo real',
        data,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.5)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    animation: {
      duration: 0,
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de debouncing',
      },
    },
  };

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const updateChartData = () => {
    // Simula a adição de um novo ponto e remove o mais antigo
    const newData = [...data.slice(1), Math.floor(Math.random() * 100)];
    handleUpdateData(newData);
  };

  useEffect(() => {
    // Debouncing para evitar atualizações excessivas
    const debouncedUpdate = () => {
      clearTimeout(intervalRef.current as NodeJS.Timeout);
      intervalRef.current = setTimeout(() => {
        updateChartData();
      }, 2000); // 2 segundos de debounce
    };

    // Atualiza os dados em tempo real
    intervalRef.current = setInterval(debouncedUpdate, 1000); // Atualização a cada 1 segundo

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [data]);

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default RealTimeChart;
