/**
 * @jest-environment jsdom
 */

import { isPort } from "../lib";

// 0  false '' [] null {} undefined

test('PORT validate test', () => {
  expect(isPort(undefined)).toBe(false);
  expect(isPort(null)).toBe(false);
  expect(isPort(true)).toBe(false);
  expect(isPort(false)).toBe(false);
  expect(isPort('undefined')).toBe(false);
  expect(isPort('null')).toBe(false);
  expect(isPort(0)).toBe(false);
  expect(isPort(1)).toBe(true);
  expect(isPort(65535)).toBe(true);
  expect(isPort(65536)).toBe(false);
  expect(isPort(25)).toBe(true);
  expect(isPort(25.01)).toBe(false);
  expect(isPort(-1)).toBe(false);
  expect(isPort('0')).toBe(false);
  expect(isPort('1')).toBe(true);
  expect(isPort('65535')).toBe(true);
  expect(isPort('65536')).toBe(false);
  expect(isPort('25')).toBe(true);
  expect(isPort('25.01')).toBe(false);
  expect(isPort('-1')).toBe(false);
  expect(isPort([])).toBe(false);
  expect(isPort({})).toBe(false);
  expect(isPort('')).toBe(false);
})
