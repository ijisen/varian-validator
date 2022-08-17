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
export const isRdata = (str: any, type: EnumRecordType.A) => {
  if(typeof str !== "string") {
    return false
  }
  switch (type.toUpperCase()) {
    case EnumRecordType.A:
      return isA(str);
    case EnumRecordType.AAAA:
      return isAAAA(str);
    case EnumRecordType.CAA:
      return isCAA(str);
    case EnumRecordType.CNAME:
      return isCNAME(str);
    case EnumRecordType.MX:
      return isMX(str);
    case EnumRecordType.NS:
      return isNS(str);
    case EnumRecordType.SRV:
      return isSRV(str);
    case EnumRecordType.TXT:
      return isTXT(str);
    default:
      return false;
  }
};
