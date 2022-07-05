import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { options } from '../data';
import { IData } from '../App';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export type TChartProps = {
  data: IData,
}


export const Chart: React.FC<TChartProps> = ({ data }) => {
  return (
    <Bar options={options} data={data} />
  );
};
