import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Planning } from '../models/Planning'; // Certifique-se de ajustar o caminho conforme sua estrutura de diretório

// Obtém todos os planejamentos
export const getAllPlannings = async (req: Request, res: Response) => {
    try {
        const planningRepository = getRepository(Planning);
        const plannings = await planningRepository.find();
        res.json(plannings);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Obtém um planejamento pelo ID
export const getPlanningById = async (req: Request, res: Response) => {
    try {
        const planningRepository = getRepository(Planning);
        const planning = await planningRepository.findOne(req.params.id);
        if (planning) {
            res.json(planning);
        } else {
            res.status(404).send('Planning not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Cria um novo planejamento
export const createPlanning = async (req: Request, res: Response) => {
    try {
        const planningRepository = getRepository(Planning);
        const newPlanning = planningRepository.create(req.body);
        await planningRepository.save(newPlanning);
        res.status(201).json(newPlanning);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Atualiza um planejamento existente
export const updatePlanning = async (req: Request, res: Response) => {
    try {
        const planningRepository = getRepository(Planning);
        const planning = await planningRepository.findOne(req.params.id);
        if (planning) {
            planningRepository.merge(planning, req.body);
            const results = await planningRepository.save(planning);
            res.json(results);
        } else {
            res.status(404).send('Planning not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Deleta um planejamento
export const deletePlanning = async (req: Request, res: Response) => {
    try {
        const planningRepository = getRepository(Planning);
        const result = await planningRepository.delete(req.params.id);
        if (result.affected === 0) {
            res.status(404).send('Planning not found');
        } else {
            res.status(204).send(); // No content to send back
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
