/**
 * @jest-environment jsdom
 */

import { numberAdd } from "../lib";

// 0  false '' [] null {} undefined

test('numberAdd test', () => {
  expect(numberAdd(1, 2)).toBe(3);
  expect(numberAdd(1, 2.0)).toBe(3);
  expect(numberAdd(1.0, 2.0)).toBe(3);
  // 1.111+2.0 = 3.1109999999999998
  expect(numberAdd(1.111, 2.0)).toBe(3.111);
  // 0.1+0.2 = 0.30000000000000004
  expect(numberAdd(0.1, 0.2)).toBe(0.3);
  expect(numberAdd(1.111, null)).toBe(0);
  expect(numberAdd(null, null)).toBe(0);
})
