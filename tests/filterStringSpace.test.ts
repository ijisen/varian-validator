import { filterStringSpace } from "../lib";

test('filterStringSpace test', () => {
  expect(filterStringSpace(null)).toStrictEqual('');
  expect(filterStringSpace(undefined)).toStrictEqual('');
  expect(filterStringSpace('')).toStrictEqual('');
  expect(filterStringSpace('          ')).toStrictEqual('');
  expect(filterStringSpace('  a      a  ')).toStrictEqual(false);
})
