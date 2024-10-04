const express = require('express');
const indexRoutes = require('../routes/index.routes.js');
const tasksRoutes = require('../routes/tasks.routes.js');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);
app.use(tasksRoutes)

app.listen(PORT);
console.log("Server is running on PORT " + PORT)

module.exports = app;
