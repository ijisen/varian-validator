/**
 * @jest-environment jsdom
 */

import { numberSubtract } from "../lib";

// 0  false '' [] null {} undefined

test('numberSubtract test', () => {
  expect(numberSubtract(1, 2)).toBe(-1);
  // 3.10000 - 3.14159 = -0.041589999999999794
  expect(numberSubtract(3.10000, 3.14159)).toBe(-0.04159);
  expect(numberSubtract(1, null)).toBe(0);
})
