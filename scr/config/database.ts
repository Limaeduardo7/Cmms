import { Pool } from 'pg';

// Crie uma instância de Pool usando as configurações do seu banco de dados.
// Essas configurações podem ser extraídas de variáveis de ambiente para maior segurança e flexibilidade.
const pool = new Pool({
    user: process.env.PG_USER,     // nome do usuário do seu banco de dados
    host: process.env.PG_HOST,     // host do servidor de banco de dados
    database: process.env.PG_DATABASE, // nome do banco de dados
    password: process.env.PG_PASSWORD, // senha do banco de dados
    port: parseInt(process.env.PG_PORT || "5432"), // porta, padrão é 5432
    ssl: {
        rejectUnauthorized: false // necessário para algumas configurações de nuvem, ajuste conforme necessário
    }
});

// Função para conectar ao banco de dados
const connectToDatabase = async () => {
    try {
        await pool.connect(); // tenta conectar ao banco de dados
        console.log('Connected to the PostgreSQL database');
    } catch (err) {
        console.error('Failed to connect to the PostgreSQL database', err);
        process.exit(1); // sai do processo se não conseguir conectar
    }
};

// Exporta o pool para ser utilizado em outros módulos
export { pool, connectToDatabase };
