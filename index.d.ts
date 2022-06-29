import { version } from "package";
import { IsFQDNConfig, isFQDNRes } from "./typings.d";
interface ButtonProps {
    size: string;
}
declare const Button = "export default Button;";
declare const _default: (str: any) => string | false;
declare function isFQDN(str: any, options?: Partial<IsFQDNConfig>, lang?: string): isFQDNRes;
// is domain·
declare const isDomain: (str: string) => import("@/lib/http/typings").isFQDNRes;
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
// is rdata
declare const isRdata: (str: string, type: EnumRecordType) => boolean | import("@/lib/http/typings").isFQDNRes;
export { version, Button, _default as escape, isFQDN, isDomain, isRdata };
export type { ButtonProps };
