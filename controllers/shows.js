const { filterShows } = require('../services/shows');
const { IsValidJsonString } = require('../utility/utility');
const errors = require('../utility/errors');

function getShows(req, res) {
  // If the body string is not a valid JSON string then respond with an error.
  if(!IsValidJsonString(req.body)) {
    res.status(400).json(errors.badJsonRequest);
    return;
  }

  // If the payload property does not exist then send back an error.
  if(!req.body.hasOwnProperty('payload')) {
    res.status(400).json(errors.noPayloadProperty);
    return;
  }

  const shows = req.body.payload;

  if(!Array.isArray(shows)) {
    res.status(400).json(errors.payloadNotArray);
    return;
  }

  const filteredResponse = filterShows(shows);
  res.status(200).json(filteredResponse);
}
module.exports.getShows = getShows;