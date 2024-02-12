import { Router } from 'express';
import { getTask, getTasks } from '../controllers/tasks.controllers.js';

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks/:id', (req, res) => { res.send("Create Task:id:" + req.params.id) });

router.put('/tasks/:id', (req, res) => { res.send("Update Task:id:" + req.params.id) });

router.delete('/tasks/:id', (req, res) => { res.send("Delete Task:id:" + req.params.id) });

export default router;