import React, { useState, useMemo, useCallback } from 'react';
import { useTable, useSortBy, useGlobalFilter, Column, Row, CellProps } from 'react-table';
import { Trash2, PlusCircle, Search, ChevronUp, ChevronDown } from 'lucide-react';
import Header from '../components/Header'; // Seu cabeçalho global

interface IData {
  id: number;
  name: string;
  category: string;
  status: string;
}

const EditableCell: React.FC<CellProps<IData> & { updateMyData: (index: number, id: string, value: any) => void }> = ({
  value: initialValue,
  row,
  column,
  updateMyData,
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateMyData(row.index, column.id, value);
  };

  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="w-full p-1 text-left bg-gray-100"
      style={{ fontSize: '0.875rem' }}
    />
  );
};

const AtivosPage: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);

  const updateMyData = useCallback((rowIndex: number, columnId: string, value: any) => {
    setData(oldData =>
      oldData.map((row, index) =>
        index === rowIndex ? { ...row, [columnId]: value } : row
      )
    );
  }, []);

  const columns: Column<IData>[] = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'Nome',
      accessor: 'name',
      Cell: EditableCell,
    },
    {
      Header: 'Categoria',
      accessor: 'category',
      Cell: EditableCell,
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: EditableCell,
    },
    {
      Header: () => null,
      id: 'actions',
      Cell: ({ row }) => (
        <button onClick={() => setData(current => current.filter(item => item.id !== row.original.id))}
          className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      ),
    },
  ], [updateMyData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  }, [setGlobalFilter]);

  const handleAddAsset = useCallback(() => {
    setData([{ id: data.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1, name: '', category: '', status: '' }, ...data]);
  }, [data]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-4 mt-14">
        <h1 className="text-3xl font-bold mb-4 py-5">Gerenciamento de Ativos</h1>
        <div className="mb-4 flex justify-between items-center">
          <button onClick={handleAddAsset}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <PlusCircle className="mr-2" size={20} /> Adicionar Ativo
          </button>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar..."
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border rounded focus:outline-none focus:border-blue-300"
            />
          </div>
        </div>
        <div className="overflow-x-auto bg-white rounded shadow">
          <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center">
                        {column.render('Header')}
                        <span className="ml-1">
                          {column.isSorted
                            ? (column.isSortedDesc ? <ChevronDown size={16} /> : <ChevronUp size={16} />)
                            : null}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
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
