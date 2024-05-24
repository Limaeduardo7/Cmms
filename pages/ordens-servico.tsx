import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { Trash2, PlusCircle, Search, ChevronUp, ChevronDown } from 'lucide-react';
import { useTheme } from '../client/contexts/ThemeContext';
import Header from '../client/components/Header';
import { useTranslation } from 'react-i18next';

const API_URL = 'http://localhost:3001/api/ordens_servicos';

const EditableCell = ({ value: initialValue, row: { index }, column: { id }, updateMyData, theme }) => {
  const [value, setValue] = useState(initialValue);
  const [editable, setEditable] = useState(false);
  const { t } = useTranslation();

  const onChange = (e) => setValue(e.target.value);

  const onBlur = () => {
    if (value !== initialValue) {
      updateMyData(index, id, value);
    }
    setEditable(false);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onBlur();
    }
  };

  const onClick = () => setEditable(true);

  return editable ? (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      autoFocus
      className="w-full p-1 text-left"
      style={{
        backgroundColor: theme === 'dark' ? '#2A2A2A' : 'white',
        color: theme === 'dark' ? 'white' : 'black'
      }}
    />
  ) : (
    <div onClick={onClick} className="w-full p-1 text-left cursor-pointer">
      {value || t('click_to_edit')}
    </div>
  );
};

const WorkOrdersPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterInput, setFilterInput] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoading(true);
    axios.get(API_URL)
      .then(response => {
        setTimeout(() => {
          setData(response.data);
          setIsLoading(false);
        }, 2000);
      })
      .catch(error => {
        console.error("Erro ao buscar ordens de serviço", error);
        setIsLoading(false);
      });
  }, []);

  const updateMyData = useCallback((rowIndex, columnId, newValue) => {
    const workOrderId = data[rowIndex].id;
    const updatedWorkOrder = { ...data[rowIndex], [columnId]: newValue };
    axios.put(`${API_URL}/${workOrderId}`, updatedWorkOrder)
      .then(response => {
        const newData = [...data];
        newData[rowIndex] = response.data;
        setData(newData);
      })
      .catch(error => console.error("Erro ao atualizar ordem de serviço", error));
  }, [data]);

  const handleAddWorkOrder = useCallback(() => {
    const newWorkOrder = {
      descricao: '',
      tipo_manutencao: '',
      status: '',
      data_criacao: '',
      data_agendamento: '',
      data_conclusao: '',
      prioridade: '',
      responsavel: '',
      custo_estimado: 0,
      custo_real: 0,
      notas: ''
    };
    axios.post(API_URL, newWorkOrder).then(response => {
      setData(currentData => [response.data, ...currentData]);
    }).catch(error => console.error("Erro ao adicionar ordem de serviço", error));
  }, []);

  const handleDeleteWorkOrder = useCallback((id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setData(currentData => currentData.filter(workOrder => workOrder.id !== id));
    }).catch(error => console.error("Erro ao deletar ordem de serviço", error));
  }, []);

  const columns = useMemo(() => [
    { Header: t('description'), accessor: 'descricao', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('maintenance_type'), accessor: 'tipo_manutencao', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('status'), accessor: 'status', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('creation_date'), accessor: 'data_criacao', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('schedule_date'), accessor: 'data_agendamento', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('completion_date'), accessor: 'data_conclusao', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('priority'), accessor: 'prioridade', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('responsible'), accessor: 'responsavel', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('estimated_cost'), accessor: 'custo_estimado', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('real_cost'), accessor: 'custo_real', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('notes'), accessor: 'notas', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('actions'), id: 'actions', Cell: ({ row }) => (
        <button onClick={() => handleDeleteWorkOrder(row.original.id)}
          className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      )
    }
  ], [updateMyData, handleDeleteWorkOrder, theme, t]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setGlobalFilter,
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0 }
  }, useGlobalFilter, useSortBy, usePagination);

  return (
    <div className={`flex flex-col min-h-screen ${theme}`}>
      <Header />
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
          <div className="loading loading-dots loading-lg"></div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-4 mt-4">
          <h1 className="text-3xl font-bold mb-4 py-5">{t('work_orders')}</h1>
          <div className="mb-4 flex justify-between items-center">
            <button onClick={handleAddWorkOrder} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-400'}`}>
              <PlusCircle className="mr-2" size={20} /> {t('add_work_order')}
            </button>
            <div className="relative w-64">
              <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder={t('search')}
                value={filterInput}
                onChange={e => {
                  setGlobalFilter(e.target.value);
                  setFilterInput(e.target.value);
                }}
                className={`pl-10 pr-4 py-2 border rounded focus:outline-none focus:border-blue-300 w-full ${theme === 'dark' ? 'bg-gray-500 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
              />
            </div>
          </div>
          <div className={`overflow-x-auto rounded shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
              <thead className={`${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'}`}>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        {column.render('Header')}
                        {column.isSorted
                          ? column.isSortedDesc
                            ? <ChevronDown size={16} />
                            : <ChevronUp size={16} />
                          : ''}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className={`${i % 2 === 0 ? (theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50') : (theme === 'dark' ? 'bg-gray-700' : 'bg-white')}`}>
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm">
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pagination flex justify-end p-3">
              <button onClick={() => previousPage()} disabled={!canPreviousPage} className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {'<'}
              </button>
              <span className={`mx-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {t('page')} <strong>{pageIndex + 1} {t('of')} {Math.ceil(data.length / pageSize)}</strong>
              </span>
              <button onClick={() => nextPage()} disabled={!canNextPage} className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {'>'}
              </button>
              <select
                value={pageSize}
                onChange={e => setPageSize(Number(e.target.value))}
                className={`border rounded px-2 ml-3 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                {[10, 20, 30, 50].map(size => (
                  <option key={size} value={size}>
                    {t('show')} {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkOrdersPage;
