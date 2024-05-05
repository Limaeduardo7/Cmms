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

    server.get('/ativos', (req, res) => {
        return app.render(req, res, '/ativos');
    });

    // Rotas para API de Ativos
    server.get('/api/assets', async (req, res) => {
        const result = await pool.query('SELECT * FROM ativos');
        res.status(200).json(result.rows);
    });

    server.post('/api/assets', async (req, res) => {
        const { nome, valor, categoria } = req.body;
        try {
            const result = await pool.query('INSERT INTO ativos(nome, valor_atual, categoria) VALUES($1, $2, $3) RETURNING *', [nome, valor, categoria]);
            res.status(201).json(result.rows[0]);
        } catch (err) {
            console.error("Erro ao inserir ativo:", err.message);
            res.status(500).json({ error: 'Erro ao criar ativo', details: err.message });
        }
    });

    server.put('/api/assets/:id', async (req, res) => {
        const { id } = req.params;
        const { nome, valor } = req.body;
        try {
            const result = await pool.query('UPDATE ativos SET nome = $1, valor_atual = $2 WHERE id = $3 RETURNING *', [nome, valor, id]);
            if (result.rowCount > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Ativo não encontrado');
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao atualizar ativo' });
        }
    });

    server.delete('/api/assets/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await pool.query('DELETE FROM ativos WHERE id = $1 RETURNING *', [id]);
            if (result.rowCount > 0) {
                res.status(204).send();
            } else {
                res.status(404).send('Ativo não encontrado');
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao deletar ativo' });
        }
    });


// Rotas para API de Ordens de Serviço
server.get('/api/ordens_servicos', async (req, res) => {
    const result = await pool.query('SELECT * FROM ordens_servicos');
    res.status(200).json(result.rows);
});

server.post('/api/ordens_servicos', async (req, res) => {
    const {
        descricao,
        tipo_manutencao,
        status,
        data_criacao,
        data_agendamento,
        data_conclusao,
        prioridade,
        responsavel,
        custo_estimado,
        notas
    } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO ordens_servicos (descricao, tipo_manutencao, status, data_criacao, data_agendamento, data_conclusao, prioridade, responsavel, custo_estimado, notas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
            [descricao, tipo_manutencao, status, data_criacao, data_agendamento, data_conclusao, prioridade, responsavel, custo_estimado, notas]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Erro ao inserir ordem de serviço:", err.message);
        res.status(500).json({ error: 'Erro ao criar ordem de serviço', details: err.message });
    }
});

server.put('/api/ordens_servicos/:id', async (req, res) => {
    const { id } = req.params;
    const {
        descricao,
        tipo_manutencao,
        status,
        data_agendamento,
        data_conclusao,
        prioridade,
        responsavel,
        custo_estimado,
        notas
    } = req.body;

    try {
        const result = await pool.query(
            'UPDATE ordens_servicos SET descricao = $1, tipo_manutencao = $2, status = $3, data_agendamento = $4, data_conclusao = $5, prioridade = $6, responsavel = $7, custo_estimado = $8, notas = $9 WHERE id = $10 RETURNING *',
            [descricao, tipo_manutencao, status, data_agendamento, data_conclusao, prioridade, responsavel, custo_estimado, notas, id]
        );
        if (result.rowCount > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Ordem de serviço não encontrada');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar ordem de serviço' });
    }
});

server.delete('/api/ordens_servicos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM ordens_servicos WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).send('Ordem de serviço não encontrada');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao deletar ordem de serviço' });
    }
});


// Rotas para API de Responsáveis
server.get('/api/responsaveis', async (req, res) => {
    const result = await pool.query('SELECT * FROM responsaveis');
    res.status(200).json(result.rows);
});

server.post('/api/responsaveis', async (req, res) => {
    const { nome, telefone, ativo, departamento, cargo, email } = req.body;
    try {
        const result = await pool.query('INSERT INTO responsaveis(nome, telefone, ativo, departamento, cargo, email) VALUES($1, $2, $3, $4, $5, $6) RETURNING *', 
            [nome, telefone, ativo, departamento, cargo, email]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Erro ao inserir responsável:", err.message);
        res.status(500).json({ error: 'Erro ao criar responsável', details: err.message });
    }
});

server.put('/api/responsaveis/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, telefone, ativo, departamento, cargo, email } = req.body;
    try {
        const result = await pool.query('UPDATE responsaveis SET nome = $1, telefone = $2, ativo = $3, departamento = $4, cargo = $5, email = $6 WHERE id = $7 RETURNING *', 
            [nome, telefone, ativo, departamento, cargo, email, id]);
        if (result.rowCount > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Responsável não encontrado');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar responsável' });
    }
});

