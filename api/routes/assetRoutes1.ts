// src/routes/assetRoutes.ts
import { Router } from 'express';
import { getAllAssets, getAssetById, createAsset, updateAsset, deleteAsset } from '../controllers/AssetController';

const router = Router();

router.get('/assets', getAllAssets);
router.get('/assets/:id', getAssetById);
router.post('/assets', createAsset);
router.put('/assets/:id', updateAsset);
router.delete('/assets/:id', deleteAsset);

export default router;
