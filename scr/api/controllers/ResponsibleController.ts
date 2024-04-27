import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Responsible } from '../models/Responsible'; // Certifique-se de ajustar o caminho conforme sua estrutura de diretório

// Obtém todos os responsáveis
export const getAllResponsibles = async (req: Request, res: Response) => {
    try {
        const responsibleRepository = getRepository(Responsible);
        const responsibles = await responsibleRepository.find();
        res.json(responsibles);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Obtém um responsável pelo ID
export const getResponsibleById = async (req: Request, res: Response) => {
    try {
        const responsibleRepository = getRepository(Responsible);
        const responsible = await responsibleRepository.findOne(req.params.id);
        if (responsible) {
            res.json(responsible);
        } else {
            res.status(404).send('Responsible not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Cria um novo responsável
export const createResponsible = async (req: Request, res: Response) => {
    try {
        const responsibleRepository = getRepository(Responsible);
        const newResponsible = responsibleRepository.create(req.body);
        await responsibleRepository.save(newResponsible);
        res.status(201).json(newResponsible);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Atualiza um responsável existente
export const updateResponsible = async (req: Request, res: Response) => {
    try {
        const responsibleRepository = getRepository(Responsible);
        const responsible = await responsibleRepository.findOne(req.params.id);
        if (responsible) {
            responsibleRepository.merge(responsible, req.body);
            const results = await responsibleRepository.save(responsible);
            res.json(results);
        } else {
            res.status(404).send('Responsible not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Deleta um responsável
export const deleteResponsible = async (req: Request, res: Response) => {
    try {
        const responsibleRepository = getRepository(Responsible);
        const result = await responsibleRepository.delete(req.params.id);
        if (result.affected === 0) {
            res.status(404).send('Responsible not found');
        } else {
            res.status(204).send(); // No content to send back
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
