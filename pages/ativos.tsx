import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { Trash2, PlusCircle, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Header from '../components/Header';

const API_URL = 'http://localhost:8000/api/assets';

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const [value, setValue] = useState(initialValue);
  const [editable, setEditable] = useState(false);

  const onChange = e => setValue(e.target.value);
  const onBlur = () => {
    if (value !== initialValue) {
      updateMyData(index, id, value);
    }
    setEditable(false);
  };
  const onClick = () => setEditable(true);
  const { theme } = useTheme();

  return editable ? (
    <input value={value} onChange={onChange} onBlur={onBlur} autoFocus className={`w-full p-1 text-left ${theme === 'dark' ? 'text-white' : 'text-gray-900'} bg-transparent`} />
  ) : (
    <div onClick={onClick} className={`w-full p-1 text-left cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-gray-900'} bg-transparent`}>
      {value || "Clique para editar"}
    </div>
  );
};


const AtivosPage = () => {
  const [data, setData] = useState([]);
  const [filterInput, setFilterInput] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    };

    fetchAssets();
  }, []);

  const updateMyData = useCallback((rowIndex, columnId, value) => {
    setData(old => old.map((row, index) => index === rowIndex ? { ...row, [columnId]: value } : row));
  }, []);

  const handleAddAsset = useCallback(() => {
    const newAsset = {
      nome: 'Novo Ativo', categoria: 'Categoria', status: 'Ativo', data_aquisicao: '2021-01-01',
      custo_aquisicao: 100, valor_atual: 150, fornecedor: 'Fornecedor', numero_serie: '123456',
      informacoes_garantia: 'N/A', responsavel: 'Admin', proxima_manutencao: '2021-12-31', notas: 'Nenhuma'
    };

    axios.post(API_URL, newAsset)
      .then(response => {
        setData(prev => [...prev, response.data]);
      })
      .catch(error => {
        console.error("Erro ao adicionar ativo", error);
      });
  }, []);

  const handleDeleteAsset = useCallback((id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setData(currentData => currentData.filter(asset => asset.id !== id));
      })
      .catch(error => {
        console.error("Erro ao deletar ativo", error);
      });
  }, []);

  const columns = useMemo(() => [
    { Header: 'Nome', accessor: 'nome', Cell: EditableCell },
    { Header: 'Categoria', accessor: 'categoria', Cell: EditableCell },
    { Header: 'Status', accessor: 'status', Cell: EditableCell },
    { Header: 'Data de Aquisição', accessor: 'data_aquisicao', Cell: EditableCell },
    { Header: 'Custo de Aquisição', accessor: 'custo_aquisicao', Cell: EditableCell },
    { Header: 'Valor Atual', accessor: 'valor_atual', Cell: EditableCell },
    { Header: 'Fornecedor', accessor: 'fornecedor', Cell: EditableCell },
    { Header: 'Número de Série', accessor: 'numero_serie', Cell: EditableCell },
    { Header: 'Informações de Garantia', accessor: 'informacoes_garantia', Cell: EditableCell },
    { Header: 'Responsável', accessor: 'responsavel', Cell: EditableCell },
    { Header: 'Próxima Manutenção', accessor: 'proxima_manutencao', Cell: EditableCell },
    { Header: 'Notas', accessor: 'notas', Cell: EditableCell },
    {
      Header: 'Ações',
      id: 'actions',
      Cell: ({ row }) => (
        <button onClick={() => handleDeleteAsset(row.original.id)}
          className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      )
    },
  ], [updateMyData, handleDeleteAsset, theme]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  return (
    <div className={`flex flex-col min-h-screen ${theme}`}>
      <Header />
      <div className="container mx-auto px-4 py-4 mt-14">
        <h1 className="text-3xl font-bold mb-4 py-5">Gerenciamento de Ativos</h1>
        <div className="mb-4 flex justify-between items-center">
          <button onClick={handleAddAsset} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-400'}`}>
            <PlusCircle className="mr-2" size={20} /> Adicionar Ativo
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
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
              {rows.map((row, index) => {
                prepareRow(row);
                const rowBgClass = index % 2 === 0 ? 'bg-opacity-50' : 'bg-opacity-75';
                return (
                  <tr {...row.getRowProps()} className={`${rowBgClass} ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
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
        </div>
      </div>
    </div>
  );
};

export default AtivosPage;
