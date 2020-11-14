import { chunk } from './chunk';

describe('Chunk', () => {
  test('Given a non-array, it should return an empty array', () => {
    expect(chunk(1)).toEqual([]);
  });
  test('Given a non-array, it should return an empty array', () => {
    expect(chunk('1')).toEqual([]);
  });
  test('Given a non-array, it should return an empty array', () => {
    expect(chunk(undefined)).toEqual([]);
  });
  test('Given an empty array, it should return an empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });
  test('Given an Array [0, 1, 2, 3] and a size 2', () => {
    expect(chunk([0, 1, 2, 3], 2)).toEqual([
      [0, 1],
      [2, 3],
    ]);
  });
  test('Given an Array [0, 1, 2, 3] and a size 4', () => {
    expect(chunk([0, 1, 2, 3], 4)).toEqual([0, 1, 2, 3]);
  });
  test('Given an Array [0, 1, 2, 3] and a size 1', () => {
    expect(chunk([0, 1, 2, 3], 1)).toEqual([[0], [1], [2], [3]]);
  });
});

// TODO add more tests
