import React, { useState, useEffect } from 'react';
import BarChart from '../client/components/BarChart';
import LineChart from '../client/components/LineChart';
import PieChart from '../client/components/PieChart';
import Header from '../client/components/Header';
import { useTheme } from '../client/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

interface Indicator {
  label: string;
  value: string;
}

interface DataSet {
  label: string;
  value: number;
}

interface DataSets {
  Disponibilidade: DataSet[];
  Confiabilidade: DataSet[];
  MTBF: DataSet[];
  MTTA: DataSet[];
  MTTR: DataSet[];
}

interface Filters {
  startDate?: string;
  endDate?: string;
  equipmentType?: string;
  location?: string;
  maintenanceStatus?: string;
  maintenancePriority?: string;
  equipmentSupplier?: string;
  costRange?: string;
  responsibleTeam?: string;
  energyEfficiency?: string;
  failureHistory?: string;
}

const Dashboard = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [filters, setFilters] = useState<Filters>({});
  const [analysisType, setAnalysisType] = useState(t('overview'));
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simula um atraso de chamada API
    return () => clearTimeout(timer);
  }, []);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const indicators: Indicator[] = [
    { label: t('availability'), value: '99.68%' },
    { label: t('reliability'), value: '75.04%' },
    { label: 'MTBF', value: '104d 11h' },
    { label: 'MTTA', value: '14h 26min' },
    { label: 'MTTR', value: '21h 17min' }
  ];

  const dataSets: DataSets = {
    Disponibilidade: [{ label: 'Jan', value: 98 }, { label: 'Fev', value: 96 }],
    Confiabilidade: [{ label: 'Jan', value: 75 }, { label: 'Fev', value: 77 }],
    MTBF: [{ label: 'Jan', value: 120 }, { label: 'Fev', value: 110 }],
    MTTA: [{ label: 'Jan', value: 130 }, { label: 'Fev', value: 120 }],
    MTTR: [{ label: 'Jan', value: 140 }, { label: 'Fev', value: 130 }]
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <>
          <Header />
          <h1 className="text-3xl font-bold text-white mt-10 ml-4">{t('data_analysis_dashboard')}</h1>
          <div className="px-4 py-4 mt-4 bg-transparent">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                {['overview', 'fourier_analysis', 'trend_analysis', 'predictive_analysis', 'correlation_analysis'].map((type, index) => (
                  <button
                    key={index}
                    className={`block text-white ${theme === 'dark' ? 'bg-gray-900 hover:bg-black focus:ring-gray-800' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                    type="button"
                    onClick={() => setAnalysisType(t(type))}
                  >
                    {t(type)}
                  </button>
                ))}
              </div>
              <button
                className={`block text-white ${theme === 'dark' ? 'bg-gray-900 hover:bg-black focus:ring-gray-800' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                type="button"
                onClick={toggleModal}
              >
                {t('toggle_filters')}
              </button>
            </div>
            {isModalOpen && (
              <div
                id="crud-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t('adjust_filters')}
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={toggleModal}
                      >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">{t('close_modal')}</span>
                      </button>
                    </div>
                    <form className="p-4 md:p-5">
                      <div className="grid gap-4 mb-4 grid-cols-2">
                        {/* Campos do formulário para filtros */}
                        <div className="col-span-2">
                          <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('start_date')}</label>
                          <input type="date" id="startDate" name="startDate" value={filters.startDate || ''} onChange={e => setFilters(prev => ({ ...prev, startDate: e.target.value }))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                        </div>
                        <div className="col-span-2">
                          <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('end_date')}</label>
                          <input type="date" id="endDate" name="endDate" value={filters.endDate || ''} onChange={e => setFilters(prev => ({ ...prev, endDate: e.target.value }))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                        </div>
                        <div className="col-span-2">
                          <label htmlFor="equipmentType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('equipment_type')}</label>
                          <select id="equipmentType" value={filters.equipmentType || ''} onChange={e => setFilters(prev => ({ ...prev, equipmentType: e.target.value }))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white">
                            <option value="">{t('select_type')}</option>
                            <option value="type1">Tipo 1</option>
                            <option value="type2">Tipo 2</option>
                          </select>
                        </div>
                        <div className="col-span-2">
                          <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('location')}</label>
                          <select id="location" value={filters.location || ''} onChange={e => setFilters(prev => ({ ...prev, location: e.target.value }))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white">
                            <option value="">{t('select_location')}</option>
                            <option value="location1">Localização 1</option>
                            <option value="location2">Localização 2</option>
                          </select>
                        </div>
                        <div className="col-span-2">
                          <label htmlFor="maintenanceStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('maintenance_status')}</label>
                          <select id="maintenanceStatus" value={filters.maintenanceStatus || ''} onChange={e => setFilters(prev => ({ ...prev, maintenanceStatus: e.target.value }))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white">
                            <option value="">{t('select_status')}</option>
                            <option value="pending">{t('pending')}</option>
                            <option value="in_progress">{t('in_progress')}</option>
                            <option value="completed">{t('completed')}</option>
                          </select>
                        </div>
                        <div className="col-span-2">
                          <label htmlFor="maintenancePriority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('maintenance_priority')}</label>
                          <select id="maintenancePriority" value={filters.maintenancePriority || ''} onChange={e => setFilters(prev => ({ ...prev, maintenancePriority: e.target.value }))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white">
                            <option value="">{t('select_priority')}</option>
                            <option value="high">{t('high')}</option>
                            <option value="medium">{t('medium')}</option>
                            <option value="low">{t('low')}</option>
                          </select>
                        </div>
                      </div>
                      <button
                        className={`block text-white ${theme === 'dark' ? 'bg-gray-900 hover:bg-black focus:ring-gray-800' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                        type="submit"
                      >
                        {t('apply_filters')}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
            <div className="w-full h-screen">
              {analysisType === t('overview') ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                    {indicators.map(indicator => (
                      <div key={indicator.label} className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md">
                        <h2 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{indicator.label}</h2>
                        <p className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{indicator.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {Object.entries(dataSets).map(([title, dataSet]) => (
                      <div key={title} className="col-span-1 lg:col-span-1 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        {title.includes('MTBF') ? <LineChart data={dataSet} title={title} theme={theme} />
                        : title.includes('MTTA') ? <PieChart data={dataSet.map(item => ({ name: item.label, value: item.value }))} title={title} theme={theme} />
                        : <BarChart data={dataSet} title={title} theme={theme} />}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <LineChart data={[]} title={`${t('analysis')} ${analysisType}`} theme={theme} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
