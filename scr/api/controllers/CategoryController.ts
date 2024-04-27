import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../models/Category'; // Ajuste o caminho conforme necessário

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categoryRepository = getRepository(Category);
        const categories = await categoryRepository.find();
        res.json(categories);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const categoryRepository = getRepository(Category);
        const category = await categoryRepository.findOne(req.params.id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).send('Category not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try {
        const categoryRepository = getRepository(Category);
        const newCategory = categoryRepository.create(req.body);
        await categoryRepository.save(newCategory);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const categoryRepository = getRepository(Category);
        const category = await categoryRepository.findOne(req.params.id);
        if (category) {
            categoryRepository.merge(category, req.body);
            const results = await categoryRepository.save(category);
            res.json(results);
        } else {
            res.status(404).send('Category not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const categoryRepository = getRepository(Category);
        const results = await categoryRepository.delete(req.params.id);
        if (results.affected === 0) {
            res.status(404).send('Category not found');
        } else {
            res.status(204).send(); // No content to send back
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
