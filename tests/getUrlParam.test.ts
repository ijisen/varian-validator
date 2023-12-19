/**
 * @jest-environment jsdom
 */

import { getUrlParam } from "../lib";

// 0  false '' [] null {} undefined

test('getUrlParam test', () => {
  expect(getUrlParam('id',"id=12764")).toBe('12764');
})
