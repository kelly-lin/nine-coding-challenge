const fs = require('fs');
const path = require('path');
const shows = require('../../controllers/shows');

const sampleDataFilepath = path.join(__dirname, 'data/sample_request.json');
const sampleResponseFilepath = path.join(__dirname, 'data/sample_response.json');

let sampleData = fs.readFileSync(sampleDataFilepath);
let sampleResponse = fs.readFileSync(sampleResponseFilepath);

const data = JSON.parse(sampleData);
const expectedResponse = JSON.parse(sampleResponse);

const ret = shows.GetShows(data.payload);

test('shows to match sample response', () => {
  expect(ret).toEqual(expectedResponse);
});