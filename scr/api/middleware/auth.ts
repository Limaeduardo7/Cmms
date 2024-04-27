import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Configurações secretas (devem ser movidas para variáveis de ambiente)
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Gerar um token JWT
export const generateToken = (userId: number) => {
    return jwt.sign({ id: userId }, JWT_SECRET, {
        expiresIn: '24h' // o token expira em 24 horas
    });
};

// Middleware para verificar o token JWT
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]; // Espera "Bearer [token]"

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Adiciona o payload do token ao objeto req
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

// Função para criptografar senha
export const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

// Função para verificar a senha
export const validatePassword = async (enteredPassword: string, storedPasswordHash: string) => {
    return bcrypt.compare(enteredPassword, storedPasswordHash);
};
