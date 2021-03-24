const errors = {
  badJsonRequest: {
    error: "Could not decode request: JSON parsing failed"
  },
  noPayloadProperty: {
    error: "JSON request object does not have \"payload\" property"
  },
  payloadNotArray: {
    error: "payload is not an array"
  }
}
module.exports = errors;