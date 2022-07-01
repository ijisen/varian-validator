declare const version: string;

/**
 * Better way to handle type checking
 * null, {}, array and date are objects, which confuses
 */
declare type EnumUtilTypeOf = 'undefined' | 'object' | 'array' | 'boolean' | 'number' | 'string' | 'function' | 'symbol' | 'bigint';
declare const utilTypeOf: (input: any) => EnumUtilTypeOf;

/**
 * 判断函数参数是否为有效数据类型
 * @param[str] any 参数
 * @param[types] [any] 支持参数类型, 默认支持 ['string', 'number']
 * */

declare type ValidParamsDefaultTypes = Array<EnumUtilTypeOf>;
declare const isValidParamsTypes: (str: any, types?: ValidParamsDefaultTypes) => boolean | undefined;

/**
 * 语言类型
 * */
declare const enum EnumLanguageType {
    en = "en-US",
    zh = "zh-CN"
}
/**
 * 设置错误消息语言类型
 * */
declare const setErrorCodeLang: (lang?: any) => "en" | "zh";

/**
 * 字符串 转 数组
 * String to Array
 * */
declare const utilStringToArray: (str: any, separator?: string) => any;

/**
 * 字符串格式判断
 * */
declare const utilToString: (input: any) => string;

/**
 * IPV4验证
 * */
declare const isIPv4: (s: string) => boolean;
/**
 * IPV6验证
 * */
declare const isIPv6: (s: string) => boolean;
/**
 * IPV4 & IPV6验证
 * */
declare const isIP: (s: string) => number;

/**
 *  域名格式校验 - 传参数格式
 *  */
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

/**
 *  域名格式校验返回参数格式
 *  */
interface isFQDNRes {
  success: boolean;
  message: string;
}

/**
 * 域名格式校验
 * FQDN：(Fully Qualified Domain Name)全限定域名：同时带有主机名和域名的名称。（通过符号“.”）
 * 例如：主机名是bigserver,域名是mycompany.com,那么FQDN就是bigserver.mycompany.com。 [1]
 * str: m.zdns.cn || zdns.cn. || h.m.zdns.cn.
 * */
declare function isFQDN(str: any, options?: Partial<IsFQDNConfig>, lang?: string): isFQDNRes;

/**
 * 域名合法性校验
 * */
declare const isDomain: (str: string) => isFQDNRes;

/**
 * 端口号校验
 * */
declare const isPort: (str: any) => boolean;

/**
 * 域名解析记录公共校验
 *
 * */
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
/**
 * 域名解析记录公共校验
 * @param[str] 校验值
 * @param[type] 校验类型
 * */
declare const isRdata: (str: string, type: EnumRecordType) => boolean | isFQDNRes;

/**
 * 主机合法性校验
 * */
declare const isHost: (str: string) => true | isFQDNRes;

/**
 * TTL【Time-To-Live】 => 为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *  TTL值是指全国各地的localdns服务器中缓存解析结果的时间周期。
 *  1 . 当各地的localdns服务器接接收到解析请求查询时，就会向权威DNS（例如云解析DNS）发起解析请求查询，获取到解析结果。
 *  2 . localdns会将查询到的解析结果，保存到本地一段时间。保存的这个时间周期，就是根据TTL设置而来的。在保存的这个时间周期内，如果各地localdns再接收到此域名的解析请求查询，是不会再向权威DNS发起请求查询的，而是直接将本地保存的解析结果返回给用户。
 *  3 . 当localdns本地缓存的时间到期后，就会清除该解析记录的缓存结果，清除后，如果各地localdns再接收到此域名的解析请求查询，则会重新向权威DNS（例如云解析DNS）发起解析请求查询，获取最新的解析结果。
 *
 *  */
declare const isTTL: (str: string | number, maxTTL: 65535) => boolean;

declare const isZone: (str: string) => true | isFQDNRes;

/**
 * 标签语义化
 *
 * @param[str]  str
 * eg: <h1> => &lt;h1&gt;
 *
 * */
declare const escape: (str: any) => string | false;

/**
 * 标签语义化编译
 * @param[str]  str
 * eg: &lt;h1&gt; => <h1>
 * */
declare function unescape(str: any): string | false;

/**
 * 布尔值判断
 * @param[str]: 布尔值
 * @param[extend]: 是否支持拓展
 * @param[trueBooleans]: 拓展布尔值
 * */
declare const isBooleanTrue: (str: any, extend: Boolean, trueBooleans?: string[]) => any;

/**
 * 子节长度判断
 *@param[str] any 字符串
 *@param[option] 参数 {min: number, max:number}
 * */
interface IsByteLengthOptions {
    min?: number;
    max: number;
}
declare function isByteLength(str: any, options: IsByteLengthOptions): boolean;

/**
 *
 * 手机格式校验
 * @param[str]: 手机号
 * */
declare const isCellPhone: (str: any) => boolean;

/**
 * 信用卡格式验证
 * @param[str] 校验字符串
 * */
