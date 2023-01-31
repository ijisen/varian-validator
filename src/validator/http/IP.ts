'use strict';

import { setErrorCodeLang } from '@/utils/_index';
import { isFQDNRes } from "./typings.d";

/**
 * Error codes and messages.
 * */
const errorCodes = {
  zh: {
    IP_SEGMENT_ERR_FORMAT: 'IP 格式错误',
    IP_SEGMENT_NOT_SUPPORT_V6: '不支持IPV6网段',
    IP_SEGMENT_ERR_TYPE: 'IP类型不一致',
    IP_SEGMENT_ERR_SEGMENT: 'IP 不在同一网段',
    IP_SEGMENT_ERR_RANGE: '结束IP不能小于起始IP',
    IP_SEGMENT_SUCCESS: '校验成功',
  },
  en: {
    IP_SEGMENT_ERR_FORMAT: 'Incorrect IP format',
    IP_SEGMENT_NOT_SUPPORT_V6: 'Does not support IPV6',
    IP_SEGMENT_ERR_TYPE: 'IP types are inconsistent',
    IP_SEGMENT_ERR_SEGMENT: 'IP is not in the same network segment',
    IP_SEGMENT_ERR_RANGE: 'The ending IP cannot be smaller than the starting IP',
    IP_SEGMENT_SUCCESS: 'Verification succeeded',
  },
};


// IPv4 Segment
const v4Seg = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
const v4Str = `(${v4Seg}[.]){3}${v4Seg}`;
const IPv4Reg = new RegExp(`^${v4Str}$`);

// IPv6 Segment
const v6Seg = '(?:[0-9a-fA-F]{1,4})';
const IPv6Reg = new RegExp(
  '^(' +
  `(?:${v6Seg}:){7}(?:${v6Seg}|:)|` +
  `(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|` +
  `(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|` +
  `(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|` +
  `(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|` +
  `(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|` +
  `(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|` +
  `(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:))` +
  ')(%[0-9a-zA-Z-.:]{1,})?$',
);

export const isIPv4 = (s: string) => {
  return IPv4Reg.test(s);
};

export const isIPv6 = (s: string) => {
  return IPv6Reg.test(s);
};

export const isIP = (s: string) => {
  if(isIPv4(s)) return 4;
  if(isIPv6(s)) return 6;
  return 0;
};

/**
 * IPV4 是否为同一网段判定
 * */
export const isSameIPV4Segment = (startIP: string, endIP: string, lang?: any): isFQDNRes => {
  let errorMessage = errorCodes[setErrorCodeLang(lang)];

  if(!isIPv4(startIP) || !isIPv4(endIP)) {
    /** IP 格式错误 */
    return {
      success: false,
      message: errorMessage.IP_SEGMENT_ERR_FORMAT,
    };
  }

  /** IPV4 拆分 */
  const ipV4Split = (ip: string) => {
    // ip = 255.255.255.1
    const slice_index = ip.lastIndexOf('.');
    return {
      // 255.255.255
      ip_prefix: ip.slice(0, slice_index),
      // 1
      ip_suffix: ip.slice(slice_index + 1),
    };
  };
  const start_ip = ipV4Split(startIP);
  const end_ip = ipV4Split(endIP);
  let msg_tips = {
    success: false,
    // IP 不在同一网段
    message: errorMessage.IP_SEGMENT_ERR_SEGMENT,
  };
  if(start_ip.ip_prefix === end_ip.ip_prefix) {
    if(start_ip.ip_suffix > end_ip.ip_suffix) {
      // 起始IP不能大于结束IP
      msg_tips.message = errorMessage.IP_SEGMENT_ERR_RANGE;
    } else {
      msg_tips = {
        success: true,
        // 校验成功,
        message: errorMessage.IP_SEGMENT_SUCCESS,
      };
    }
  }
  return msg_tips;
};
