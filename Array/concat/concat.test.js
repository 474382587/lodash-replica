import concat from './concat';

test('given a non array, should throw', () => {
  expect(() => {
    concat('');
  }).toThrow();
});

test('given [] and nothing, should return []', () => {
  expect(concat([])).toEqual([]);
});

test('given [] and 1, should return [1]', () => {
  expect(concat([], 1)).toEqual([1]);
});

test('given [1] and 1, 3, "a",  should return [1]', () => {
  expect(concat([1], 1, 3, 'a')).toEqual([1, 1, 3, 'a']);
});
