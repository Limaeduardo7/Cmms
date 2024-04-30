import { getRepository } from 'typeorm';
import { Asset } from '../api/models/Asset';

export class AssetService {

  private assetRepository = getRepository(Asset);

  async getAssetById(id: number): Promise<Asset | undefined> {
    return await this.assetRepository.findOne({ where: { id } });
  }  

  async getAllAssets(): Promise<Asset[]> {
    return await this.assetRepository.find(); 
  }

  async createAsset(assetData: Asset): Promise<Asset> {
    const newAsset = this.assetRepository.create(assetData);
    await this.assetRepository.save(newAsset);
    return newAsset;
  }

  async updateAsset(id: number, assetData: Partial<Asset>): Promise<Asset> {
    const asset = await this.getAssetById(id);
    if(!asset) {
      throw new Error("Asset not found");
    }
    this.assetRepository.merge(asset, assetData);
    return await this.assetRepository.save(asset);
  }

  async deleteAsset(id: number): Promise<void> {
    const result = await this.assetRepository.delete(id);
    if(result.affected === 0) {
      throw new Error("Asset not found"); 
    }
  }

}
