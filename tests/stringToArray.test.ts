import { stringToArray } from "../lib";

test('stringToArray test', () => {
  expect(stringToArray(null)).toStrictEqual([]);
  expect(stringToArray(undefined)).toStrictEqual([]);
  expect(stringToArray(false)).toStrictEqual([false]);
  expect(stringToArray({})).toStrictEqual([]);
  expect(stringToArray({ name: '1' })).toStrictEqual([]);
  expect(stringToArray(0)).toStrictEqual([0]);
  expect(stringToArray('')).toStrictEqual(['']);
  expect(stringToArray('          ')).toStrictEqual(['']);
  expect(stringToArray('  a      a  ')).toStrictEqual(['a      a']);
  expect(stringToArray('  a      a  ')).toStrictEqual(['a      a']);
  expect(stringToArray('  a    ')).toStrictEqual(['a']);
  expect(stringToArray('  a   ,  b ,  c  ')).toStrictEqual(["a   ", "  b ", "  c"]);
})
