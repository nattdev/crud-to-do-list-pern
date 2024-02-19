import express from 'express';
import { PORT } from './config.js'
import indexRoutes from '../routes/index.routes.js';
import tasksRoutes from '../routes/tasks.routes.js';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);
app.use(tasksRoutes)

app.listen(PORT);
console.log("Server is running on PORT " + PORT)

module.exports = app;
