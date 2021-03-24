const errors = {
  badJsonRequest: {
    error: "Could not decode request: JSON parsing failed"
  },
  noPayloadProperty: {
    error: "JSON request object does not have \"payload\" property"
  }
}
module.exports = errors;