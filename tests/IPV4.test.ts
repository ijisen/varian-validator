/**
 * @jest-environment jsdom
 */

import { isIPv4 } from "../lib";

// 0  false '' [] null {} undefined

test('IP validate test', () => {
  expect(isIPv4('192.168.1.2')).toBe(true);
  expect(isIPv4('192.168.1.255')).toBe(true);
  expect(isIPv4('192.168.1.256')).toBe(false);
  expect(isIPv4('256.168.1.1')).toBe(false);
  expect(isIPv4('a.168.1.1')).toBe(false);
  expect(isIPv4('1.168.1.1.1')).toBe(false);
  // @ts-ignore
  expect(isIPv4(undefined)).toBe(false);
  // @ts-ignore
  expect(isIPv4(0)).toBe(false);
  // @ts-ignore
  expect(isIPv4([])).toBe(false);
  // @ts-ignore
  expect(isIPv4({})).toBe(false);
  // @ts-ignore
  expect(isIPv4(null)).toBe(false);
  expect(isIPv4('')).toBe(false);
})
