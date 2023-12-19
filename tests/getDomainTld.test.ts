import { getDomainTld } from "../lib";

test('getDomainTld test', () => {
  expect(getDomainTld('baidu.com')).toStrictEqual('com');
  expect(getDomainTld(undefined)).toStrictEqual('');
  expect(getDomainTld('baidu.com.cn')).toStrictEqual('com.cn');
  expect(getDomainTld('baidu.com.cn.net')).toStrictEqual('.com.cn');
})
