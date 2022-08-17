var version = "0.0.8";

/**
 * 金额保留两位小数
 * @param[num]
 * @param[ceil] 是否向上取整， 默认四舍五入
 * ceil === true, 向上取整; eg: 5.051 = 5.06
 * ceil === false, 四舍五入; eg: 5.051 = 5.05
 */
declare function numberToDecimal2(num: any, ceil?: boolean): any;
/**
 * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
 *
 * @param num1 加数1
 * @param num2 加数2
 */
declare function numberAdd(num1: any, num2: any): number;
/**
 * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
 *
 * @param num1 被减数
 * @param num2 减数
 */
declare function numberSubtract(num1: number, num2: number): string;
/**
 * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
 *
 * @param num1 被乘数
 * @param num2 乘数
 */
declare function numberMultiply(num1: number, num2: number): number;
/**
 * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
 *
 * @param num1 被除数
 * @param num2 除数
 */
declare function numberDivide(num1: number, num2: number): number;

/**
 * @names：数组分组提交数据
 * @params[data] 数据
 * @params[groupLen] 组员
 * */
declare const arrayDataGrouping: (data?: never[], groupLen?: number) => never[][] | undefined;

/**
 * 储存 cookie 值
 * @param[name] cookie 关键字
 * @param[data] cookie 值
 * @param[objHours] 储存时间
 * @return boolean  储存成功与否
 */
declare const setCookie: (name: string, data: any, objHours: number) => boolean;
/**
 * 获取 cookie 值
 * @param[name] cookie 关键字
 * @return any  获取到的值
 */
declare const getCookieValue: (name: string) => any;

/**
 * 解决IE不识别 2018-08-12的时间格式
 *
 * @param[date]: 日期
 *
 * eg: 2018-08-12 => 2018/08/12
 * */
declare function dateFormatReg(date: any): any;
/**
 * 日期格式化.
 * @param[date]
 * @param[format] 格式
 */
declare function formatDate(date: any, format?: string): string;

/**
 * name：函数防抖
 * description：函数触发后，如果函数还没执行完成，则打断执行，重新执行
 * @params[fn]  回调函数
 * @params[delay]  定时器延时
 */
declare const debounce: (fn?: () => void, delay?: number) => () => void;

/**
 * 对象深度克隆
 *
 * @param[obj] 要克隆的对象
 */
declare function deepClone(obj: any[] | {
    [propName: string]: any;
}): {};

/** =======================================================
 * @names：  域名相关公共方法
 * @author：jisen
 * @time：  2022-07-04
 * @description：域名相关公共方法
 * ======================================================== */
/**
 *  获取【域名】的TLD
 *  abc.com => com
 *  abc.com.cn =>cn
 *  blog.zdns.com.cn => zdns.com.cn
 * */
declare function getDomainTld(domain: any): string;
/**
 * 域名可注册年限判断
 * .co 为五年
 * 其它十年
 * @params[tld] 顶级域 com|co|net
 * */
declare function getDomainPeriod(tld: any): number;

/**
 * 标签语义化
 *
 * @param[str]  str
 * eg: <h1> => &lt;h1&gt;
 *
 * */
declare const escape: (str: any) => string | false;

/**
 * @names：普通文本过滤所有的空格
 * 部分 ajax 响应数据为字符串，且包含转义字符，无法转成JSON
 *
 * @params[str] string
 * @params[options] {filterAll: boolean, returnType: boolean}
 * @return string
 * eg: aaa  aa  => aaa aa
 * */
declare const filterStringSpace: (str: any, options?: {
    filterAll?: boolean;
    returnType?: boolean;
}) => string;

/**
 *  计算字符串长度
 *  将字符串转Unicode计算 一个中文 = 3个子节
 *
 * @param[str] 字符串
 */
declare function getStrByteLength(str: string): void;

/**
 * 获取url中的参数
 *
 * @param[name] 参数名
 * @param[param] 参数  'name=xx&age=124'
 */
declare function getUrlParam(name: string, param: string): string | null;

/**
 * @names：textarea 输入内容格式化
 * @params[str] string
 * @return [] Array
 * */
declare const inputTextareaFormat: (str: any) => any;

/**
 * 判断字符串是否为空值
 * @param[str] 需要判断的值
 * @param[ignoreSpace] boolean 是否忽略空格
 * */
declare const isEmptyStr: (str: any, ignoreSpace: boolean) => boolean;
/**
 * @names：判断数组是否为空数据
 * @params[data] Array
 * */
declare const isEmptyArray: (data?: never[]) => boolean;

