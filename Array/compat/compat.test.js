import compat from './compat';

test('given []', () => {
  expect(compat([])).toEqual([]);
});

test("given [123, 0, 0, 0, 123, 321, false, '']", () => {
  expect(compat([123, 0, 0, 0, 123, 321, false, ''])).toEqual([123, 123, 321]);
});

test('given [false, \'\', undefined, "", 0, "0", \'0\', null, NaN]', () => {
  expect(compat([false, '', undefined, '', 0, '0', '0', null, NaN])).toEqual([
    '0',
    '0',
  ]);
});
