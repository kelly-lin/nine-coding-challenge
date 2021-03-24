const express = require('express');
const app = express();
const showsRouter = require('./routes/shows');
const errors = require('./utility/errors');

app.use(express.json());
app.use((err, req, res, next) => {
  if(err) {
    res.status(400).send(errors.badJsonRequest);
  } else {
    next();
  }
})

app.use('/', showsRouter);

module.exports = app;