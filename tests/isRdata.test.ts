/**
 * @jest-environment jsdom
 */


import { EnumRecordType, isRdata } from '../lib'

test("isRdata validate test", () => {
  expect(isRdata('192.168.1.1', EnumRecordType.A)).toBe(true)
})
