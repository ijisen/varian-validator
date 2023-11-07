/**
 * @jest-environment jsdom
 */

import { isIP } from "../lib";

// 0  false '' [] null {} undefined

test('IP validate test', () => {
  expect(isIP('ABCD:EF01:2345:6789:ABCD:EF01:2345:6789')).toBe(6);
  expect(isIP('192.168.1.255')).toBe(4);
  // @ts-ignore
  expect(isIP(undefined)).toBe(0);
  // @ts-ignore
  expect(isIP(0)).toBe(0);
  // @ts-ignore
  expect(isIP([])).toBe(0);
  // @ts-ignore
  expect(isIP({})).toBe(0);
  // @ts-ignore
  expect(isIP(null)).toBe(0);
  expect(isIP('')).toBe(0);
})
