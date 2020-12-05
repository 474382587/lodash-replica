import flatten from './flatten';

test('it should pass', () => {
  expect(flatten([[2], [1]])).toEqual([2, 1]);
});
