// src/controllers/assetController.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Asset } from '../models/Asset';

export const getAllAssets = async (req: Request, res: Response) => {
  try {
    const assetRepository = getRepository(Asset);
    const assets = await assetRepository.find();
    res.json(assets);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAssetById = async (req: Request, res: Response) => {
  try {
    const assetRepository = getRepository(Asset);
    const asset = await assetRepository.findOne(req.params.id);
    if (asset) {
      res.json(asset);
    } else {
      res.status(404).send('Asset not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createAsset = async (req: Request, res: Response) => {
  try {
    const assetRepository = getRepository(Asset);
    const newAsset = assetRepository.create(req.body);
    await assetRepository.save(newAsset);
    res.status(201).json(newAsset);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateAsset = async (req: Request, res: Response) => {
  try {
    const assetRepository = getRepository(Asset);
    const asset = await assetRepository.findOne(req.params.id);
    if (asset) {
      assetRepository.merge(asset, req.body);
      const results = await assetRepository.save(asset);
      res.json(results);
    } else {
      res.status(404).send('Asset not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteAsset = async (req: Request, res: Response) => {
  try {
    const assetRepository = getRepository(Asset);
    const results = await assetRepository.delete(req.params.id);
    if (results.affected === 0) {
      res.status(404).send('Asset not found');
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
