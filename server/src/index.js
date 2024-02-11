import express from 'express';
import { PORT } from './config.js'
import indexRoutes from '../routes/index.routes.js';
import morgan from 'morgan';

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);

app.listen(PORT);
console.log("Server is running on PORT " + PORT)