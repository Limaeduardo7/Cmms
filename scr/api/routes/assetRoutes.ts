import { Router } from 'express';
import * as AssetController from '../controllers/AssetController';

const router = Router();

// Rota para listar todos os ativos
router.get('/', AssetController.getAllAssets);

// Rota para obter um ativo específico pelo ID
router.get('/:id', AssetController.getAssetById);

// Rota para criar um novo ativo
router.post('/', AssetController.createAsset);

// Rota para atualizar um ativo existente
router.put('/:id', AssetController.updateAsset);

// Rota para deletar um ativo
router.delete('/:id', AssetController.deleteAsset);

export default router;
