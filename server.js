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

    server.get('/api/assets', async (req, res) => {
        const result = await pool.query('SELECT * FROM ativos');
        console.log("Fetching assets:", result.rows);  // Debug log
        res.status(200).json(result.rows);
    });

    server.post('/api/assets', async (req, res) => {
        const { nome, valor, categoria } = req.body;  // Inclua 'categoria' como um campo esperado
        if (!categoria) {
            return res.status(400).json({ error: 'Categoria é obrigatória.' });  // Validação básica
        }
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
    

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
