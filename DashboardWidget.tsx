import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { ChartData } from './types';

interface DashboardWidgetProps {
  title: string;
  type: 'bar' | 'line';
  data: ChartData;
}

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  maintainAspectRatio: false
};

const DashboardWidget: React.FC<DashboardWidgetProps> = ({ title, type, data }) => {
  const ChartComponent = type === 'bar' ? Bar : Line;

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="font-bold mb-2">{title}</h2>
      <div style={{ height: '300px' }}>
        <ChartComponent data={data} options={chartOptions} />
      </div>
    </div>
  );
};

export default DashboardWidget;
