/**
 * @jest-environment jsdom
 */

import { numberToDecimal2 } from "../lib";

// 0  false '' [] null {} undefined

test('numberToDecimal2 test', () => {
  expect(numberToDecimal2(2.11111)).toBe(2.11);
  expect(numberToDecimal2(1.11111)).toBe(1.11);
  expect(numberToDecimal2(1.00000000008)).toBe(1.00);
})
