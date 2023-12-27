/**
 * A记录【Address】 => 将域名指向一个IPV4地址
 *  使用场景: 添加 A 记录可实现将域名指向 IP 地址。
 *  主机记录：一般是指子域名的前缀（如需创建子域名为www.dns-example.com, 主机记录输入 www；如需实现dns-example.com，主机记录输入 @）。
 *  解析线路：选择 默认 （默认为必选项，如未设置会导致部分用户无法访问 )。
 *  记录值：记录值为 IP 地址，填写 IPv4 地址。
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */
import filterStringSpace from "@/utils/filterStringSpace";
import setErrorCodeLang from "@/utils/setErrorCodeLang";
import { isIPv4 } from '@/validator/http/IP';

import { isFQDNRes } from "../http/typings.d";

/**
 * Error codes and messages.
 * */
const errorCodes = {
  'zh-CN': {
    FORMAT_ERROR: 'A记录的记录值为IPv4形式（如: 10.10.10.10）',
  },
  'en-US': {
    FORMAT_ERROR: 'The A record value is in the IPv4 format (eg: 10.10.10.10).',
  },
};

const isA = (str: string, lang?: string): isFQDNRes => {
  // 过滤全部空格
  let regValue = filterStringSpace(str);
  let error_code = errorCodes[setErrorCodeLang(lang)];
  const success = !!regValue && isIPv4(regValue);
  return {
    success,
    message: success ? '' : error_code.FORMAT_ERROR,
    regValue,
  };
};

export default isA;