/**
 * 判断数据是否存在
 * @param[value] 需要判断的数据
 * @param[returnType] 返回类型，默认返回 boolean
 * @return boolean || string
 */
declare const isExistValue: (value: any, returnType?: string) => string | boolean;

/**
 * 判断参数是否为数字
 *
 * @param[number]
 * @param[allowNegative] 是否允许为负数
 */
declare const isNumber: (number: any, allowNegative?: boolean) => boolean;

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
 * 存储 localStorage
 * @param[name] storage 关键字
 * @param[data] storage 值
 * @return boolean  储存成功与否
 */
declare const setLocalStorage: (name: string, data: any) => boolean;
/**
 * 获取localStorage
 * @param[name] storage 关键字
 * @return any  获取到的值
 */
declare const getLocalStorage: (name: string) => any;
/**
 * 删除localStorage
 * @param[name] storage 关键字
 * @return boolean 删除成功与否
 */
declare const removeLocalStorage: (name: string) => boolean;

/**
 * 存储 sessionStorage
 * @param[name] session关键字
 * @param[data] session值
 * @return boolean  储存成功与否
 */
declare const setSessionStorage: (name: string, data: any) => boolean;
/**
 * 获取 sessionStorage
 * @param[name] session关键字
 * @return any  获取到的值
 */
declare const getSessionStorage: (name: string) => any;
/**
 * 删除 sessionStorage
 * @param[name] session关键字
 * @return boolean 删除成功与否
 */
declare const removeSessionStorage: (name: string) => boolean;

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
 * 设置页面标题
 *
 * @param[title] 标题
 */
declare function setHtmlTitle(title: string): void;

/**
 * 配置url参数
 *
 * @param[data] 参数
 */
declare function setUrlParam(data: string): string | undefined;

/**
 * @names：特殊符号转 , 英文号
 * @params[str] string
 * @return string
 * */
declare const specialSymbolToComma: (str: any) => string;

/**
 * name：函数节流
 * description：函数触发后,如果函数还在执行中，就不再执行，
 * @params[fn]  回调函数
 * @params[delay]  定时器延时
 */
declare const throttle: (fn?: () => void, delay?: number) => () => void;

/**
 * 标签语义化编译
 * @param[str]  str
 * eg: &lt;h1&gt; => <h1>
 * */
declare function unescape(str: any): string | false;

/**
 * @names：模拟表单提交数据
 * @params[config] Object
 * */
declare const utilsSubmitForm: (config: {
    url: string;
    method: string;
    params: {
        [propName: string]: any;
    };
}) => void;

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
declare const isRdata: (str: any, type: EnumRecordType.A) => boolean | isFQDNRes;

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
 * 银行卡号合法性验证
 * @param[str] any 银行卡
 * description： 15位或者16位或者19位
 * */
declare const IsBankCard: (str: any) => boolean;

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
 * 以太坊地址校验
 * @param[str] 以太坊地址
 * */
declare const isEthereumAddress: (str: any) => boolean;

/**
 *
 * 固定电话格式校验
 * @param[str]: 电话
 * eg: (0827-7977654) || (7977654)
 * */
declare const isFixedPhone: (str: string) => boolean;

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

/**
 * 纳税人识别码 合法性验证
 * @param[str] any 识别码
 * */
declare const isTaxpayerNo: (str: any) => boolean;

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

export { EnumLanguageType, EnumRecordType, IAnalysisType, IIsURLDefaultUrlOptions, IsBankCard, IsByteLengthOptions, IsFQDNConfig, IsStrongPasswordOptions, arrayDataGrouping, dateFormatReg, debounce, deepClone, escape, filterStringSpace, formatDate, getCookieValue, getDomainPeriod, getDomainTld, getLocalStorage, getSessionStorage, getStrByteLength, getUrlParam, inputTextareaFormat, isBooleanTrue, isByteLength, isCellPhone, isCreditCard, isDomain, isEmail, isEmptyArray, isEmptyStr, isEthereumAddress, isExistValue, isFQDN, isFQDNRes, isFixedPhone, isHost, isIMEI, isIP, isIPv4, isIPv6, isIdentityCard, isIn, isInRange, isInt, isNumber, isPort, isPostalCode, isRdata, isStrongPassword, isTTL, isTaxpayerNo, isURL, isUUID, isValidParamsTypes, isZone, numberAdd, numberDivide, numberMultiply, numberSubtract, numberToDecimal2, removeLocalStorage, removeSessionStorage, setCookie, setErrorCodeLang, setHtmlTitle, setLocalStorage, setSessionStorage, setUrlParam, specialSymbolToComma, throttle, unescape, utilStringToArray, utilToString, utilTypeOf, utilsSubmitForm, version };
