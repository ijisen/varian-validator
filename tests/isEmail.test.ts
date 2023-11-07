/**
 * @jest-environment jsdom
 */

import { isEmail } from "../lib";

// 0  false '' [] null {} undefined

test('IP validate test', () => {
  expect(isEmail('aaa@cc.cc')).toBe(true);
  expect(isEmail(null)).toBe(false);
  expect(isEmail('dsfsdf@ccccc')).toBe(false);
})