server.delete('/api/responsaveis/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM responsaveis WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).send('Responsável não encontrado');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao deletar responsável' });
    }
});


// Rotas para API de Planejamento de Manutenções
server.get('/api/planejamento', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM planejamento');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Erro ao buscar planejamentos:", err.message);
        res.status(500).json({ error: 'Erro ao buscar planejamentos', details: err.message });
    }
});

server.post('/api/planejamento', async (req, res) => {
    const { data_agendamento, hora_agendamento, tipo_manutencao, status, responsavel, detalhes, notas, ativo_relacionado_id } = req.body;
    try {
        const result = await pool.query('INSERT INTO planejamento (data_agendamento, hora_agendamento, tipo_manutencao, status, responsavel, detalhes, notas, ativo_relacionado_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', 
        [data_agendamento, hora_agendamento, tipo_manutencao, status, responsavel, detalhes, notas, ativo_relacionado_id]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Erro ao adicionar planejamento:", err.message);
        res.status(500).json({ error: 'Erro ao criar planejamento', details: err.message });
    }
});

server.put('/api/planejamento/:id', async (req, res) => {
    const { id } = req.params;
    const { data_agendamento, hora_agendamento, tipo_manutencao, status, responsavel, detalhes, notas, ativo_relacionado_id } = req.body;
    try {
        const result = await pool.query('UPDATE planejamento SET data_agendamento = $1, hora_agendamento = $2, tipo_manutencao = $3, status = $4, responsavel = $5, detalhes = $6, notas = $7, ativo_relacionado_id = $8 WHERE id = $9 RETURNING *', 
        [data_agendamento, hora_agendamento, tipo_manutencao, status, responsavel, detalhes, notas, ativo_relacionado_id, id]);
        if (result.rowCount > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Planejamento não encontrado');
        }
    } catch (err) {
        console.error("Erro ao atualizar planejamento:", err);
        res.status(500).json({ error: 'Erro ao atualizar planejamento' });
    }
});

server.delete('/api/planejamento/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM planejamento WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).send('Planejamento não encontrado');
        }
    } catch (err) {
        console.error("Erro ao deletar planejamento:", err);
        res.status(500).json({ error: 'Erro ao deletar planejamento' });
    }
});


    // Configuração da rota para dados da dashboard
    server.get('/api/dashboardData', async (req, res) => {
        try {
            // Exemplo de consulta: adaptar conforme sua estrutura de dados
            const costDataResult = await pool.query('SELECT * FROM custos_mensais');
            const efficiencyDataResult = await pool.query('SELECT * FROM eficiencia_equipamentos');

            // Monta o objeto de resposta com dados para os gráficos
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
            console.error("Erro ao buscar dados para a dashboard:", err.message);
            res.status(500).json({ error: 'Erro ao buscar dados', details: err.message });
        }
    });

    // Rotas para API de Categorias
    server.get('/api/categorias', async (req, res) => {
        const result = await pool.query('SELECT * FROM categorias');
        res.status(200).json(result.rows);
    });

    server.post('/api/categorias', async (req, res) => {
        const { nome, descricao, ativo } = req.body;
        try {
            const result = await pool.query('INSERT INTO categorias(nome, descricao, ativo) VALUES($1, $2, $3) RETURNING *', [nome, descricao, ativo]);
            res.status(201).json(result.rows[0]);
        } catch (err) {
            console.error("Erro ao inserir categoria:", err.message);
            res.status(500).json({ error: 'Erro ao criar categoria', details: err.message });
        }
    });

    server.put('/api/categorias/:id', async (req, res) => {
        const { id } = req.params;
        const { nome, descricao, ativo } = req.body;
        try {
            const result = await pool.query('UPDATE categorias SET nome = $1, descricao = $2, ativo = $3 WHERE id = $4 RETURNING *', [nome, descricao, ativo, id]);
            if (result.rowCount > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Categoria não encontrada');
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao atualizar categoria' });
        }
    });

    server.delete('/api/categorias/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await pool.query('DELETE FROM categorias WHERE id = $1 RETURNING *', [id]);
            if (result.rowCount > 0) {
                res.status(204).send();
            } else {
                res.status(404).send('Categoria não encontrada');
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao deletar categoria' });
        }
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
