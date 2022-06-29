declare const version: string;

interface ButtonProps {
    size: string;
}
declare const Button = "export default Button;";

/**
 * 标签语义化
 *
 * */
declare const escape: (str: any) => string | false;

interface IsFQDNConfig {
  // 是否包含TLD
  require_tld: boolean;
  // 是否允许包含下划线
  allow_underscores: boolean;
  // 是否允许 . 号结尾
  allow_trailing_dot: boolean;
  // 是否允许数字TLD号结尾
  allow_numeric_tld: boolean;
  // 是否允许配符 *
  allow_wildcard: boolean;
}

interface isFQDNRes {
  success: boolean;
  message: string;
}

declare function isFQDN(str: any, options?: Partial<IsFQDNConfig>, lang?: string): isFQDNRes;

declare const isDomain: (str: string) => isFQDNRes;

declare const enum EnumRecordType {
    A = "A",
    AAAA = "AAAA",
    NS = "NS",
    MX = "MX",
    CNAME = "CNAME",
    CAA = "CAA",
    SRV = "SRV",
    TXT = "TXT"
}
declare const isRdata: (str: string, type: EnumRecordType) => boolean | isFQDNRes;

export { Button, ButtonProps, escape, isDomain, isFQDN, isRdata, version };
