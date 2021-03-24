const shows = require('../../services/shows');
const { 
  sampleRequest,
  sampleResponse,
  requestNullProps 
} = require('../fixtures/shows');

test('shows to match sample response', () => {
  const response = shows.filterShows(sampleRequest.payload);

  expect(response).toEqual(sampleResponse);
});

test('properties which do not exist in the show returns null values', () => {
  const expected = {
    image: null,
    slug: null,
    title: "Sea Patrol"
  }

  const showDetails = shows.getShowDetails(requestNullProps.payload[0]);
  
  expect(showDetails).toEqual(expected);
});

test('properties that exist returns the correct details', () => {
  const expected = {
    image: "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
    slug: "show/16kidsandcounting",
    title: "16 Kids and Counting"
  }

  const showDetails = shows.getShowDetails(sampleRequest.payload[0]);
  
  expect(showDetails).toEqual(expected);
});

test('null object returns all null property values', () => {
  const expected = {
    image: null,
    slug: null,
    title: null
  }

  const showDetails = shows.getShowDetails({});
  
  expect(showDetails).toEqual(expected);
});