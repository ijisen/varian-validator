/**
 * @jest-environment jsdom
 */

import {isNumber} from "../src/utils/isNumber";

test('isNumber to judge', () => {
  expect(isNumber(1)).toBe(true)
  expect(isNumber(0)).toBe(true);
  expect(isNumber(-2, true)).toBe(true);
  expect(isNumber('0')).toBe(true);
  expect(isNumber('20')).toBe(true);
  expect(isNumber(-2)).toBe(false)
  expect(isNumber(true)).toBe(false);
  expect(isNumber(false)).toBe(false);
  expect(isNumber('0a')).toBe(false);
  expect(isNumber('20a')).toBe(false);
  expect(isNumber('')).toBe(false);
  expect(isNumber(' ')).toBe(false);
  expect(isNumber([])).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber(null)).toBe(false);
});
