import { Router } from 'express';
import * as AssetController from '../controllers/AssetController';
import { authenticate } from '../middleware/auth'; // Importe o middleware de autenticação

const router = Router();

// Rota para listar todos os ativos
router.get('/', authenticate, AssetController.getAllAssets); // Adicione autenticação às rotas conforme necessário

// Rota para obter um ativo específico pelo ID
router.get('/:id', authenticate, AssetController.getAssetById);

// Rota para criar um novo ativo
router.post('/', authenticate, AssetController.createAsset);

// Rota para atualizar um ativo existente
router.put('/:id', authenticate, AssetController.updateAsset);

// Rota para deletar um ativo
router.delete('/:id', authenticate, AssetController.deleteAsset);

export default router;
