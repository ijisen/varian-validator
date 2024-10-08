var version = "0.0.47";

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
 * 1.111 + 2 = 3.1109999999999998
 */
declare function numberAdd(num1: any, num2: any): number;
/**
 * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
 *
 * @param num1 被减数
 * @param num2 减数
 */
declare function numberSubtract(num1: any, num2: any): number;
/**
 * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
 *
 * @param num1 乘数a
 * @param num2 乘数b
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
 * 数字格数转换缩写
 *
 * @param val 原始数字
 * @param isEn 是否为英文
 */
declare const numberSimplifyCutting: (val: any, isEn?: boolean) => any;

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
 * @params[immediate]  表示第一次是否立即执行
 */
declare const debounce: (fn: Function, delay?: number, immediate?: boolean) => (this: any, ...args: any) => void;

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
 *  abc.com.cn => cn
 *  blog.zdns.com.cn => zdns.com.cn
 *  baidu.com.cn.net => com.cn.net
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
 * @params[filterAllSpace] boolean
 * @return string
 * eg: aaa  aa  => aaa aa
 * */
declare const filterStringSpace: (str: any, filterAllSpace?: boolean) => string;

/**
 *  计算字符串长度
 *  将字符串转Unicode计算 一个中文 = 3个子节
 *
 * @param[str] 字符串
 */
declare function getStrByteLength(str: string): number;

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
 * @params[needToLowerCase] boolean 是否需要转小写
 * @return [] Array
 * @description:
 * 1、去掉首位空格
 * 2、大写转小写
 * 3、去除多余的空格
 * 4、specialSymbolToComma 转 英文,
 * 5、数组去重
 * */
declare const inputTextareaFormat: (str: any, needToLowerCase?: boolean) => any[];
/**
 * 文本去重并换行
 * @params[str] 字符串|数组 => ''
 * @params[needToLowerCase] boolean 是否需要转小写
 */
declare const inputValueFormatBr: (str: any, needToLowerCase: boolean) => string;

/**
 * 判断数据是否存在
 * @param[value] 需要判断的数据
 * @param[returnType] 返回类型，默认返回 boolean
 * @param[emptyVal] 当returnType=string时，返回值; 默认返回 N/A
 * @return any
 * @description:
 * --> value=0 => true
 * --> value=false => true
 * --> value=undefined => false
 * --> value=null => true
 * */
declare const isExistValue: (value: any, returnType?: 'boolean' | 'string', emptyVal?: any) => any;

/**
 * 判断参数是否为数字
 * @param[number]
 * @param[allowNegative] 是否允许为负数，默认: false
 * isNaN([]) || isNaN('') || isNaN(true) || isNaN(false) || isNaN(null) => false
 */
declare const isNumber: (number: any, allowNegative?: boolean) => boolean;

/**
 * Better way to handle type checking
 * null, {}, array and date are objects, which confuses
 */
type EnumUtilTypeOf = 'undefined' | 'object' | 'array' | 'boolean' | 'number' | 'string' | 'function' | 'symbol' | 'bigint';
declare const utilTypeOf: (input: any) => EnumUtilTypeOf;

/**
 * 判断函数参数是否为有效数据类型
 * @param[str] any 参数
 * @param[types] [any] 支持参数类型, 默认支持 ['string', 'number']
 * */

type ValidParamsDefaultTypes = Array<EnumUtilTypeOf>;
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
declare const setSessionStorage: (name: string, data: any) => true | undefined;
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
 * 语言类型枚举值
 * */
declare enum EnumLanguageType {
    en = "en-US",
    zh = "zh-CN"
}
type LanguageType = EnumLanguageType.zh | EnumLanguageType.en | undefined | string;
/**
 * 设置错误消息语言类型
 * @param[lang] LanguageType 默认: 中文[zh-CN]
 * */
declare const setErrorCodeLang: (lang?: LanguageType) => EnumLanguageType;

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
 * 特殊符号转 , 英文号
 * @params[str] string
 * @return string
 * @description： \r|\s|\n|， => 英文，
 * */
declare const specialSymbolToComma: (str: any) => string;

/**
 * 字符串 大小写转换
 * String to Case
 * */
declare const stringToLowerOrUpperCase: (str: any, toUpper?: boolean) => any;

