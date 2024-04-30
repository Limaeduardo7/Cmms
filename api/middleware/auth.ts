import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// As configurações secretas devem ser obrigatoriamente definidas nas variáveis de ambiente para segurança.
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined. Set it in your environment variables.');
}

/**
 * Gera um token JWT para um usuário.
 * @param {number} userId - O ID do usuário para quem o token será gerado.
 * @returns {string} O token JWT gerado.
 */
export const generateToken = (userId: number): string => {
    return jwt.sign({ id: userId }, JWT_SECRET, {
        expiresIn: '24h' // Define o token para expirar em 24 horas.
    });
};

/**
 * Middleware para verificar o token JWT e autenticar o usuário.
 * @param {Request} req - O objeto de solicitação do Express.
 * @param {Response} res - O objeto de resposta do Express.
 * @param {NextFunction} next - A função next do middleware do Express.
 */
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    // Permite o uso de um token de desenvolvimento fixo em ambientes de desenvolvimento
    if (process.env.NODE_ENV === 'development' && process.env.DEVELOPMENT_JWT_TOKEN) {
        try {
            const user = jwt.verify(process.env.DEVELOPMENT_JWT_TOKEN, JWT_SECRET);
            req.user = user;
            return next();
        } catch (error) {
            return res.status(403).json({ message: 'Invalid development token.' });
        }
    }

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

/**
 * Criptografa uma senha usando bcrypt.
 * @param {string} password - A senha a ser criptografada.
 * @returns {Promise<string>} A senha criptografada.
 */
export const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

/**
 * Verifica se a senha inserida coincide com o hash armazenado.
 * @param {string} enteredPassword - A senha inserida pelo usuário.
 * @param {string} storedPasswordHash - O hash armazenado da senha para verificação.
 * @returns {Promise<boolean>} Verdadeiro se as senhas coincidirem, falso caso contrário.
 */
export const validatePassword = async (enteredPassword: string, storedPasswordHash: string): Promise<boolean> => {
    return bcrypt.compare(enteredPassword, storedPasswordHash);
};
