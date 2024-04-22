const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 8000;

// Usando o banco de dados SQLite em memória
const db = new sqlite3.Database(':memory:');

// Middlewares
app.use(cors());  // Habilita CORS para todos os domínios
app.use(bodyParser.json());  // Permite que o servidor entenda JSON no corpo das requisições

// Cria a tabela de ativos
db.serialize(() => {
  db.run(`CREATE TABLE assets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    categoria TEXT,
    status TEXT,
    data_aquisicao TEXT,
    custo_aquisicao REAL,
    valor_atual REAL,
    fornecedor TEXT,
    numero_serie TEXT,
    informacoes_garantia TEXT,
    responsavel TEXT,
    proxima_manutencao TEXT,
    notas TEXT
  )`);
});

// GET - Recuperar todos os ativos
app.get('/api/assets', (req, res) => {
  db.all("SELECT * FROM assets", [], (err, rows) => {
    if (err) {
      res.status(400).send({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// POST - Criar um novo ativo
app.post('/api/assets', (req, res) => {
  const { nome, categoria, status, data_aquisicao, custo_aquisicao, valor_atual, fornecedor, numero_serie, informacoes_garantia, responsavel, proxima_manutencao, notas } = req.body;
  const sql = `
    INSERT INTO assets (nome, categoria, status, data_aquisicao, custo_aquisicao, valor_atual, fornecedor, numero_serie, informacoes_garantia, responsavel, proxima_manutencao, notas)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [nome, categoria, status, data_aquisicao, custo_aquisicao, valor_atual, fornecedor, numero_serie, informacoes_garantia, responsavel, proxima_manutencao, notas];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).send({ error: err.message });
      return;
    }
    res.json({
      message: "Ativo adicionado com sucesso",
      data: req.body,
      id: this.lastID
    });
  });
});

// PUT - Atualizar um ativo existente
app.put('/api/assets/:id', (req, res) => {
  const { id } = req.params;
  const { nome, categoria, status, data_aquisicao, custo_aquisicao, valor_atual, fornecedor, numero_serie, informacoes_garantia, responsavel, proxima_manutencao, notas } = req.body;
  const sql = `
    UPDATE assets SET
    nome = ?, categoria = ?, status = ?, data_aquisicao = ?, custo_aquisicao = ?, valor_atual = ?, fornecedor = ?, numero_serie = ?, informacoes_garantia = ?, responsavel = ?, proxima_manutencao = ?, notas = ?
    WHERE id = ?
  `;
  const params = [nome, categoria, status, data_aquisicao, custo_aquisicao, valor_atual, fornecedor, numero_serie, informacoes_garantia, responsavel, proxima_manutencao, notas, id];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).send({ error: err.message });
      return;
    }
    res.json({
      message: "Ativo atualizado com sucesso",
      data: req.body,
      changes: this.changes
    });
  });
});

// DELETE - Deletar um ativo
app.delete('/api/assets/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM assets WHERE id = ?';

  db.run(sql, id, function (err) {
    if (err) {
      res.status(400).send({ error: err.message });
      return;
    }
    res.json({ message: "Ativo deletado com sucesso", changes: this.changes });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
