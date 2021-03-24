const fs = require('fs');
const path = require('path');

const sampleRequestFilepath = path.join(__dirname, 'data/sample_request.json');
const sampleResponseFilepath = path.join(__dirname, 'data/sample_response.json');

const sampleRequestStream = fs.readFileSync(sampleRequestFilepath);
const sampleResponseStream = fs.readFileSync(sampleResponseFilepath);

const sampleRequest = JSON.parse(sampleRequestStream);
const sampleResponse = JSON.parse(sampleResponseStream);

const requestNullProps = {
  payload: [
    {
      drm: true,
      slug: null,
      title: "Sea Patrol",
      tvChannel: "Channel 9",
      episodeCount: 1
    }
  ],
  skip: 0,
  take: 10,
  totalRecords: 75
}

module.exports = {
  sampleRequest,
  sampleResponse,
  requestNullProps
}