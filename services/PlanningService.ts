import { getRepository } from 'typeorm';
import { Planning } from '../api/models/Planning';

export class PlanningService {

  private planningRepository = getRepository(Planning);

  async getPlanningById(id: number): Promise<Planning | undefined> {
    return await this.planningRepository.findOne({ 
      where: { id },
      relations: ['assets']
    });
  }

  async getAllPlannings(): Promise<Planning[]> {
    return await this.planningRepository.find({
      relations: ['assets'] 
    });
  }

  async createPlanning(planningData: Planning): Promise<Planning> {
    const planning = this.planningRepository.create(planningData);
    await this.planningRepository.save(planning);
    return planning; 
  }

  async updatePlanning(id: number, planningData: Partial<Planning>): Promise<Planning> {
    const planning = await this.getPlanningById(id);
    if(!planning) {
      throw new Error("Planning not found");
    }
    this.planningRepository.merge(planning, planningData);
    return await this.planningRepository.save(planning);
  }

  async deletePlanning(id: number): Promise<void> {
    const result = await this.planningRepository.delete(id);
    if(result.affected === 0) {
      throw new Error("Planning not found");
    }
  }

}
