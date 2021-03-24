const app = require('../../app');
const request = require('supertest');
const { 
  sampleRequest, 
  sampleResponse 
} = require('../fixtures/shows');
const errors = require('../../utility/errors');

test('Sample request returns expected response', async () => {
  const data = await request(app).post('/').send(sampleRequest);

  expect(data.body).toEqual(sampleResponse);
  expect(data.status).toBe(200);
});

test('Invalid json string request returns error', async () => {
  const bodyContent = 'abcd';
  const expectedBody = errors.noPayloadProperty;

  const data = await request(app).post('/').send(bodyContent);

  expect(data.body).toEqual(expectedBody);
  expect(data.status).toBe(400);
});

test('Valid json object has no payload property returns error', async () => {
  const bodyContent = { name: 'kelly' };
  const expectedBody = errors.noPayloadProperty;

  const data = await request(app).post('/').send(bodyContent);
  
  expect(data.body).toEqual(expectedBody);
  expect(data.status).toBe(400);
});

test('Valid json string request returns no payload error', async () => {
  const bodyContent = '{ "name": "kelly" }';
  const expectedBody = errors.noPayloadProperty;

  const data = await request(app).post('/').send(bodyContent);

  expect(data.body).toEqual(expectedBody);
  expect(data.status).toBe(400);
});

test('Payload which is not an array throws error', async () => {
  const bodyContent = {
    payload: {
      name: 'kelly'
    }
  };

  const expectedBody = errors.payloadNotArray;

  const data = await request(app).post('/').send(bodyContent);

  expect(data.body).toEqual(expectedBody);
  expect(data.status).toBe(400);
});

test('Invalid json returns bad Json request error', async () => {
  const expectedBody = errors.badJsonRequest;

  const data = await request(app).post('/')
    .set('Content-Type', 'application/json')
    .send('bodyContent');

  expect(data.body).toEqual(expectedBody);
  expect(data.status).toBe(400);
});