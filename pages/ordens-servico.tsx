import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { Trash2, PlusCircle, Search, ChevronUp, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Header from '../components/Header';

const API_URL = 'http://localhost:8000/api/maintenance_workorders';

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // Função para atualizar dados
  theme
}) => {
  const [value, setValue] = useState(initialValue);
  const [editable, setEditable] = useState(false);

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
      {value || "Clique para editar"}
    </div>
  );
};

const WorkOrdersPage = () => {
  const [data, setData] = useState([]);
  const [filterInput, setFilterInput] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    const fetchWorkOrders = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar ordens de serviço", error);
      }
    };
    fetchWorkOrders();
  }, []);

  const updateMyData = useCallback(async (rowIndex, columnId, newValue) => {
    const workOrderId = data[rowIndex].id;
    const updatedWorkOrder = { ...data[rowIndex], [columnId]: newValue };
    try {
      const response = await axios.put(`${API_URL}/${workOrderId}`, updatedWorkOrder);
      const newData = [...data];
      newData[rowIndex] = response.data;
      setData(newData);
    } catch (error) {
      console.error("Erro ao atualizar ordem de serviço", error);
    }
  }, [data]);

  const handleAddWorkOrder = useCallback(() => {
    const newWorkOrder = {
      descricao: '',
      tipo_manutencao: 'Preventiva',
      status: 'Pendente',
      data_criacao: new Date().toISOString().slice(0, 10),
      data_agendamento: '',
      data_conclusao: '',
      prioridade: 'Normal',
      responsavel: '',
      ativo_relacionado: null,
      custo_estimado: 0,
      custo_real: 0,
      notas: '',
      anexos: {},  // Pode ser necessário ajustar conforme o formato esperado
      historico: {}
    };
    setData([newWorkOrder, ...data]);
  }, [data]);

  const handleDeleteWorkOrder = useCallback((id) => {
    try {
      axios.delete(`${API_URL}/${id}`);
      setData(currentData => currentData.filter(workOrder => workOrder.id !== id));
    } catch (error) {
      console.error("Erro ao deletar ordem de serviço", error);
    }
  }, []);

  const columns = useMemo(() => [
    { Header: 'Descrição', accessor: 'descricao' },
    { Header: 'Tipo de Manutenção', accessor: 'tipo_manutencao' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Data de Criação', accessor: 'data_criacao' },
    { Header: 'Data de Agendamento', accessor: 'data_agendamento' },
    { Header: 'Data de Conclusão', accessor: 'data_conclusao' },
    { Header: 'Prioridade', accessor: 'prioridade' },
    { Header: 'Responsável', accessor: 'responsavel' },
    { Header: 'Custo Estimado', accessor: 'custo_estimado', Cell: EditableCell },
    { Header: 'Custo Real', accessor: 'custo_real', Cell: EditableCell },
    { Header: 'Notas', accessor: 'notas', Cell: EditableCell },
    { Header: 'Ações', id: 'actions', Cell: ({ row }) => (
        <button onClick={() => handleDeleteWorkOrder(row.original.id)}
          className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      )
    }
  ], [updateMyData, handleDeleteWorkOrder, theme]);

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
      <div className="container mx-auto px-4 py-4 mt-14">
        <h1 className="text-3xl font-bold mb-4 py-5">Ordens de Serviço</h1>
        <div className="mb-4 flex justify-between items-center">
          <button onClick={handleAddWorkOrder} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-400'}`}>
            <PlusCircle className="mr-2" size={20} /> Adicionar Ordem de Serviço
          </button>
          <div className="relative w-64">
            <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Buscar..."
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
              Página{' '}
              <strong>
                {pageIndex + 1} de {Math.ceil(data.length / pageSize)}
              </strong>
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
                  Mostrar {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrdersPage;
