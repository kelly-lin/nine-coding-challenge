function handleJsonError(err, req, res, next) {
  if(err) {
    res.status(400).send(errors.badJsonRequest);
  } else {
    next();
  }
}
module.exports.handleJsonError = handleJsonError;