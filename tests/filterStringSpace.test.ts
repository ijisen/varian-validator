import { filterStringSpace } from "../lib";

test('filterStringSpace test', () => {
  expect(filterStringSpace(null)).toStrictEqual('');
  expect(filterStringSpace(undefined)).toStrictEqual('');
  expect(filterStringSpace(5)).toStrictEqual('');
  expect(filterStringSpace('')).toStrictEqual('');
  expect(filterStringSpace('          ')).toStrictEqual('');
  expect(filterStringSpace('  a      a  ', true)).toStrictEqual('aa');
  expect(filterStringSpace('  a      a  ')).toStrictEqual('a      a');
  expect(filterStringSpace('  a    ')).toStrictEqual('a');
})
