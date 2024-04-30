import { getRepository } from 'typeorm';
import { Category } from '../api/models/Category';

export class CategoryService {
    private categoryRepository = getRepository(Category);

    // Método para buscar uma categoria por ID
    async getCategoryById(id: number): Promise<Category | undefined> {
        return await this.categoryRepository.findOne({ where: { id: id } });
    }

    // Método para atualizar uma categoria
    async updateCategory(id: number, categoryData: Partial<Category>): Promise<Category> {
        const category = await this.categoryRepository.findOne({ where: { id: id } });
        if (!category) {
            throw new Error('Category not found');
        }
        this.categoryRepository.merge(category, categoryData);
        return await this.categoryRepository.save(category);
    }

    // Método para deletar uma categoria
    async deleteCategory(id: number): Promise<void> {
        const result = await this.categoryRepository.delete(id);
        if (result.affected === 0) {
            throw new Error('Category not found');
        }
    }
}