declare function isCreditCard(str: any): boolean;

/**
 *
 * 邮箱格式正则校验
 * @param[str] 邮箱
 * */
declare const isEmail: (str: any) => boolean;

/**
 * 判断字符串是否为空值
 * @param[str] 需要判断的值
 * @param[option] {ignore_whitespace: boolean} 是否忽略空格
 * */
interface DefaultIsEmptyOptions {
    ignore_whitespace: boolean;
}
declare const isEmptyStr: (str: any, options?: DefaultIsEmptyOptions) => boolean;
/**
 * @names：判断数组是否为空数据
 * @params[data] Array
 * */
declare const isEmptyArray: (data?: never[]) => boolean;

/**
 * 以太坊地址校验
 * @param[str] 以太坊地址
 * */
declare const isEthereumAddress: (str: any) => boolean;

/**
 * isIdentityCard
 * @param[str] any 证件号码
 * @param[locale] string 证件类型
 * */
declare function isIdentityCard(str: any, locale: string): any;

/**
 * IMEI校验
 * @param[str] imei
 * @param[allow_hyphens] boolean 允许连字符
 * */
declare function isIMEI(str: any, allow_hyphens?: boolean): boolean;

/**
 * 是否包含数据判断
 * @param[str] 要判断的数据
 * @param[options] 匹配的数据
 * */
declare function isIn(str: any, options: any): any;

/**
 * 数字取值范围校验
 * @param[str] 数值
 * @param[min] 最小值
 * @param[max] 最大值
 * */
declare const isInRange: (str: any, min: number, max: number) => boolean;

/**
 * 是否为整数判断
 * @param[str] 数值
 * @param[options] 参数
 *
 * */
declare function isInt(str: any, options?: {
    allow_leading_zeroes?: Boolean;
    min?: number;
    max?: number;
    lt?: number;
    gt?: number;
}): boolean;

/**
 * 判断参数是否为数字
 *
 * @param[number]
 * @param[allowNegative] 是否允许为负数
 */
declare const isNumber: (number: any, allowNegative?: boolean) => boolean;

/**
 * 邮编格式验证
 * @param[str] 邮编
 * @param[locale] 邮编所属地
 * */
declare function isPostalCode(str: any, locale: string): any;

interface IsStrongPasswordOptions {
    minLength: number;
    minLowercase: number;
    minUppercase: number;
    minNumbers: number;
    minSymbols: number;
    returnScore: boolean;
    pointsPerUnique: number;
    pointsPerRepeat: number;
    pointsForContainingLower: number;
    pointsForContainingUpper: number;
    pointsForContainingNumber: number;
    pointsForContainingSymbol: number;
}
interface IAnalysisType {
    length: number;
    uniqueChars: number;
    uppercaseCount: number;
    lowercaseCount: number;
    numberCount: number;
    symbolCount: number;
}
/**
 * 密码强度验证
 *
 * @param[str]  密码
 * @param[options]  验证参数
 * */
declare function isStrongPassword(str: any, options?: Partial<IsStrongPasswordOptions>): number | boolean;

declare type TProtocols = Array<'http' | 'https' | 'ftp'>;
declare type TCheckHostMatches = Array<string | RegExp>;
interface IIsURLDefaultUrlOptions {
    protocols: TProtocols;
    require_tld: boolean;
    require_protocol: boolean;
    require_host: boolean;
    require_port: boolean;
    require_valid_protocol: boolean;
    allow_underscores: boolean;
    allow_trailing_dot: boolean;
    allow_protocol_relative_urls: boolean;
    allow_fragments: boolean;
    allow_query_components: boolean;
    validate_length: boolean;
    disallow_auth?: boolean;
    host_whitelist?: TCheckHostMatches;
    host_blacklist?: TCheckHostMatches;
}
/**
 * URL合法性校验
 * @param[url]  url
 * @param[options] 校验参数
 * */
declare function isURL(url: any, options: Partial<IIsURLDefaultUrlOptions>): boolean;

/**
 * uuid 合法性校验
 * @param[str]  url
 * @param[version] uuid版本
 * */
declare function isUUID(str: any, version: any): any;

export { EnumLanguageType, EnumRecordType, EnumUtilTypeOf, IAnalysisType, IIsURLDefaultUrlOptions, IsByteLengthOptions, IsFQDNConfig, IsStrongPasswordOptions, ValidParamsDefaultTypes, escape, isBooleanTrue, isByteLength, isCellPhone, isCreditCard, isDomain, isEmail, isEmptyArray, isEmptyStr, isEthereumAddress, isFQDN, isFQDNRes, isHost, isIMEI, isIP, isIPv4, isIPv6, isIdentityCard, isIn, isInRange, isInt, isNumber, isPort, isPostalCode, isRdata, isStrongPassword, isTTL, isURL, isUUID, isValidParamsTypes, isZone, setErrorCodeLang, unescape, utilStringToArray, utilToString, utilTypeOf, version };
