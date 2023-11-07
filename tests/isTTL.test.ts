/**
 * @jest-environment jsdom
 */

import { isTTL } from "../lib";

// 0  false '' [] null {} undefined

test('isTTL validate test', () => {
  expect(isTTL(1)).toBe(true);
  expect(isTTL(1, 1, 2)).toBe(true);
  expect(isTTL(-1)).toBe(false);
  expect(isTTL(-1, 1, 2)).toBe(false);
  expect(isTTL(3, 1, 2)).toBe(false);
  expect(isTTL(3, 1, 65536)).toBe(true);
  expect(isTTL(65536, 1, 65536)).toBe(false);
  expect(isTTL(undefined)).toBe(false);
  expect(isTTL(0)).toBe(true);
})
