/**
 * @jest-environment jsdom
 */

import { throttle } from "../lib";

// 0  false '' [] null {} undefined
const demo = throttle((data:any) => {
  console.log(data);
  console.log('fn 节流执行了');
}, 1000)

test('debounce validate test', () => {
  expect(demo('ABCD:EF01:2345:6789:ABCD:EF01:2345:6789')).toBe(undefined);
})
