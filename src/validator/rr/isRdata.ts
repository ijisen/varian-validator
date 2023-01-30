/**
 * 域名解析记录公共校验
 *
 * */

import isMX from "./isMX";
import isTXT from "./isTXT";
import isNS from "./isNS";
import isCAA from "./isCAA";
import isSRV from "./isSRV";
import isA from "@/validator/rr/isA";
import isAAAA from "@/validator/rr/isAAAA";
import isCNAME from "@/validator/rr/isCNAME";
import { isFQDNRes } from "../http/typings.d";

export const enum EnumRecordType {
  A = "A",
  AAAA = "AAAA",
  NS = "NS",
  MX = "MX",
  CNAME = "CNAME",
  CAA = "CAA",
  SRV = "SRV",
  TXT = "TXT"
}

/**
 * 域名解析记录公共校验
 * @param[str] 校验值
 * @param[type] 校验类型
 * */
export const isRdata = (str: any,
                        type: EnumRecordType,
                        lang?: string): isFQDNRes => {
  switch (type.toUpperCase()) {
    case EnumRecordType.A:
      return isA(str, lang);
    case EnumRecordType.AAAA:
      return isAAAA(str, lang);
    case EnumRecordType.CAA:
      return isCAA(str, lang);
    case EnumRecordType.CNAME:
      return isCNAME(str, lang);
    case EnumRecordType.MX:
      return isMX(str, lang);
    case EnumRecordType.NS:
      return isNS(str, lang);
    case EnumRecordType.SRV:
      return isSRV(str, lang);
    case EnumRecordType.TXT:
      return isTXT(str, { lang });
    default:
      return { success: false, message: '未知记录类型！', regValue: str };
  }
};
