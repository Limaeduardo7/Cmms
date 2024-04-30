import express from 'express';
import cors from 'cors';
import assetRoutes from './api/routes/assetRoutes';  // Confira novamente se o caminho está correto

const app = express();

// Middleware para registrar cada requisição recebida
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();  // Não esqueça de chamar next() para passar ao próximo middleware
});

app.use(cors());
app.use(express.json());

// Adicionando rotas de assets com log para verificar se a rota está sendo acessada
app.use('/api/assets', (req, res, next) => {
    console.log('Accessed the asset route prefix');
    next();
}, assetRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
