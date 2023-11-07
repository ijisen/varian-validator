/**
 * @jest-environment jsdom
 */

import { numberDivide } from "../lib";

// 0  false '' [] null {} undefined

test('numberDivide test', () => {
  expect(numberDivide(1, 2)).toBe(0.5);
  expect(numberDivide(-1, 2)).toBe(-0.5);
  expect(numberDivide(-1, null)).toBe(0);
  expect(numberDivide(1, 0)).toBe(new TypeError('除数不能为0'));
})
