const express = require('express');
const showsRouter = require('./routes/shows');
const errorHandlers = require('./middleware/error-handlers');

const app = express();

// Middleware.
app.use(express.json());

// Middleware for catching for JSON errors in requests.
app.use(errorHandlers.handleBadJsonRequest);

// Routes.
app.use('/', showsRouter);

module.exports = app;