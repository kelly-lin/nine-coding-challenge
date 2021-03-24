const { IsValidJsonString } = require('../../utility/utility');

test('valid JSON string returns true', () => {
  const string = '{ "name": "kelly" }';
  expect(IsValidJsonString(string)).toBeTruthy();
});

test('empty JSON string returns true', () => {
  const string = '{}';
  expect(IsValidJsonString(string)).toBeTruthy();
});

test('invalid JSON string returns false', () => {
  const string = 'abcd';
  expect(IsValidJsonString(string)).toBeFalsy();
});

test('empty string returns false', () => {
  const string = '';
  expect(IsValidJsonString(string)).toBeFalsy();
});

test('undefined returns false', () => {
  const string = undefined;
  expect(IsValidJsonString(string)).toBeFalsy();
});

test('null returns true', () => {
  const string = null;
  expect(IsValidJsonString(string)).toBeTruthy();
});