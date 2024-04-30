import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente

if (!process.env.PG_USER || !process.env.PG_HOST || !process.env.PG_DATABASE || !process.env.PG_PASSWORD || !process.env.PG_PORT) {
    console.error('Database configuration is incomplete.');
    process.exit(1);
}

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: parseInt(process.env.PG_PORT || "5432"),
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined
});

const connectToDatabase = async () => {
    try {
        const res = await pool.query('SELECT 1'); // Simples teste de conexão
        console.log('Connected to the PostgreSQL database:', res.rows);
    } catch (err) {
        console.error('Failed to connect to the PostgreSQL database', err);
        process.exit(1);
    }
};

export { pool, connectToDatabase };