/**
 * name：函数节流
 * description：函数触发后,如果函数还在执行中，就不再执行，
 * @params[fn]  回调函数
 * @params[delay]  定时器延时
 */
declare const throttle: (fn: Function, delay?: number) => (this: any, ...args: any) => void;

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
 * @param[str] 需要拆分的数据
 * @param[separator] 拆分标识符，默认 ,
 * */
declare const stringToArray: (str: any, separator?: string) => any;

/**
 * 字符串格式判断
 * */
declare const utilToString: (input: any) => string;

/**
 *  TLD格式校验 - 传参数格式
 *  */
interface ITldRegConfig {
  // 是否允许数字TLD号结尾, 默认: false
  allow_numeric_tld: boolean;
  // 是否允许TLD包含 -, 默认: false
  allow_hyphen_tld: boolean;
}

/**
 *  域名关键词格式校验 - 传参数格式
 *  */
interface ILabelRegConfig {
  // 是否允许包含下划线, 默认: false
  allow_underscores: boolean;
}

/**
 *  域名格式校验 - 传参数格式
 *  */
interface IsFQDNConfig extends ITldRegConfig {
  // 是否包含TLD, 默认: true
  require_tld: boolean;
  // 最大节点数, 默认: 127
  max_node: number,
  // 是否允许包含下划线, 默认: false
  allow_underscores: boolean;
  // 是否允许 . 号结尾, 默认: false
  allow_trailing_dot: boolean;
  // 是否允许配符 *, 默认: false
  allow_wildcard: boolean;
}

/**
 *  域名格式校验返回参数格式
 *  */
interface isFQDNRes {
  // 是否校验成功
  success: boolean;
  // 校验成功|失败提示消息
  message: string;
  // 校验的文本
  regValue?: any;
}

/**
 * 验证 IP V4 合法性
 * @param[str] 关键词
 * */
declare const isIPv4: (str: string) => boolean;
/**
 * 验证 IP V6 合法性
 * @param[str] 关键词
 * */
declare const isIPv6: (str: string) => boolean;
/**
 * 验证IP合法性
 * @param[str] 关键词
 * */
declare const isIP: (str: string) => 0 | 4 | 6;
/**
 * IPV4 是否为同一网段判定
 * @param[startIP] IP开始断
 * @param[endIP] IP结束断
 * @param[lang] 国际话语言 默认： zh_CN
 * */
declare const isSameIPV4Segment: (startIP: string, endIP: string, lang?: any) => isFQDNRes;

/**
 * 域名关键词验证
 * @param[config.label] 关键词
 * @param[config.option.allow_underscores] 是否允许包含下划线, 默认: false
 * @param[config.lang] 国际话语言 默认： zh_CN
 * */
declare const domainLabelValidator: (config: {
    label: any;
    option?: Partial<ILabelRegConfig>;
    lang?: string;
}) => {
    success: boolean;
    message: string;
};

/**
 * TLD格式校验
 * @param[params.tld] 需要校验的TLD
 * @param[params.option] TLD验证可选参数
 * @param[params.lang] 国际话语言
 * */
declare const tldValidator: (params: {
    tld: any;
    option?: Partial<ITldRegConfig>;
    lang?: string;
}) => {
    success: boolean;
    message: string;
};

/**
 * 域名格式校验
 * FQDN：(Fully Qualified Domain Name)全限定域名：同时带有主机名和域名的名称。（通过符号“.”）
 * 例如：主机名是bigserver,域名是mycompany.com,那么FQDN就是bigserver.mycompany.com。 [1]
 * str: m.zdns.cn || zdns.cn. || h.m.zdns.cn.
 * @param[str] 需要校验的文本
 * @param[option] 域名验证可选参数
 * @param[lang] 国际话语言
 * */
declare const isFQDN: (str: any, option?: Partial<IsFQDNConfig>, lang?: string) => isFQDNRes;

/**
 * 域名合法性校验
 * @param[params.str] 域名
 * @param[params.lang] 国际话语言
 * @param[params.config] 域名格式校验参数
 * @config 参数默认值
 * @param[params.config.require_tld] 是否包含TLD，默认：true
 * @param[params.config.allow_underscores] 是否允许包含下划线，默认：true
 * @param[params.config.allow_trailing_dot] 是否允许 . 号结尾，默认：false
 * @param[params.config.allow_numeric_tld] 是否允许数字TLD号结尾，默认：false
 * @param[params.config.allow_wildcard] 是否允许配符 *，默认：false
 * */
