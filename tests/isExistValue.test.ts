import { isExistValue } from "../lib";

// number => 0 -0
// boolean => false
// string => '' ' '
// undefined
// Object  => {}
// Array => []
// null
test('isExistValue validate test', () => {
  // Number
  expect(isExistValue(0)).toStrictEqual(true);
  expect(isExistValue(0, 'string')).toStrictEqual(0);
  expect(isExistValue(-0)).toStrictEqual(true);
  expect(isExistValue(-0, 'string')).toStrictEqual(-0);
  // Boolean
  expect(isExistValue(false)).toStrictEqual(true);
  expect(isExistValue(false, 'string')).toStrictEqual(false);
  expect(isExistValue(true)).toStrictEqual(true);
  expect(isExistValue(true, 'string')).toStrictEqual(true);
  // String
  expect(isExistValue('-')).toStrictEqual(true);
  expect(isExistValue('-', 'string')).toStrictEqual('-');
  expect(isExistValue(' ')).toStrictEqual(true);
  expect(isExistValue(' ', 'string')).toStrictEqual(' ');
  expect(isExistValue('0')).toStrictEqual(true);
  expect(isExistValue('0', 'string')).toStrictEqual('0');

  expect(isExistValue('')).toStrictEqual(false);
  expect(isExistValue('', 'string')).toStrictEqual('N/A');

  expect(isExistValue('123123')).toStrictEqual(true);
  expect(isExistValue('N/A', 'string')).toStrictEqual('N/A');
  expect(isExistValue('n/a', 'string')).toStrictEqual('n/a');

  // undefined
  expect(isExistValue(undefined)).toStrictEqual(false);
  expect(isExistValue(undefined, 'string')).toStrictEqual('N/A');

  // Object
  expect(isExistValue({})).toStrictEqual(true);
  expect(isExistValue({}, 'string')).toStrictEqual({});
  expect(isExistValue({ str: 'aaa.cc' })).toStrictEqual(true);
  expect(isExistValue({ str: 'aaa.cc' }, 'string')).toStrictEqual({ str: 'aaa.cc' });

  // Array
  expect(isExistValue([])).toStrictEqual(true);
  expect(isExistValue([], 'string')).toStrictEqual([]);
  expect(isExistValue([1])).toStrictEqual(true);
  expect(isExistValue([1], 'string')).toStrictEqual([1]);

  // null
  expect(isExistValue(null)).toStrictEqual(false);
  expect(isExistValue(null, 'string')).toStrictEqual('N/A');
  expect(isExistValue(null, 'string', '-')).toStrictEqual('-');
  expect(isExistValue(null, 'string', 'n/a')).toStrictEqual('n/a');
  expect(isExistValue(null, 'string', '')).toStrictEqual('');
  expect(isExistValue(null, 'string', false)).toStrictEqual(false);
  expect(isExistValue(null, 'string', 0)).toStrictEqual(0);

})
