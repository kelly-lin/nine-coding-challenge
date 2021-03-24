const { filterShows } = require('../services/shows');
const { IsValidJsonString } = require('../utility/utility');
const errors = require('../utility/errors');

function getShows(req, res) {
  if(IsValidJsonString(req.body)) {
    // If the payload property does not exist then send back an error.
    if(!req.body.hasOwnProperty('payload')) {
      res.status(400).json(errors.noPayloadProperty);
    } else {
      const shows = req.body.payload;

      if(!Array.isArray(shows)) {
        res.status(400).json(errors.payloadNotArray);
        return;
      }

      const filteredResponse = filterShows(shows);
  
      res.status(200).json(filteredResponse);
    }
  } else {
    res.status(400).json(errors.badJsonRequest);
  }
}
module.exports.getShows = getShows;