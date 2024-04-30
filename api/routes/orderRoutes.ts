// routes/orderRoutes.ts

import { Router } from 'express';
import * as OrderController from '../../api/controllers/OrderController';

const router = Router();

router.get('/', OrderController.getAllOrders);
router.get('/:id', OrderController.getOrderById);
router.post('/', OrderController.createOrder);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);

export default router;
