import { chunk } from './chunk';

describe('Chunk', () => {
  test('Given a non-array, it should return an empty array', () => {
    expect(chunk(1)).toEqual([]);
  });
  test('Given an Array [0, 1, 2, 3] and a size 2', () => {
    expect(chunk([0, 1, 2, 3], 2)).toEqual([
      [0, 1],
      [2, 3],
    ]);
  });
});
