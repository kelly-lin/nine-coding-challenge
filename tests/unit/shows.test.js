const { request, expectedResponse } = require('../fixtures/shows');
const shows = require('../../services/shows');

const response = shows.filterShows(request.payload);

test('shows to match sample response', () => {
  expect(response).toEqual(expectedResponse);
});