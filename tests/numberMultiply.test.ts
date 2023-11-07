/**
 * @jest-environment jsdom
 */

import { numberMultiply } from "../lib";

// 0  false '' [] null {} undefined

test('numberMultiply test', () => {
  expect(numberMultiply(1, 0)).toBe(0);
  expect(numberMultiply(1, 2)).toBe(2);
  expect(numberMultiply(-1, 2)).toBe(-2);
  expect(numberMultiply(-1, null)).toBe(0);
  expect(numberMultiply(-1, -2)).toBe(2);
  // 0.1*0.2 = 0.020000000000000004
  expect(numberMultiply(-0.1, -.2)).toBe(0.02);
  expect(numberMultiply(-0.1, .2)).toBe(-0.02);
  expect(numberMultiply(.1, .2)).toBe(0.02);
})
