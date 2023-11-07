import { isEmptyArray, } from "../lib";

test('isEmptyArray validate test', () => {
  expect(isEmptyArray(null)).toStrictEqual(true);
  expect(isEmptyArray(undefined)).toStrictEqual(true);
  expect(isEmptyArray({})).toStrictEqual(true);
  expect(isEmptyArray('')).toStrictEqual(true);
  expect(isEmptyArray(' ')).toStrictEqual(true);
  expect(isEmptyArray(0)).toStrictEqual(true);
  expect(isEmptyArray('123123')).toStrictEqual(true);
  expect(isEmptyArray({ str: 'aaa.cc' })).toStrictEqual(true);
  expect(isEmptyArray([])).toStrictEqual(true);
  expect(isEmptyArray([1])).toStrictEqual(false);

})
