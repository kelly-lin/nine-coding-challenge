const express = require('express');
const showsRouter = require('./routes/shows');
const errors = require('./utility/errors');

const app = express();

// Middleware
app.use(express.json());

// Middleware for catching for JSON errors in requests.
app.use((err, req, res, next) => {
  if(err) {
    res.status(400).send(errors.badJsonRequest);
  } else {
    next();
  }
})

// Routes
app.use('/', showsRouter);

module.exports = app;