const errors = require('../utility/errors');

function handleBadJsonRequest(err, req, res, next) {
  if(err) {
    res.status(400).send(errors.badJsonRequest);
  } else {
    next();
  }
}

module.exports.handleBadJsonRequest = handleBadJsonRequest;