/**
 * @jest-environment jsdom
 */

import { isNS } from '../lib';

// 0  false '' [] null {} undefined

test('isNS validate test', () => {
  expect(isNS('ABCD:EF01:2345:6789:ABCD:EF01:2345:6789')).toStrictEqual({
    'message': 'NS记录的记录值为域名形式（如: ns1.example.com）',
    'regValue': 'ABCD:EF01:2345:6789:ABCD:EF01:2345:6789',
    'success': false
  });
  expect(isNS('192.168.1.255')).toStrictEqual({
    'message': 'NS记录的记录值为域名形式（如: ns1.example.com）',
    'regValue': '192.168.1.255',
    'success': false
  });
  // @ts-ignore
  expect(isNS(undefined)).toStrictEqual({
    'message': 'NS记录的记录值为域名形式（如: ns1.example.com）',
    'regValue': '',
    'success': false
  });
  // @ts-ignore
  expect(isNS(0)).toStrictEqual({
    'message': 'NS记录的记录值为域名形式（如: ns1.example.com）',
    'regValue': '',
    'success': false
  });
  // @ts-ignore
  expect(isNS([])).toStrictEqual({
    'message': 'NS记录的记录值为域名形式（如: ns1.example.com）',
    'regValue': '',
    'success': false
  });
  // @ts-ignore
  expect(isNS({})).toStrictEqual({
    'message': 'NS记录的记录值为域名形式（如: ns1.example.com）',
    'regValue': '',
    'success': false
  });
  // @ts-ignore
  expect(isNS(null)).toStrictEqual({
    'message': 'NS记录的记录值为域名形式（如: ns1.example.com）',
    'regValue': '',
    'success': false
  });
  expect(isNS('')).toStrictEqual({
    'message': 'NS记录的记录值为域名形式（如: ns1.example.com）',
    'regValue': '',
    'success': false
  });
});
