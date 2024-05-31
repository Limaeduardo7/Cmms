const express = require('express');
const next = require('next');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: parseInt(process.env.PG_PORT, 10),
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined
});

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(express.json());

    // Função para manuseio de erros
    const handleError = (res, err, message) => {
        console.error(message, err.message);
        res.status(500).json({ error: message, details: err.message });
    };

    // Rotas para renderização de páginas Next.js
    server.get('/ativos', (req, res) => app.render(req, res, '/ativos'));
    server.get('/ativos1', (req, res) => app.render(req, res, '/ativos1'));

    // Nova rota para API de teste `assets1`
    server.get('/api/assets1', async (req, res) => {
        try {
            const result = await pool.query('SELECT * FROM ativos');
            res.status(200).json(result.rows);
        } catch (err) {
            handleError(res, err, 'Erro ao buscar ativos (assets1)');
        }
    });

    server.post('/api/assets1', async (req, res) => {
        const { nome, valor, categoria } = req.body;
        try {
            const result = await pool.query(
                'INSERT INTO ativos(nome, valor_atual, categoria) VALUES($1, $2, $3) RETURNING *',
                [nome, valor, categoria]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            handleError(res, err, 'Erro ao criar ativo (assets1)');
        }
    });

    server.put('/api/assets1/:id', async (req, res) => {
        const { id } = req.params;
        const { nome, valor, categoria, status, localizacao, responsavel, data_aquisicao, proxima_manutencao, custo_aquisicao, valor_atual, numero_serie } = req.body;

        console.log('Recebido para atualização (assets1):', req.body); // Log para depuração

        try {
            const result = await pool.query(
                'UPDATE ativos SET nome = $1, valor_atual = $2, categoria = $3, status = $4, localizacao = $5, responsavel = $6, data_aquisicao = $7, proxima_manutencao = $8, custo_aquisicao = $9, valor_atual = $10, numero_serie = $11 WHERE id = $12 RETURNING *',
                [nome, valor, categoria, status, localizacao, responsavel, data_aquisicao, proxima_manutencao, custo_aquisicao, valor_atual, numero_serie, id]
            );
            if (result.rowCount > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Ativo não encontrado (assets1)');
            }
        } catch (err) {
            handleError(res, err, 'Erro ao atualizar ativo (assets1)');
        }
    });

    server.delete('/api/assets1/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await pool.query('DELETE FROM ativos WHERE id = $1 RETURNING *', [id]);
            if (result.rowCount > 0) {
                res.status(204).send();
            } else {
                res.status(404).send('Ativo não encontrado (assets1)');
            }
        } catch (err) {
            handleError(res, err, 'Erro ao deletar ativo (assets1)');
        }
    });

    // Função auxiliar para criar rotas CRUD
    const createCrudRoutes = (routePath, columns) => {
        server.get(`/api/${routePath}`, async (req, res) => {
            try {
                const result = await pool.query(`SELECT * FROM ${routePath}`);
                res.status(200).json(result.rows);
            } catch (err) {
                handleError(res, err, `Erro ao buscar ${routePath}`);
            }
        });

        server.post(`/api/${routePath}`, async (req, res) => {
            const values = columns.map(col => req.body[col]);
            const placeholders = columns.map((_, i) => `$${i + 1}`).join(', ');
            try {
                const result = await pool.query(
                    `INSERT INTO ${routePath}(${columns.join(', ')}) VALUES(${placeholders}) RETURNING *`,
                    values
                );
                res.status(201).json(result.rows[0]);
            } catch (err) {
                handleError(res, err, `Erro ao criar ${routePath}`);
            }
        });

        server.put(`/api/${routePath}/:id`, async (req, res) => {
            const { id } = req.params;
            const setClause = columns.map((col, i) => `${col} = $${i + 1}`).join(', ');
            const values = [...columns.map(col => req.body[col]), id];
            try {
                const result = await pool.query(
                    `UPDATE ${routePath} SET ${setClause} WHERE id = $${columns.length + 1} RETURNING *`,
                    values
                );
                if (result.rowCount > 0) {
                    res.json(result.rows[0]);
                } else {
                    res.status(404).send(`${routePath.slice(0, -1)} não encontrado`);
                }
            } catch (err) {
                handleError(res, err, `Erro ao atualizar ${routePath}`);
            }
        });

        server.delete(`/api/${routePath}/:id`, async (req, res) => {
            const { id } = req.params;
            try {
                const result = await pool.query(`DELETE FROM ${routePath} WHERE id = $1 RETURNING *`, [id]);
                if (result.rowCount > 0) {
                    res.status(204).send();
                } else {
                    res.status(404).send(`${routePath.slice(0, -1)} não encontrado`);
                }
            } catch (err) {
                handleError(res, err, `Erro ao deletar ${routePath}`);
            }
        });
    };

    // Definindo rotas CRUD
    createCrudRoutes('ordens_servicos', ['descricao', 'tipo_manutencao', 'status', 'data_criacao', 'data_agendamento', 'data_conclusao', 'prioridade', 'responsavel', 'custo_estimado', 'notas']);
    createCrudRoutes('responsaveis', ['nome', 'telefone', 'ativo', 'departamento', 'cargo', 'email']);
    createCrudRoutes('planejamento', ['data_agendamento', 'hora_agendamento', 'tipo_manutencao', 'status', 'responsavel', 'detalhes', 'notas', 'ativo_relacionado_id']);
    createCrudRoutes('categorias', ['nome', 'descricao', 'ativo']);

    // Rota para dados da dashboard
    server.get('/api/dashboardData', async (req, res) => {
        try {
            const costDataResult = await pool.query('SELECT * FROM custos_mensais');
            const efficiencyDataResult = await pool.query('SELECT * FROM eficiencia_equipamentos');
            const response = {
                costData: {
                    labels: costDataResult.rows.map(row => row.mes),
                    datasets: [{
                        label: 'Custos por Mês',
                        data: costDataResult.rows.map(row => row.valor),
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)'
                    }]
                },
                efficiencyData: {
                    labels: efficiencyDataResult.rows.map(row => row.mes),
                    datasets: [{
                        label: 'Eficiência',
                        data: efficiencyDataResult.rows.map(row => row.taxa),
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)'
                    }]
                }
            };
            res.status(200).json(response);
        } catch (err) {
            handleError(res, err, 'Erro ao buscar dados para a dashboard');
        }
    });

    // Handle all other routes with Next.js
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
