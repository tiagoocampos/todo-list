import { Router } from 'express';
import TaskController from '../controllers/taskController.js';
import validateTask from '../middlewares/validateTask.js';

const router = Router();

router.post('/tasks', validateTask, TaskController.createTask);
router.get('/tasks', TaskController.getTasks);

export default router;