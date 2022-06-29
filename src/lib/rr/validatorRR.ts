import isDomain from '../http/isDomain'
import isMX from "./isMX";
import { isIPv4, isIPv6 } from "@/lib/http/IP";
import isTXT from "@/lib/rr/isTXT";
import isNS from "@/lib/rr/isNS";
import isCAA from "@/lib/rr/isCAA";
import isSRV from "@/lib/rr/isSRV";

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

// is rdata
export const isRdata = (str: string, type: EnumRecordType) => {
  switch (type.toUpperCase()) {
    case EnumRecordType.A:
      return isIPv4(str);
    case EnumRecordType.AAAA:
      return isIPv6(str);
    case EnumRecordType.CNAME:
      return isDomain(str);
    case EnumRecordType.MX:
      return isMX(str);
    case EnumRecordType.TXT:
      return isTXT(str);
    case EnumRecordType.NS:
      return isNS(str);
    case EnumRecordType.CAA:
      return isCAA(str);
    case EnumRecordType.SRV:
      return isSRV(str);
    default:
      return false;
  }
};
