export declare const enum EnumRecordType {
    A = "A",
    AAAA = "AAAA",
    NS = "NS",
    MX = "MX",
    CNAME = "CNAME",
    CAA = "CAA",
    SRV = "SRV",
    TXT = "TXT"
}
export declare const isRdata: (str: string, type: EnumRecordType) => boolean | import("../http/typings").isFQDNRes;
