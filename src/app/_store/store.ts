import { create } from 'zustand';
import { generateMockData, generateRandomData } from '../_services/mockData';

interface IChartState {
  chartData: {
    labels: string[];
    data: number[];
  };
  updateData: () => void;
  randomData: number[];
  updateRandomData: (newData: number[]) => void;
}

const useStore = create<IChartState>((set) => ({
  chartData: generateMockData(),
  updateData: () => set({ chartData: generateMockData() }),
  randomData: generateRandomData(10),
  updateRandomData: (newData) => set({ randomData: newData }),
}));

export { useStore };
