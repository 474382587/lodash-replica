import typeAssertion from './typeAssertion';

test('it should fail', () => {
  expect(() => {
    typeAssertion('', 'array');
  }).toThrow('Please check your input, the input your entered is not "array"');
});

test('it should fail', () => {
  expect(() => {
    typeAssertion([], 'object');
  }).toThrow('Please check your input, the input your entered is not "object"');
});
