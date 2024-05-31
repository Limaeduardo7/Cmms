import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import { Trash2, PlusCircle, Search, ChevronUp, ChevronDown } from 'lucide-react';
import { useTheme } from '../client/contexts/ThemeContext';
import { useCurrency } from '../client/contexts/CurrencyContext';
import Header from '../client/components/Header';
import { useTranslation } from 'react-i18next';

const API_URL = 'http://localhost:3001/api/assets1';
const CATEGORIAS_URL = 'http://localhost:3001/api/categorias';
const RESPONSAVEIS_URL = 'http://localhost:3001/api/responsaveis';

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

const DropdownCell = ({ value: initialValue, row: { index }, column: { id }, updateMyData, theme, options }) => {
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

  const onClick = () => setEditable(true);

  return editable ? (
    <select
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="w-full p-1 text-left"
      style={{
        backgroundColor: theme === 'dark' ? '#2A2A2A' : 'white',
        color: theme === 'dark' ? 'white' : 'black'
      }}
      autoFocus
    >
      {options.map(option => (
        <option key={option.id} value={option.nome}>
          {option.nome}
        </option>
      ))}
    </select>
  ) : (
    <div onClick={onClick} className="w-full p-1 text-left cursor-pointer">
      {value || t('click_to_edit')}
    </div>
  );
};

const StatusCell = ({ value: initialValue, row: { index }, column: { id }, updateMyData, theme }) => {
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

  const onClick = () => setEditable(true);

  return editable ? (
    <select
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="w-full p-1 text-left"
      style={{
        backgroundColor: theme === 'dark' ? '#2A2A2A' : 'white',
        color: theme === 'dark' ? 'white' : 'black'
      }}
      autoFocus
    >
      <option value="Ativo">{t('active')}</option>
      <option value="Inativo">{t('inactive')}</option>
    </select>
  ) : (
    <div onClick={onClick} className="w-full p-1 text-left cursor-pointer">
      {value || t('click_to_edit')}
    </div>
  );
};

const DateCell = ({ value: initialValue, row: { index }, column: { id }, updateMyData, theme }) => {
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
      type="date"
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

const NumberCell = ({ value: initialValue, row: { index }, column: { id }, updateMyData, theme }) => {
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
      type="number"
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

const MoneyCell = ({ value: initialValue, row: { index }, column: { id }, updateMyData, theme }) => {
  const [value, setValue] = useState(initialValue);
  const [editable, setEditable] = useState(false);
  const { t } = useTranslation();
  const { currency } = useCurrency();

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
      {new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value) || t('click_to_edit')}
    </div>
  );
};

const AssetsPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [responsaveis, setResponsaveis] = useState([]);
  const [filterInput, setFilterInput] = useState('');
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar ativos", error);
        setIsLoading(false);
      }
    };

    const fetchCategorias = async () => {
      try {
        const response = await axios.get(CATEGORIAS_URL);
        setCategorias(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias", error);
      }
    };

    const fetchResponsaveis = async () => {
      try {
        const response = await axios.get(RESPONSAVEIS_URL);
        setResponsaveis(response.data);
      } catch (error) {
        console.error("Erro ao buscar responsáveis", error);
      }
    };

    fetchAssets();
    fetchCategorias();
    fetchResponsaveis();
  }, []);

  const updateMyData = useCallback((rowIndex, columnId, newValue) => {
    const assetId = data[rowIndex].id;
    const updatedAsset = { ...data[rowIndex], [columnId]: newValue };

    console.log('Dados para atualizar:', updatedAsset); // Adicionando log para depuração

    axios.put(`${API_URL}/${assetId}`, updatedAsset)
      .then(response => {
        const newData = [...data];
        newData[rowIndex] = response.data;
        setData(newData);
      })
      .catch(error => console.error("Erro ao atualizar ativo", error));
}, [data]);


const handleAddAsset = useCallback(() => {
  const newAsset = {
    nome: '',
    descricao: '',
    categoria: '',
    status: '',
    localizacao: '',
    responsavel: '',
    data_aquisicao: '',
    proxima_manutencao: '',
    custo_aquisicao: '',
    valor_atual: '',
    numero_serie: ''
  };

  console.log('Dados para adicionar:', newAsset); // Adicionando log para depuração

  axios.post(API_URL, newAsset)
    .then(response => {
      setData([response.data, ...data]);
    })
    .catch(error => console.error("Erro ao adicionar ativo", error));
}, [data]);


  const handleDeleteAsset = useCallback((id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setData(currentData => currentData.filter(asset => asset.id !== id));
      })
      .catch(error => console.error("Erro ao deletar ativo", error));
  }, []);

  const columns = useMemo(() => [
    { Header: t('name'), accessor: 'nome', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('description'), accessor: 'descricao', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('category'), accessor: 'categoria', Cell: props => <DropdownCell {...props} updateMyData={updateMyData} theme={theme} options={categorias} /> },
    { Header: t('status'), accessor: 'status', Cell: props => <StatusCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('location'), accessor: 'localizacao', Cell: props => <EditableCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('responsible'), accessor: 'responsavel', Cell: props => <DropdownCell {...props} updateMyData={updateMyData} theme={theme} options={responsaveis} /> },
    { Header: t('acquisition_date'), accessor: 'data_aquisicao', Cell: props => <DateCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('next_maintenance'), accessor: 'proxima_manutencao', Cell: props => <DateCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('acquisition_cost'), accessor: 'custo_aquisicao', Cell: props => <MoneyCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('current_value'), accessor: 'valor_atual', Cell: props => <MoneyCell {...props} updateMyData={updateMyData} theme={theme} /> },
    { Header: t('serial_number'), accessor: 'numero_serie', Cell: props => <NumberCell {...props} updateMyData={updateMyData} theme={theme} /> },
    {
      Header: t('actions'),
      id: 'actions',
      Cell: ({ row }) => (
        <button onClick={() => handleDeleteAsset(row.original.id)} className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      )
    }
  ], [updateMyData, handleDeleteAsset, theme, t, categorias, responsaveis]);

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
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-4 mt-2">
          <h1 className="text-3xl font-bold mb-4 py-5">{t('assets')}</h1>
          <div className="mb-4 flex justify-between items-center">
            <button onClick={handleAddAsset} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-400'}`}>
              <PlusCircle className="mr-2" size={20} /> {t('add_asset')}
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

export default AssetsPage;