import { getRepository } from 'typeorm';
import { Category } from '../api/models/Category';

export class CategoryService {

  private categoryRepository = getRepository(Category);

  async getCategoryById(id: number): Promise<Category | undefined> {
    return await this.categoryRepository.findOne({ where: { id } }); 
  }  

  async getAllCategories(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async createCategory(categoryData: Category): Promise<Category> {
    const category = this.categoryRepository.create(categoryData);
    await this.categoryRepository.save(category);
    return category;
  }

  async updateCategory(id: number, categoryData: Partial<Category>): Promise<Category> {
    const category = await this.getCategoryById(id);
    if(!category) {
      throw new Error("Category not found");
    }
    this.categoryRepository.merge(category, categoryData);
    return await this.categoryRepository.save(category); 
  }

  async deleteCategory(id: number): Promise<void> {
    const result = await this.categoryRepository.delete(id);
    if(result.affected === 0) {
      throw new Error("Category not found");
    }
  }

}
