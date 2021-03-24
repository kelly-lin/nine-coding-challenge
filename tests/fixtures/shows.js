const fs = require('fs');
const path = require('path');

const sampleRequestFilepath = path.join(__dirname, 'data/sample_request.json');
const sampleResponseFilepath = path.join(__dirname, 'data/sample_response.json');

const sampleRequest = fs.readFileSync(sampleRequestFilepath);
const sampleResponse = fs.readFileSync(sampleResponseFilepath);

const request = JSON.parse(sampleRequest);
const expectedResponse = JSON.parse(sampleResponse);

module.exports = {
  request,
  expectedResponse
}