/**
 * @jest-environment jsdom
 */

import { isIPv6 } from "../lib";

// 0  false '' [] null {} undefined

test('IP validate test', () => {
  expect(isIPv6('ABCD:EF01:2345:6789:ABCD:EF01:2345:6789')).toBe(true);
  expect(isIPv6('a.168.1.1')).toBe(false);
  expect(isIPv6('1.168.1.1.1')).toBe(false);
  // @ts-ignore
  expect(isIPv6(undefined)).toBe(false);
  // @ts-ignore
  expect(isIPv6(0)).toBe(false);
  // @ts-ignore
  expect(isIPv6([])).toBe(false);
  // @ts-ignore
  expect(isIPv6({})).toBe(false);
  // @ts-ignore
  expect(isIPv6(null)).toBe(false);
  expect(isIPv6('')).toBe(false);
})
