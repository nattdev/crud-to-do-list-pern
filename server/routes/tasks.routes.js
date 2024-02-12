import { Router } from 'express';
import { createTask, getTask, getTasks, updateTask } from '../controllers/tasks.controllers.js';

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', (req, res) => { res.send("Delete Task:id:" + req.params.id) });

export default router;