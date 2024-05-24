import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { Trash2, PlusCircle, Search, ChevronUp, ChevronDown } from 'lucide-react';
import { useTheme } from '../client/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import Header from '../client/components/Header';

const API_URL = 'http://localhost:3001/api/assets';

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
      onBlur(); // Salva o valor e fecha o editor
    }
  };

  const onClick = () => setEditable(true);

  const { t } = useTranslation();

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
      {value || t("click_to_edit")}
    </div>
  );
};

const AtivosPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterInput, setFilterInput] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchAssets() {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL);
        setTimeout(() => {  // Simula um delay adicional
          setData(response.data);
          setIsLoading(false);
        }, 2000);  // Delay de 2 segundos
      } catch (error) {
        console.error("Erro ao buscar dados", error);
        setIsLoading(false);
      }
    }
    fetchAssets();
  }, []);

  const updateMyData = useCallback(async (rowIndex, columnId, newValue) => {
    const assetId = data[rowIndex].id;
    const updatedAsset = { ...data[rowIndex], [columnId]: newValue };
    try {
      const response = await axios.put(`${API_URL}/${assetId}`, updatedAsset);
      const newData = [...data];
      newData[rowIndex] = response.data;  // Certifique-se de que esta linha está corretamente atualizando o item
      setData(newData);
    } catch (error) {
      console.error("Erro ao atualizar dados", error);
    }
  }, [data]);

  const handleAddAsset = useCallback(async () => {
    const newAsset = {
      nome: '',
      categoria: '',
      status: '',
      data_aquisicao: '',
      custo_aquisicao: null,
      valor_atual: null,
      fornecedor: '',
      numero_serie: '',
      informacoes_garantia: '',
      responsavel: '',
      proxima_manutencao: '',
      notas: ''
    };
    try {
      const response = await axios.post(API_URL, newAsset);
      if (response.status === 201) {  // Verifica se a resposta indica criação bem-sucedida
        setData(currentData => [response.data, ...currentData]); // Adiciona o novo ativo no início da lista
      }
    } catch (error) {
      console.error("Erro ao adicionar ativo", error);
    }
  }, [setData]);  // `setData` deve ser incluído nas dependências do useCallback

  const handleDeleteAsset = useCallback(async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setData(currentData => currentData.filter(asset => asset.id !== id));
    } catch (error) {
      console.error("Erro ao deletar ativo", error);
    }
  }, []);

  const columns = useMemo(() => [
    {
      Header: t('name'),
      accessor: 'nome',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
    },
    {
      Header: t('category'),
      accessor: 'categoria',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
    },
    {
      Header: t('status'),
      accessor: 'status',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
    },
    {
      Header: t('acquisition_date'),
      accessor: 'data_aquisicao',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
    },
    {
      Header: t('acquisition_cost'),
      accessor: 'custo_aquisicao',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
    },
    {
      Header: t('current_value'),
      accessor: 'valor_atual',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
    },
    {
      Header: t('supplier'),
      accessor: 'fornecedor',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
    },
    {
      Header: t('serial_number'),
      accessor: 'numero_serie',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
    },
    {
      Header: t('warranty_information'),
      accessor: 'informacoes_garantia',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
    },
    {
      Header: t('responsible'),
      accessor: 'responsavel',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
     },
     {
      Header: t('next_maintenance'),
      accessor: 'proxima_manutencao',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
     },
     {
      Header: t('notes'),
      accessor: 'notas',
      Cell: ({ row, value, column }) => (
        <EditableCell
          value={value}
          row={row}
          column={column}
          updateMyData={(rowIndex, columnId, newValue) =>
            updateMyData(rowIndex, columnId, newValue)
          }
          theme={theme}
        />
      ),
     },
     {
      Header: t('actions'),
      id: 'actions',
      Cell: ({ row }) => (
        <button onClick={() => handleDeleteAsset(row.original.id)}
          className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      )
     }
     ], [updateMyData, handleDeleteAsset, theme, t]);
     
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
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
            <div className="loading loading-dots loading-lg"></div>
          </div>
        ) : (
          <>
            <Header />
            <div className="container mx-auto px-4 py-4 mt-2">
  <h1 className="text-3xl font-bold mb-4 py-5">{t('asset_management')}</h1>
  <div className="mb-4 flex justify-between items-center">
    <button onClick={handleAddAsset} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-400'}`}>
      <PlusCircle className="mr-2" size={20} /> {t('add_asset')}
    </button>
    <div className="relative w-64">
      <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`} />
      <input
        type="text"
        placeholder={t('search') + '...'}
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
                  <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
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
                    {t('page')} {' '}
                    <strong>
                      {pageIndex + 1} {t('of')} {Math.ceil(data.length / pageSize)}
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
                        {t('show')} {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default AtivosPage;
