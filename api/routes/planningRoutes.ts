// routes/planningRoutes.ts

import { Router } from 'express';
import * as PlanningController from '../../api/controllers/PlanningController';

const router = Router();

router.get('/', PlanningController.getAllPlannings);
router.get('/:id', PlanningController.getPlanningById);
router.post('/', PlanningController.createPlanning);
router.put('/:id', PlanningController.updatePlanning);
router.delete('/:id', PlanningController.deletePlanning);

export default router;
