import { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import Layout from '../components/Layout';

const AtivosPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/assets/');
                const result = await response.json();
                console.log("Dados recebidos:", result); // Debug: Verificar dados recebidos
                setData(result);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        fetchData();
    }, []);

    const columns = useMemo(
        () => [
            { Header: 'Nome', accessor: 'nome' },
            { Header: 'Categoria', accessor: 'categoria' },
            { Header: 'Status', accessor: 'status' },
            {
                Header: 'Ações',
                id: 'actions',
                Cell: ({ row }) => (
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                )
            }
        ],
        []
    );

    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <Layout title="Ativos">
            <h1>Ativos</h1>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Layout>
    );
};

export default AtivosPage;
