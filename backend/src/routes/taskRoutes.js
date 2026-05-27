import { Router } from 'express';
import TaskController from '../controllers/taskController.js';

const router = Router();

router.post('/tasks', TaskController.createTask);
router.get('/tasks', TaskController.getTasks);

export default router;