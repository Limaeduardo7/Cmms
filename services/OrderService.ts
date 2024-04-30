import { getRepository } from 'typeorm';
import { Order } from '../api/models/Order'; // Ajuste o caminho conforme necessário

export class OrderService {
    private orderRepository = getRepository(Order);

    // Método para buscar todas as ordens de serviço
    async getAllOrders(): Promise<Order[]> {
        return await this.orderRepository.find();
    }

    // Método para buscar uma ordem de serviço por ID
    async getOrderById(id: number): Promise<Order | undefined> {
        return await this.orderRepository.findOne({ where: { id: id } });
    }

    // Método para criar uma nova ordem de serviço
    async createOrder(orderData: Partial<Order>): Promise<Order> {
        const order = this.orderRepository.create(orderData);
        return await this.orderRepository.save(order);
    }

    // Método para atualizar uma ordem de serviço
    async updateOrder(id: number, orderData: Partial<Order>): Promise<Order> {
        const order = await this.orderRepository.findOne({ where: { id: id } });
        if (!order) {
            throw new Error('Order not found');
        }
        this.orderRepository.merge(order, orderData);
        return await this.orderRepository.save(order);
    }

    // Método para deletar uma ordem de serviço
    async deleteOrder(id: number): Promise<void> {
        const result = await this.orderRepository.delete(id);
        if (result.affected === 0) {
            throw new Error('Order not found');
        }
    }
}
