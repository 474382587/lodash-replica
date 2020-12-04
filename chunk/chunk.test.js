import { chunk } from './chunk';

describe('Chunk', () => {
  // test('Given a non-array, it should throw an Error', () => {
  //   expect(() => {
  //     chunk(1);
  //   }).toThrow('Please check your input, the input your entered is not "array');
  // });
  // test('Given a non-array, it should throw an Error', () => {
  //   expect(() => {
  //     chunk('1');
  //   }).toThrow('Please check your input, the input your entered is not "array');
  // });
  // test('Given a non-array, it should throw an Error', () => {
  //   expect(() => {
  //     chunk(undefined);
  //   }).toThrow('Please check your input, the input your entered is not "array');
  // });
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