declare const isDomain: (params?: {
    str: string;
    lang?: string;
    config?: Partial<IsFQDNConfig>;
}) => isFQDNRes;

/**
 * 端口号校验
 * @param[str] 校验的文本
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
 * @param[lang] 国际话语言 默认： zh_CN
 * */
declare const isRdata: (str: any, type: EnumRecordType, lang?: string) => isFQDNRes;

/**
 * 主机合法性校验
 * */
declare const isHost: (str: string) => boolean;

/**
 * TTL【Time-To-Live】 => 为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *  TTL值是指全国各地的localdns服务器中缓存解析结果的时间周期。
 *  1 . 当各地的localdns服务器接接收到解析请求查询时，就会向权威DNS（例如云解析DNS）发起解析请求查询，获取到解析结果。
 *  2 . localdns会将查询到的解析结果，保存到本地一段时间。保存的这个时间周期，就是根据TTL设置而来的。在保存的这个时间周期内，如果各地localdns再接收到此域名的解析请求查询，是不会再向权威DNS发起请求查询的，而是直接将本地保存的解析结果返回给用户。
 *  3 . 当localdns本地缓存的时间到期后，就会清除该解析记录的缓存结果，清除后，如果各地localdns再接收到此域名的解析请求查询，则会重新向权威DNS（例如云解析DNS）发起解析请求查询，获取最新的解析结果。
 *
 *  */
declare const isTTL: (str: any, min?: number, max?: number) => boolean;

declare const isZone: (str: string, lang?: string) => boolean;

declare const isNS: (str: string, lang?: string) => isFQDNRes;

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
 * @names：判断数组是否为空数据
 * @params[data] Array
 * */
declare const isEmptyArray: (data: any) => boolean;

/**
 * 判断字符串是否为空值
 * @param[str] 需要判断的值
 * @param[ignoreSpace] boolean 是否忽略空格
 * */
declare const isEmptyStr: (str: any, ignoreSpace: boolean) => boolean;

/**
 * 以太坊地址校验
 * @param[str] 以太坊地址
 * */
declare const isEthereumAddress: (str: any) => boolean;

declare const isExistString: (str: any) => undefined | string;

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
 * 判断数据是否为 object
 * @param[data]
 * */
declare const isObject: (data: any) => boolean;

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

type TProtocols = Array<'http' | 'https' | 'ftp'>;
type TCheckHostMatches = Array<string | RegExp>;
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

export { EnumLanguageType, EnumRecordType, IAnalysisType, IIsURLDefaultUrlOptions, ILabelRegConfig, ITldRegConfig, IsBankCard, IsByteLengthOptions, IsFQDNConfig, IsStrongPasswordOptions, LanguageType, arrayDataGrouping, dateFormatReg, debounce, deepClone, domainLabelValidator, escape, filterStringSpace, formatDate, getCookieValue, getDomainPeriod, getDomainTld, getLocalStorage, getSessionStorage, getStrByteLength, getUrlParam, inputTextareaFormat, inputValueFormatBr, isBooleanTrue, isByteLength, isCellPhone, isCreditCard, isDomain, isEmail, isEmptyArray, isEmptyStr, isEthereumAddress, isExistString, isExistValue, isFQDN, isFQDNRes, isFixedPhone, isHost, isIMEI, isIP, isIPv4, isIPv6, isIdentityCard, isIn, isInRange, isInt, isNS, isNumber, isObject, isPort, isPostalCode, isRdata, isSameIPV4Segment, isStrongPassword, isTTL, isTaxpayerNo, isURL, isUUID, isValidParamsTypes, isZone, numberAdd, numberDivide, numberMultiply, numberSimplifyCutting, numberSubtract, numberToDecimal2, removeLocalStorage, removeSessionStorage, setCookie, setErrorCodeLang, setHtmlTitle, setLocalStorage, setSessionStorage, setUrlParam, specialSymbolToComma, stringToArray, stringToLowerOrUpperCase, throttle, tldValidator, unescape, utilToString, utilTypeOf, utilsSubmitForm, version };
