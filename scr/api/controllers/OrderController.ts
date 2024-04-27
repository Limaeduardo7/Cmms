import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Order } from '../models/Order'; // Certifique-se de ajustar o caminho conforme sua estrutura de diretório

// Obtém todas as ordens de serviço
export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orderRepository = getRepository(Order);
        const orders = await orderRepository.find();
        res.json(orders);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Obtém uma ordem de serviço pelo ID
export const getOrderById = async (req: Request, res: Response) => {
    try {
        const orderRepository = getRepository(Order);
        const order = await orderRepository.findOne(req.params.id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).send('Order not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Cria uma nova ordem de serviço
export const createOrder = async (req: Request, res: Response) => {
    try {
        const orderRepository = getRepository(Order);
        const newOrder = orderRepository.create(req.body);
        await orderRepository.save(newOrder);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Atualiza uma ordem de serviço existente
export const updateOrder = async (req: Request, res: Response) => {
    try {
        const orderRepository = getRepository(Order);
        const order = await orderRepository.findOne(req.params.id);
        if (order) {
            orderRepository.merge(order, req.body);
            const results = await orderRepository.save(order);
            res.json(results);
        } else {
            res.status(404).send('Order not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Deleta uma ordem de serviço
export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const orderRepository = getRepository(Order);
        const result = await orderRepository.delete(req.params.id);
        if (result.affected === 0) {
            res.status(404).send('Order not found');
        } else {
            res.status(204).send(); // No content to send back
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
