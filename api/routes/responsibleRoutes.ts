// routes/responsibleRoutes.ts

import { Router } from 'express';
import * as ResponsibleController from '../../api/controllers/ResponsibleController';

const router = Router();

router.get('/', ResponsibleController.getAllResponsibles);
router.get('/:id', ResponsibleController.getResponsibleById);
router.post('/', ResponsibleController.createResponsible);
router.put('/:id', ResponsibleController.updateResponsible);
router.delete('/:id', ResponsibleController.deleteResponsible);

export default router;
