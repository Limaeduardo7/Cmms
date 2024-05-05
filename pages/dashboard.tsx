import React from 'react';
import BarChart from '../client/components/BarChart';
import Header from '../client/components/Header';
import { useTheme } from '../client/contexts/ThemeContext';

const Dashboard = () => {
  const { theme } = useTheme();

  const dataSets = {
    Disponibilidade: [{ label: 'Jan', value: 98 }, { label: 'Fev', value: 96 }],
    Confiabilidade: [{ label: 'Jan', value: 75 }, { label: 'Fev', value: 77 }],
    MTBF: [{ label: 'Jan', value: 120 }, { label: 'Fev', value: 110 }],
    MTTA: [{ label: 'Jan', value: 130 }, { label: 'Fev', value: 120 }],
    MTTR: [{ label: 'Jan', value: 140 }, { label: 'Fev', value: 130 }]
  };

  return (
    <div className="w-full px-4 py-4 bg-transparent">
      <Header />
      <div style={{ height: '70px' }} />
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        {Object.entries(dataSets).map(([title, dataSet]) => (
          <div className="col-span-1 lg:col-span-1 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <BarChart data={dataSet} title={title} theme={theme} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
