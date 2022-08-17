/**! 
 * varian-validator v0.0.6 
 * Lightweight JavaScript form validation. 
 * 
 * Copyright (c) 2022 ji sen  (https://github.com/ijisen) 
 * https://github.com/ijisen/varian-validator 
 * Licensed under the ISC license 
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var version = "0.0.6";

const v4Seg = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
const v4Str = `(${v4Seg}[.]){3}${v4Seg}`;
const IPv4Reg = new RegExp(`^${v4Str}$`); // IPv6 Segment

const v6Seg = '(?:[0-9a-fA-F]{1,4})';
const IPv6Reg = new RegExp('^(' + `(?:${v6Seg}:){7}(?:${v6Seg}|:)|` + `(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|` + `(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|` + `(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|` + `(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|` + `(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|` + `(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|` + `(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:))` + ')(%[0-9a-zA-Z-.:]{1,})?$');
/**
 * IPV4验证
 * */

const isIPv4 = s => {
  return IPv4Reg.test(s);
};
/**
 * IPV6验证
 * */

const isIPv6 = s => {
  return IPv6Reg.test(s);
};
/**
 * IPV4 & IPV6验证
 * */

const isIP = s => {
  if (isIPv4(s)) return 4;
  if (isIPv6(s)) return 6;
  return 0;
};

/**
 * 语言类型
 * */
let EnumLanguageType;
/**
 * 设置错误消息语言类型
 * */

(function (EnumLanguageType) {
  EnumLanguageType["en"] = "en-US";
  EnumLanguageType["zh"] = "zh-CN";
})(EnumLanguageType || (EnumLanguageType = {}));

const setErrorCodeLang = (lang = EnumLanguageType.zh) => {
  if (lang === EnumLanguageType.en) {
    return 'en';
  }

  return 'zh';
};

/**
 * @names：普通文本过滤所有的空格
 * 部分 ajax 响应数据为字符串，且包含转义字符，无法转成JSON
 *
 * @params[str] string
 * @params[options] {filterAll: boolean, returnType: boolean}
 * @return string
 * eg: aaa  aa  => aaa aa
 * */
const filterStringSpace = (str, options) => {
  if (typeof str !== 'string') {
    // return str;
    return '';
  }

  const reg = /\\0|\\u0000|\s+/g; // return str.replace(/\s+/g, '');

  if (options?.filterAll) {
    return str.replace(reg, '');
  }

  return str.replace(reg, ' ');
};

/**
 * 域名格式校验 - 错误提示消息.
 * */

const errorCodes = {
  zh: {
    DOMAIN_IS_EMPTY: '校验内容为空',
    DOMAIN_FORMAT_ERROR: '域名格式错误',
    DOMAIN_TOO_SHORT: '域名长度不能小于 1 个字符.',
    DOMAIN_TOO_LONG: '域名长度不能超过 255 个字符.',
    LABEL_STARTS_WITH_DASH: '域名标签不能以 . 开头.',
    LABEL_ENDS_WITH_DASH: '域名标签不能以 . 结尾.',
    LABEL_WITH_HYPHEN: '域名标签不能以 - 开头或结尾.',
    LABEL_TOO_LONG: '域名标签的长度最多为 63 个字符.',
    LABEL_TOO_SHORT: '域名标签应至少为 1 个字符长.',
    LABEL_WITH_UNDERSCORES: '域名标签不能包含 _ ',
    LABEL_ENDS_WITH_UNDERSCORES: '域名标签不能以 _ 结尾.',
    LABEL_INVALID_CHARS: '域名标签只能包含a-z、A-Z、0-9、-、_、.、*、@、中文汉字.',
    TLD_WITH_NUMBER: 'TLD不能包含数字.',
    TLD_INVALID_CHARS: 'TLD格式错误.'
  },
  en: {
    DOMAIN_IS_EMPTY: 'Check content is empty',
    DOMAIN_FORMAT_ERROR: 'Domain name format error',
    DOMAIN_TOO_SHORT: 'Domain name too short.',
    DOMAIN_TOO_LONG: 'Domain name too long. It should be no more than 255 chars.',
    LABEL_STARTS_WITH_DASH: 'Domain name label can not start with a dash.',
    LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
    LABEL_WITH_HYPHEN: 'Domain labels cannot start or end with -.',
    LABEL_TOO_LONG: 'Domain name label should be at most 63 chars long.',
    LABEL_TOO_SHORT: 'Domain name label should be at least 1 character long.',
    LABEL_WITH_UNDERSCORES: 'Domain labels cannot contain _',
    LABEL_ENDS_WITH_UNDERSCORES: 'Domain labels can not end with _',
    LABEL_INVALID_CHARS: 'Domain name label can only contain a-z、A-Z、0-9、-、_、.、*、@、中文汉字.',
    TLD_WITH_NUMBER: 'TLD cannot contain numbers',
    TLD_INVALID_CHARS: 'TLD format error'
  }
};
/**
 * 域名格式校验 - 默认配置参数
 *
 * */

const default_fqdn_options = {
  // 是否包含TLD
  require_tld: true,
  // 是否允许包含下划线
  allow_underscores: true,
  // 是否允许 . 号结尾
  allow_trailing_dot: false,
  // 是否允许纯数字TLD
  allow_numeric_tld: false,
  // 是否允许配符 *
  allow_wildcard: false
};
/**
 * 域名格式校验
 * FQDN：(Fully Qualified Domain Name)全限定域名：同时带有主机名和域名的名称。（通过符号“.”）
 * 例如：主机名是bigserver,域名是mycompany.com,那么FQDN就是bigserver.mycompany.com。 [1]
 * str: m.zdns.cn || zdns.cn. || h.m.zdns.cn.
 * */

function isFQDN(str, options = {}, lang) {
  let errorMessage = errorCodes[setErrorCodeLang(lang)];

  if (typeof str !== 'string') {
    return {
      success: false,
      message: errorMessage.DOMAIN_FORMAT_ERROR
    };
  }

  str = filterStringSpace(str, {
    filterAll: true
  });
  options = { ...default_fqdn_options,
    ...options
  };
  console.log(options);

  if (!str) {
    return {
      success: false,
      message: errorMessage.DOMAIN_IS_EMPTY
    };
  }

  const len = str.length;

  if (len > 255) {
    return {
      success: false,
      message: errorMessage.DOMAIN_TOO_LONG
    };
  }
  /* Remove the optional trailing dot before checking validity */


  if (options.allow_trailing_dot && str[len - 1] === '.') {
    str = str.substring(0, len - 1);
  }
  /* Remove the optional wildcard before checking validity */


  if (options.allow_wildcard && str.indexOf('*.') === 0) {
    str = str.substring(2);
  }

  const nodes = str.split('.');
  console.log(nodes);
  const node_len = nodes.length;
  const max_node = 127;

  if (options.require_tld) {
    // disallow fqdns without tld
    if (node_len < 2) {
      // 域名格式错误  zdns.cn
      return {
        success: false,
        message: errorMessage.DOMAIN_FORMAT_ERROR
      };
    }

    if (node_len > max_node) {
      return {
        success: false,
        message: errorMessage.DOMAIN_FORMAT_ERROR
      };
    }

    const tld = nodes[node_len - 1]; // reject numeric TLDs

    if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
      return {
        success: false,
        message: errorMessage.TLD_WITH_NUMBER
      };
    }

    if (!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return {
        success: false,
        message: errorMessage.TLD_INVALID_CHARS
      };
    }
  } else {
    if (node_len > max_node - 1) {
      return {
        success: false,
        message: errorMessage.DOMAIN_FORMAT_ERROR
      };
    }
  }

  for (let i = 0; i < node_len; i++) {
    const label = nodes[i];
    console.log(label);

    if (label.length > 63) {
      return {
        success: false,
        message: errorMessage.LABEL_TOO_LONG
      };
    } // \u4E00-\u9FA5 \u00a1-\uffff


    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(label)) {
      return {
        success: false,
        message: errorMessage.LABEL_INVALID_CHARS
      };
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(label)) {
      return {
        success: false,
        message: errorMessage.LABEL_INVALID_CHARS
      };
    } // disallow node starting or ending with hyphen


    if (/^-|-$/.test(label)) {
      return {
        success: false,
        message: errorMessage.LABEL_WITH_HYPHEN
      };
    }

    if (!options.allow_underscores && /_/.test(label)) {
      return {
        success: false,
        message: errorMessage.LABEL_WITH_UNDERSCORES
      };
    } // disallow node ending with _


    if (/_$/.test(label)) {
      return {
        success: false,
        message: errorMessage.LABEL_ENDS_WITH_UNDERSCORES
      };
    }
  }

  return {
    success: true,
    message: ''
  };
}

/**
 * 域名合法性校验
 * */

const isDomain = str => {
  return isFQDN(str, {
    require_tld: true,
    // 是否允许包含下划线
    allow_underscores: true,
    // 是否允许 . 号结尾
    allow_trailing_dot: false,
    // 是否允许数字TLD号结尾
    allow_numeric_tld: false,
    // 是否运通配符 *
    allow_wildcard: false
  });
};

/**
 * 判断参数是否为数字
 *
 * @param[number]
 * @param[allowNegative] 是否允许为负数
 */
const isNumber = (number, allowNegative = false) => {
  /**
   * isNaN([]) || isNaN('') || isNaN(true) || isNaN(false) || isNaN(null) => false
   * */
  if (typeof number === 'string') {
    number = number.replace(/\s+/g, '');
  }

  if (isNaN(number) || number === '' || typeof number === 'object' || typeof number === 'boolean') {
    return false;
  } else {
    number = parseFloat(number);

    if (number < 0) {
      return allowNegative;
    } else {
      return true;
    }
  }
};

/**
 * 数字取值范围校验
 * @param[str] 数值
 * @param[min] 最小值
 * @param[max] 最大值
 * */

const isInRange = (str, min, max) => {
  if (!isNumber(str)) {
    return false;
  }

  const val = Number(str);
  return val >= min && val <= max;
};

/**
 * 端口号校验
 * */

const isPort = str => {
  return isInRange(str, 1, 65535);
};

/**
 * MX【邮件交换记录 - Mail Exchanger】  => 将域名指向邮件服务器地址
 *  使用场景：设置邮箱时，让邮箱能收到邮件，就需要添加 MX 记录。MX全称为mail exchanger，用于电子邮件系统发邮件时根据收信人的地址后缀来定位邮件服务器。例如，当有人发邮件给“vincen@example.com”时，系统将对“example.com”进行DNS中的MX记录解析。如果MX记录存在，系统就根据MX记录的优先级，将邮件转发到与该MX相应的邮件服务器上。
 *  主机记录：一般是指子域名的前缀，（要做xxx@dns-example.com的邮箱，所以主机记录输入“ @ ”；要做xxx@mail.dns-example.com，如果主机记录填 mail）。
 *  解析线路：默认为必填项，否则会导致部分用户无法解析，邮件无法收取；
 *  记录值：输入内容通过联系邮箱注册商提供。例如阿里云邮提供的需要配置的解析记录值是 mx1.qiye.aliyun.com；
 *  MX优先级：输入内容通过联系邮箱注册商提供，MX 优先级的数值越低，优先级别就越高（如下图，邮件会先尝试发送到 MX 优先级为 5 的mx1.qiye.aliyun.com，如果尝试失败，才会发送到 MX 优先级为10 的mx2.qiye.aliyun.com）。
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */

const isMX = str => {
  if (!str) {
    return false;
  }

  return isDomain(str);
};

/**
 * TXT  => 文本长度限制512，通常做SPF记录（反垃圾邮件）
 *  使用场景：如果希望对域名进行标识和说明，可以使用 TXT 记录， TXT 记录多用来做 SPF 记录（反垃圾邮件）。
 *  主机记录：一般是指子域名的前缀（如需为子域名为 www.dns-example.com 添加 TXT 记录， 主机记录输入 www；如需为dns-example.com添加TXT记录，主机记录输入 @）
 *  解析线路：默认 为必选项，未设置会导致部分用户无法解析。
 *  记录值：常用情况TXT 记录是用来做 SPF 反垃圾邮件的，最典型的 SPF 格式的 TXT 记录例子为“v=spf1 a mx ~all”，表示只有这个域名的 A 记录和 MX 记录中的 IP 地址有权限使用这个域名发送邮件。
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */

/**
 * TXT记录，一般指某个主机名或域名的标识和说明。如：admin IN TXT "管理员, 电话：XXXXXXXXXXX"，mail IN TXT "邮件主机，存放在xxx , 管理人：AAA"，Jim IN TXT "contact: abc@mailserver.com"，也就是说，通过设置TXT记录内容可以使别人更方便地联系到你。TXT 记录常用的方式还有做 SPF 记录（反垃圾邮件）和SSL证书的DNS验证等。
 * */
const isTXT = str => {
  return str.length > 255;
};

/**
 * NS【Name Server - 域名服务器记录】  => 将子域名指定其他DNS服务器解析
 *  使用场景：如果需要把子域名交给其他 DNS 服务商解析，就需要添加 NS 记录。
 *  主机记录：一般是指子域名的前缀（如需将子域名为www.dns-example.com 的解析授权给腾讯云解析的DNS服务器进行解析管理，只需要在主机记录处填写 www 即可）。
 *  解析线路：默认为必填项，未设置默认线路会导致部分用户无法解析。
 *  记录值：记录值为要授权的 DNS 服务器域名，例如腾讯云解析的DNS服务器域名f1g1ns1.dnspod.net。
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */

const isNS = str => {
  return isDomain(str);
};

/**
 * 字符串 转 数组
 * String to Array
 * */
const utilStringToArray = (str, separator) => {
  if (typeof str === 'string') {
    str = str.trim();
    return str.split(separator || /\s+/);
  }

  return [];
};

/**
 * CAA  =>  CA证书颁发机构授权校验
 *  使用场景： CAA(Certificate Authority Authorization)，即证书颁发机构授权。是一项新的可以添加到DNS记录中的额外字段,通过DNS机制创建CAA资源记录，可以限定域名颁发的证书和CA（证书颁发机构）之间的联系。未经授权的第三方尝试通过其他CA注册获取用于该域名的SSL/TLS证书将被拒绝。
 *  域名设置 CAA 记录，使网站所有者，可授权指定CA机构为自己的域名颁发证书，以防止HTTPS证书错误签发，从而提高网站安全性。
 *  CAA记录的格式为： [flag] [tag] [value]，是由一个标志字节的[flag]和一个被称为属性的[tag]-[value]（标签-值）对组成。您可以将多个CAA字段添加到域名的DNS记录中。
 * ------> [flag]：无符号整数（目前仅支持0和128），用于标志认证机构。通常情况下填0，表示如果颁发证书机构无法识别本条信息，就忽略。
 * ------> [tag]：支持 issue、issuewild 和 iodef。
 * --------> issue：CA授权单个证书颁发机构发布的 任何类型 域名证书。
 * --------> issuewild：CA授权单个证书颁发机构发布主机名的 通配符 证书。
 * --------> iodef：CA可以将违规的颁发记录URL发送给某个电子邮箱。
 * ------> [value]： CA的域名或用于违规通知的电子邮箱。
 */
// （如：0 issue "symantec.com"）

const isCAA = str => {
  const caaValueRegex = /^"[\w-:./@]{1,255}"$/;
  const caaTags = ['issue', 'issuewild', 'iodef'];
  const values = utilStringToArray(str);
  return values.length === 3 && isInRange(values[0], 0, 255) && caaTags.indexOf(values[1]) !== -1 && caaValueRegex.test(values[2]);
};

/**
 * SRV【服务定位（SRV）资源记录】  => 记录提供特定的服务的服务器
 *  使用场景： SRV 记录用来标识某台服务器使用了某个服务，常见于微软系统的目录管理。
 *  主机记录： 格式为 服务的名字.协议的类型。
 *    例如：_sip._tcp
 *  解析线路： 默认 为必选项，未设置默认线路会导致部分用户无法解析
 *  记录值： 格式为 【优先级】 【权重】 【端口】 目标地址 ，每项中间需以空格分隔。
 *    例如：0 5 5060 sipserver.example.com
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。

 * */

const isSRV = str => {
  const values = utilStringToArray(str);
  return values.length === 4 && isInRange(values[0], 0, 65535) && isInRange(values[1], 0, 65535) && isPort(values[2]) && isDomain(values[3]);
};

/**
 * A记录【Address】 => 将域名指向一个IPV4地址
 *  使用场景: 添加 A 记录可实现将域名指向 IP 地址。
 *  主机记录：一般是指子域名的前缀（如需创建子域名为www.dns-example.com, 主机记录输入 www；如需实现dns-example.com，主机记录输入 @）。
 *  解析线路：选择 默认 （默认为必选项，如未设置会导致部分用户无法访问 )。
 *  记录值：记录值为 IP 地址，填写 IPv4 地址。
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */

const isA = str => {
  return isIPv4(str);
};

/**
 * AAAA【AAAA record】  => 将域名指向一个IPV6地址
 * 使用场景：当预期是实现访问者通过 IPv6 地址访问网站，可以使用 AAAA 记录实现。
 * 主机记录：一般是指子域名的前缀（如需创建子域名为www.dns-example.com, 主机记录输入 www；如需实现dns-example.com，主机记录输入 @）
 * 解析线路：默认为必选项，未设置会导致部分用户无法访问；
 * 记录值：记录值为IP地址，填写 IPV6 地址
 * TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */

const isAAAA = str => {
  return isIPv6(str);
};

/**
 * CNAME【别名解析 - Canonical Name】  => 将域名指向另外一个域名
 *  使用场景: 当需要将域名指向另一个域名，再由另一个域名提供 IP 地址，就需要添加 CNAME 记录，最常用到 CNAME 的场景包括做 CDN、企业邮箱、全局流量管理等。
 *  主机记录：一般是指子域名的前缀（如需创建子域名为www.dns-example.com的解析, 主机记录输入“ www”；如需实现dns-example.com的解析，主机记录输入“@”）
 *  解析线路：默认为必填项，否则会导致部分用户无法解析。
 *  记录值：记录值为 CNAME 指向的域名，只可以填写域名。
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */

const isCNAME = str => {
  return isDomain(str);
};

/**
 * 域名解析记录公共校验
 *
 * */
exports.EnumRecordType = void 0;
/**
 * 域名解析记录公共校验
 * @param[str] 校验值
 * @param[type] 校验类型
 * */

(function (EnumRecordType) {
  EnumRecordType["A"] = "A";
  EnumRecordType["AAAA"] = "AAAA";
  EnumRecordType["NS"] = "NS";
  EnumRecordType["MX"] = "MX";
  EnumRecordType["CNAME"] = "CNAME";
  EnumRecordType["CAA"] = "CAA";
  EnumRecordType["SRV"] = "SRV";
  EnumRecordType["TXT"] = "TXT";
})(exports.EnumRecordType || (exports.EnumRecordType = {}));

const isRdata = (str, type) => {
  if (typeof str !== "string") {
    return false;
  }

  switch (type.toUpperCase()) {
    case exports.EnumRecordType.A:
      return isA(str);

    case exports.EnumRecordType.AAAA:
      return isAAAA(str);

    case exports.EnumRecordType.CAA:
      return isCAA(str);

    case exports.EnumRecordType.CNAME:
      return isCNAME(str);

    case exports.EnumRecordType.MX:
      return isMX(str);

    case exports.EnumRecordType.NS:
      return isNS(str);

    case exports.EnumRecordType.SRV:
      return isSRV(str);

    case exports.EnumRecordType.TXT:
      return isTXT(str);

    default:
      return false;
  }
};

/**
 * 主机合法性校验
 * */

const isHost = str => {
  const specialHosts = '@';
  return str.indexOf(specialHosts) > -1 || isFQDN(str, {
    // 是否包含TLD
    require_tld: true,
    // 是否允许包含下划线
    allow_underscores: true,
    // 是否允许 . 号结尾
    allow_trailing_dot: false,
    // 是否允许数字TLD号结尾
    allow_numeric_tld: false,
    // 是否运通配符 *
    allow_wildcard: false
  });
};

/**
 * TTL【Time-To-Live】 => 为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *  TTL值是指全国各地的localdns服务器中缓存解析结果的时间周期。
 *  1 . 当各地的localdns服务器接接收到解析请求查询时，就会向权威DNS（例如云解析DNS）发起解析请求查询，获取到解析结果。
 *  2 . localdns会将查询到的解析结果，保存到本地一段时间。保存的这个时间周期，就是根据TTL设置而来的。在保存的这个时间周期内，如果各地localdns再接收到此域名的解析请求查询，是不会再向权威DNS发起请求查询的，而是直接将本地保存的解析结果返回给用户。
 *  3 . 当localdns本地缓存的时间到期后，就会清除该解析记录的缓存结果，清除后，如果各地localdns再接收到此域名的解析请求查询，则会重新向权威DNS（例如云解析DNS）发起解析请求查询，获取最新的解析结果。
 *
 *  */

const isTTL = (str, maxTTL) => {
  if (!isNumber(str)) {
    return false;
  }

  if (isNumber(str)) {
    let ttl = Number(str);
    return ttl > 0 && ttl <= maxTTL;
  }

  return false;
};

const isZone = str => {
  const rootZone = '.';
  return rootZone === str || isDomain(str);
};

/**
 * Better way to handle type checking
 * null, {}, array and date are objects, which confuses
 */
const utilTypeOf = input => {
  const rawObject = Object.prototype.toString.call(input).toLowerCase();
  const typeOfRegex = /\[object (.*)]/g; // @ts-ignore

  return typeOfRegex.exec(rawObject)[1];
};

/**
 * 判断函数参数是否为有效数据类型
 * @param[str] any 参数
 * @param[types] [any] 支持参数类型, 默认支持 ['string', 'number']
 * */

const isValidParamsTypes = (str, types) => {
  let defaultTypes = ['string', 'number'];

  if (utilTypeOf(types) !== 'array') {
    types = defaultTypes;
  }

  return types && types.includes(utilTypeOf(str));
};

/**
 * 银行卡号合法性验证
 * @param[str] any 银行卡
 * description： 15位或者16位或者19位
 * */

const IsBankCard = str => {
  // 建行16、19，农行19，工行19、交通17、民生16、兴业18、招行12、16、19
  const reg = /^([1-9]{1})(\d{11}|\d{15}|\d{16}|\d{17}|\d{18})$/;

  if (!isValidParamsTypes(str)) {
    return false;
  }

  return reg.test(str);
};

/**
 * 布尔值判断
 * @param[str]: 布尔值
 * @param[extend]: 是否支持拓展
 * @param[trueBooleans]: 拓展布尔值
 * */

const isBooleanTrue = (str, extend, trueBooleans = ['yes', 'true', '1']) => {
  const type_str = typeof str;

  if (type_str === 'boolean') {
    return str;
  }

  if (!isValidParamsTypes(str)) {
    return false;
  }

  if (extend) {
    str = `${str}`.toLowerCase();
    return trueBooleans.includes(str);
  }
};

/**
 * 子节长度判断
 *@param[str] any 字符串
 *@param[option] 参数 {min: number, max:number}
 * */
function isByteLength(str, options) {
  if (typeof str !== "string") {
    return false;
  }

  str += '';
  let min;
  let max;

  if (typeof options === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  const len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

/**
 *
 * 手机格式校验
 * @param[str]: 手机号
 * */
const isCellPhone = function (str) {
  try {
    const reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    return reg.test(str);
  } catch (err) {
    return false;
  }
};

/* eslint-disable max-len */
const creditCard = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;
/* eslint-enable max-len */

/**
 * 信用卡格式验证
 * @param[str] 校验字符串
 * */

function isCreditCard(str) {
  if (typeof str !== "string") {
    return false;
  }

  str += str;
  const sanitized = str.replace(/[- ]+/g, '');

  if (!creditCard.test(sanitized)) {
    return false;
  }

  let sum = 0;
  let digit;
  let tmpNum;
  let shouldDouble;

  for (let i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return !!(sum % 10 === 0 ? sanitized : false);
}

/**
 *
 * 邮箱格式正则校验
 * @param[str] 邮箱
 * */
const isEmail = str => {
  if (typeof str !== "string") {
    return false;
  } // 用户名@主机名”


  const reg = /^(?!.*?[._-]{2})[a-z0-9][a-z0-9._-]{0,62}[a-z0-9]@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]{2,63}$/i;
  return reg.test(str);
};

/**
 * 以太坊地址校验
 * @param[str] 以太坊地址
 * */
const isEthereumAddress = str => {
  const ethReg = /^(0x)[0-9a-f]{40}$/i;

  if (typeof str !== "string") {
    return false;
  }

  str += '';
  return ethReg.test(str);
};

/**
 *
 * 固定电话格式校验
 * @param[str]: 电话
 * eg: (0827-7977654) || (7977654)
 * */
const isFixedPhone = str => {
  const reg = /^(\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(str);
};

/**
 * 是否为整数判断
 * @param[str] 数值
 * @param[options] 参数
 *
 * */

function isInt(str, options) {
  if (!isValidParamsTypes(str)) {
    return false;
  }

  const int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
  const intLeadingZeroes = /^[-+]?[0-9]+$/;
  options = options || {}; // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.

  let regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt

  let minCheckPassed = !options.hasOwnProperty('min') || typeof options.min !== 'undefined' && str >= options.min;
  let maxCheckPassed = !options.hasOwnProperty('max') || typeof options.max !== 'undefined' && str <= options.max;
  let ltCheckPassed = !options.hasOwnProperty('lt') || typeof options.lt !== 'undefined' && str < options.lt;
  let gtCheckPassed = !options.hasOwnProperty('gt') || typeof options.gt !== 'undefined' && str > options.gt;
  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}

/**
 * 证件号码验证函数
 *
 * */

const identityCardValidators = {
  PL: str => {
    const weightOfDigits = {
      1: 1,
      2: 3,
      3: 7,
      4: 9,
      5: 1,
      6: 3,
      7: 7,
      8: 9,
      9: 1,
      10: 3,
      11: 0
    };

    if (str != null && str.length === 11 && isInt(str, {
      allow_leading_zeroes: true
    })) {
      const digits = str.split('').slice(0, -1);
      const sum = digits.reduce((acc, digit, index) => acc + Number(digit) * weightOfDigits[index + 1], 0);
      const modulo = sum % 10;
      const lastDigit = Number(str.charAt(str.length - 1));

      if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) {
        return true;
      }
    }

    return false;
  },
  ES: str => {
    const DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    const charsValue = {
      X: 0,
      Y: 1,
      Z: 2
    };
    const controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; // sanitize user input

    const sanitized = str.trim().toUpperCase(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    } // validate the control digit


    const number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, char => charsValue[char]); // @ts-ignore

    return sanitized.endsWith(controlDigits[number % 23]);
  },
  FI: str => {
    // https://dvv.fi/en/personal-identity-code#:~:text=control%20character%20for%20a-,personal,-identity%20code%20calculated
    if (str.length !== 11) {
      return false;
    }

    if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) {
      return false;
    }

    const checkDigits = '0123456789ABCDEFHJKLMNPRSTUVWXY';
    const idAsNumber = parseInt(str.slice(0, 6), 10) * 1000 + parseInt(str.slice(7, 10), 10);
    const remainder = idAsNumber % 31;
    const checkDigit = checkDigits[remainder];
    return checkDigit === str.slice(10, 11);
  },
  IN: str => {
    const DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/; // multiplication table

    const d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]]; // permutation table

    const p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]]; // sanitize user input

    const sanitized = str.trim(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    }

    let c = 0;
    let invertedArray = sanitized.replace(/\s/g, '').split('').map(Number).reverse();
    invertedArray.forEach((val, i) => {
      c = d[c][p[i % 8][val]];
    });
    return c === 0;
  },
  IR: str => {
    if (!str.match(/^\d{10}$/)) return false;
    str = `0000${str}`.substr(str.length - 6);
    if (parseInt(str.substr(3, 6), 10) === 0) return false;
    const lastNumber = parseInt(str.substr(9, 1), 10);
    let sum = 0;

    for (let i = 0; i < 9; i++) {
      sum += parseInt(str.substr(i, 1), 10) * (10 - i);
    }

    sum %= 11;
    return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
  },
  IT: function IT(str) {
    if (str.length !== 9) return false;
    if (str === 'CA00000AA') return false; // https://it.wikipedia.org/wiki/Carta_d%27identit%C3%A0_elettronica_italiana

    return str.search(/C[A-Z]\d{5}[A-Z]{2}/is) > -1;
  },
  NO: str => {
    const sanitized = str.trim();
    if (isNaN(Number(sanitized))) return false;
    if (sanitized.length !== 11) return false;
    if (sanitized === '00000000000') return false; // https://no.wikipedia.org/wiki/F%C3%B8dselsnummer

    const f = sanitized.split('').map(Number);
    let k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
    let k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
    if (k1 !== f[9] || k2 !== f[10]) return false;
    return true;
  },
  TH: str => {
    if (!str.match(/^[1-8]\d{12}$/)) return false; // validate check digit

    let sum = 0;

    for (let i = 0; i < 12; i++) {
      sum += parseInt(str[i], 10) * (13 - i);
    }

    return str[12] === ((11 - sum % 11) % 10).toString();
  },
  LK: str => {
    const old_nic = /^[1-9]\d{8}[vx]$/i;
    const new_nic = /^[1-9]\d{11}$/i;
    if (str.length === 10 && old_nic.test(str)) return true;else if (str.length === 12 && new_nic.test(str)) return true;
    return false;
  },
  'he-IL': str => {
    const DNI = /^\d{9}$/; // sanitize user input

    const sanitized = str.trim(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    }

    const id = sanitized;
    let sum = 0,
        incNum;

    for (let i = 0; i < id.length; i++) {
      incNum = Number(id[i]) * (i % 2 + 1); // Multiply number by 1 or 2

      sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total
    }

    return sum % 10 === 0;
  },
  'ar-LY': str => {
    // Libya National Identity Number NIN is 12 digits, the first digit is either 1 or 2
    const NIN = /^(1|2)\d{11}$/; // sanitize user input

    const sanitized = str.trim(); // validate the data structure

    if (!NIN.test(sanitized)) {
      return false;
    }

    return true;
  },
  'ar-TN': str => {
    const DNI = /^\d{8}$/; // sanitize user input

    const sanitized = str.trim(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    }

    return true;
  },
  'zh-CN': str => {
    const provincesAndCities = ['11', // 北京
    '12', // 天津
    '13', // 河北
    '14', // 山西
    '15', // 内蒙古
    '21', // 辽宁
    '22', // 吉林
    '23', // 黑龙江
    '31', // 上海
    '32', // 江苏
    '33', // 浙江
    '34', // 安徽
    '35', // 福建
    '36', // 江西
    '37', // 山东
    '41', // 河南
    '42', // 湖北
    '43', // 湖南
    '44', // 广东
    '45', // 广西
    '46', // 海南
    '50', // 重庆
    '51', // 四川
    '52', // 贵州
    '53', // 云南
    '54', // 西藏
    '61', // 陕西
    '62', // 甘肃
    '63', // 青海
    '64', // 宁夏
    '65', // 新疆
    '71', // 台湾
    '81', // 香港
    '82', // 澳门
    '91' // 国外
    ];
    const powers = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'];
    const parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    const checkAddressCode = addressCode => provincesAndCities.includes(addressCode);

    const checkBirthDayCode = birDayCode => {
      const yyyy = parseInt(birDayCode.substring(0, 4), 10);
      const mm = parseInt(birDayCode.substring(4, 6), 10);
      const dd = parseInt(birDayCode.substring(6), 10);
      const xdata = new Date(yyyy, mm - 1, dd);

      if (xdata > new Date()) {
        return false; // eslint-disable-next-line max-len
      } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
        return true;
      }

      return false;
    };

    const getParityBit = idCardNo => {
      let id17 = idCardNo.substring(0, 17);
      let power = 0;

      for (let i = 0; i < 17; i++) {
        power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
      }

      let mod = power % 11;
      return parityBit[mod];
    };

    const checkParityBit = idCardNo => getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();

    const check15IdCardNo = idCardNo => {
      let check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
      if (!check) return false;
      let addressCode = idCardNo.substring(0, 2);
      check = checkAddressCode(addressCode);
      if (!check) return false;
      let birDayCode = `19${idCardNo.substring(6, 12)}`;
      check = checkBirthDayCode(birDayCode);
      if (!check) return false;
      return true;
    };

    const check18IdCardNo = idCardNo => {
      let check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
      if (!check) return false;
      let addressCode = idCardNo.substring(0, 2);
      check = checkAddressCode(addressCode);
      if (!check) return false;
      let birDayCode = idCardNo.substring(6, 14);
      check = checkBirthDayCode(birDayCode);
      if (!check) return false;
      return checkParityBit(idCardNo);
    };

    const checkIdCardNo = idCardNo => {
      let check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
      if (!check) return false;

      if (idCardNo.length === 15) {
        return check15IdCardNo(idCardNo);
      }

      return check18IdCardNo(idCardNo);
    };

    return checkIdCardNo(str);
  },
  'zh-TW': str => {
    const ALPHABET_CODES = {
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      G: 16,
      H: 17,
      I: 34,
      J: 18,
      K: 19,
      L: 20,
      M: 21,
      N: 22,
      O: 35,
      P: 23,
      Q: 24,
      R: 25,
      S: 26,
      T: 27,
      U: 28,
      V: 29,
      W: 32,
      X: 30,
      Y: 31,
      Z: 33
    };
    const sanitized = str.trim().toUpperCase();
    if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false; // @ts-ignore

    return Array.from(sanitized).reduce((sum, number, index) => {
      if (index === 0) {
        const code = ALPHABET_CODES[number];
        return code % 10 * 9 + Math.floor(code / 10);
      }

      if (index === 9) {
        return (10 - sum % 10 - Number(number)) % 10 === 0;
      }

      return sum + Number(number) * (9 - index);
    }, 0);
  }
};
/*
// 身份证
export function validateIDCard(str) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(str)
}
*/

/**
 * isIdentityCard
 * @param[str] any 证件号码
 * @param[locale] string 证件类型
 * */

function isIdentityCard(str, locale) {
  if (!isValidParamsTypes(str)) {
    return false;
  }

  str = `${str}`;

  if (locale in identityCardValidators) {
    return identityCardValidators[locale](str);
  } else if (locale === 'any') {
    for (const key in identityCardValidators) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      if (identityCardValidators.hasOwnProperty(key)) {
        const validator = identityCardValidators[key];

        if (validator(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error(`Invalid locale '${locale}'`);
}

/**
 * IMEI校验
 * @param[str] imei
 * @param[allow_hyphens] boolean 允许连字符
 * */

function isIMEI(str, allow_hyphens = false) {
  if (!isValidParamsTypes(str)) {
    return false;
  }

  str = `${str}`;
  let imeiRegexWithoutHypens = /^[0-9]{15}$/;
  let imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/; // default regex for checking imei is the one without hyphens

  let imeiRegex = imeiRegexWithoutHypens;

  if (allow_hyphens) {
    imeiRegex = imeiRegexWithHypens;
  }

  if (!imeiRegex.test(str)) {
    return false;
  }

  str = str.replace(/-/g, '');
  let sum = 0,
      mul = 2,
      l = 14;

  for (let i = 0; i < l; i++) {
    const digit = str.substring(l - i - 1, l - i);
    const tp = parseInt(digit, 10) * mul;

    if (tp >= 10) {
      sum += tp % 10 + 1;
    } else {
      sum += tp;
    }

    if (mul === 1) {
      mul += 1;
    } else {
      mul -= 1;
    }
  }

  const chk = (10 - sum % 10) % 10;
  return chk === parseInt(str.substring(14, 15), 10);
}

/**
 * 字符串格式判断
 * */
const utilToString = input => {
  if (typeof input === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }

  return String(input);
};

/**
 * 是否包含数据判断
 * @param[str] 要判断的数据
 * @param[options] 匹配的数据
 * */

function isIn(str, options) {
  if (!isValidParamsTypes(str)) {
    return false;
  }

  let i;
  let options_type = utilTypeOf(options);

  if (options_type === 'array') {
    const array = [];

    for (i in options) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = utilToString(options[i]);
      }
    }

    return array.indexOf(str) >= 0;
  } else if (options_type === 'object') {
    return options.hasOwnProperty(str);
  } else if (options_type === 'function') {
    return options.indexOf(str) >= 0;
  }

  return false;
}

/**
 * 邮编格式验证
 * @param[str] 邮编
 * @param[locale] 邮编所属地
 * */

function isPostalCode(str, locale) {
  if (!isValidParamsTypes(str)) {
    return false;
  } // common patterns


  const threeDigit = /^\d{3}$/;
  const fourDigit = /^\d{4}$/;
  const fiveDigit = /^\d{5}$/;
  const sixDigit = /^\d{6}$/;
  const patterns = {
    AD: /^AD\d{3}$/,
    AT: fourDigit,
    AU: fourDigit,
    AZ: /^AZ\d{4}$/,
    BE: fourDigit,
    BG: fourDigit,
    BR: /^\d{5}-\d{3}$/,
    BY: /2[1-4]{1}\d{4}$/,
    CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    CH: fourDigit,
    CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
    CZ: /^\d{3}\s?\d{2}$/,
    DE: fiveDigit,
    DK: fourDigit,
    DO: fiveDigit,
    DZ: fiveDigit,
    EE: fiveDigit,
    ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
    FI: fiveDigit,
    FR: /^\d{2}\s?\d{3}$/,
    GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
    GR: /^\d{3}\s?\d{2}$/,
    HR: /^([1-5]\d{4}$)/,
    HT: /^HT\d{4}$/,
    HU: fourDigit,
    ID: fiveDigit,
    IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
    IL: /^(\d{5}|\d{7})$/,
    IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
    IR: /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
    IS: threeDigit,
    IT: fiveDigit,
    JP: /^\d{3}\-\d{4}$/,
    KE: fiveDigit,
    KR: /^(\d{5}|\d{6})$/,
    LI: /^(948[5-9]|949[0-7])$/,
    LT: /^LT\-\d{5}$/,
    LU: fourDigit,
    LV: /^LV\-\d{4}$/,
    LK: fiveDigit,
    MX: fiveDigit,
    MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
    MY: fiveDigit,
    NL: /^\d{4}\s?[a-z]{2}$/i,
    NO: fourDigit,
    NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
    NZ: fourDigit,
    PL: /^\d{2}\-\d{3}$/,
    PR: /^00[679]\d{2}([ -]\d{4})?$/,
    PT: /^\d{4}\-\d{3}?$/,
    RO: sixDigit,
    RU: sixDigit,
    SA: fiveDigit,
    SE: /^[1-9]\d{2}\s?\d{2}$/,
    SG: sixDigit,
    SI: fourDigit,
    SK: /^\d{3}\s?\d{2}$/,
    TH: fiveDigit,
    TN: fourDigit,
    TW: /^\d{3}(\d{2})?$/,
    UA: fiveDigit,
    US: /^\d{5}(-\d{4})?$/,
    ZA: fourDigit,
    ZM: fiveDigit
  };

  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (const key in patterns) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if (patterns.hasOwnProperty(key)) {
        const pattern = patterns[key];

        if (pattern.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error(`Invalid locale '${locale}'`);
}

/**
 * 密码强度验证
 *
 * */
const upperCaseRegex = /^[A-Z]$/;
const lowerCaseRegex = /^[a-z]$/;
const numberRegex = /^[0-9]$/;
const symbolRegex = /^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
const defaultOptions = {
  // 最小长度
  minLength: 8,
  // 最少小写字母个数
  minLowercase: 1,
  // 最少大写字母个数
  minUppercase: 1,
  // 最少数字个数
  minNumbers: 1,
  // 最少特殊符号个数
  minSymbols: 1,
  // 返回密码强度评分
  returnScore: false,
  pointsPerUnique: 1,
  pointsPerRepeat: 0.5,
  pointsForContainingLower: 10,
  pointsForContainingUpper: 10,
  pointsForContainingNumber: 10,
  pointsForContainingSymbol: 10
};
/* Counts number of occurrences of each char in a string
 * could be moved to util/ ?
*/

function countChars(str) {
  let result = {};
  Array.from(str).forEach(char => {
    let curVal = result[char];

    if (curVal) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  });
  return result;
}
/* Return information about a password */


function analyzePassword(password) {
  let charMap = countChars(password);
  let analysis = {
    length: password.length,
    uniqueChars: Object.keys(charMap).length,
    uppercaseCount: 0,
    lowercaseCount: 0,
    numberCount: 0,
    symbolCount: 0
  };
  Object.keys(charMap).forEach(char => {
    /* istanbul ignore else */
    if (upperCaseRegex.test(char)) {
      analysis.uppercaseCount += charMap[char];
    } else if (lowerCaseRegex.test(char)) {
      analysis.lowercaseCount += charMap[char];
    } else if (numberRegex.test(char)) {
      analysis.numberCount += charMap[char];
    } else if (symbolRegex.test(char)) {
      analysis.symbolCount += charMap[char];
    }
  });
  return analysis;
}

function scorePassword(analysis, scoringOptions) {
  let points = 0;
  points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
  points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;

  if (analysis.lowercaseCount > 0) {
    points += scoringOptions.pointsForContainingLower;
  }

  if (analysis.uppercaseCount > 0) {
    points += scoringOptions.pointsForContainingUpper;
  }

  if (analysis.numberCount > 0) {
    points += scoringOptions.pointsForContainingNumber;
  }

  if (analysis.symbolCount > 0) {
    points += scoringOptions.pointsForContainingSymbol;
  }

  return points;
}
/**
 * 密码强度验证
 *
 * @param[str]  密码
 * @param[options]  验证参数
 * */


function isStrongPassword(str, options) {
  if (!isValidParamsTypes(str)) {
    return false;
  }

  const analysis = analyzePassword(str);
  const new_options = { ...defaultOptions,
    ...options
  };

  if (new_options.returnScore) {
    return scorePassword(analysis, new_options);
  }

  return analysis.length >= new_options.minLength && analysis.lowercaseCount >= new_options.minLowercase && analysis.uppercaseCount >= new_options.minUppercase && analysis.numberCount >= new_options.minNumbers && analysis.symbolCount >= new_options.minSymbols;
}

/**
 * 纳税人识别码 合法性验证
 * @param[str] any 识别码
 * */

const isTaxpayerNo = str => {
  const reg = /^[0-9A-Z]{15,18}$/i;

  if (!isValidParamsTypes(str)) {
    return false;
  }

  return reg.test(str);
};

/**
 * URL 正在校验
 *
 * */
/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
require_port - if set as true isURL will check if port is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

*/

/**
 * URL合法性校验
 * @param[url]  url
 * @param[options] 校验参数
 * */
function isURL(url, options) {
  const default_url_options = {
    protocols: ['http', 'https', 'ftp'],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_port: false,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
    allow_fragments: true,
    allow_query_components: true,
    validate_length: true
  };
  const wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
  }

  function checkHost(host, matches) {
    for (let i = 0; i < matches.length; i++) {
      let match = matches[i]; // @ts-ignore

      if (host === match || isRegExp(match) && match.test(host)) {
        return true;
      }
    }

    return false;
  }

  if (typeof url !== "string") {
    return false;
  }

  if (!url || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  const new_options = { ...options,
    ...default_url_options
  };

  if (options.validate_length && url.length >= 2083) {
    return false;
  }

  if (!options.allow_fragments && url.includes('#')) {
    return false;
  }

  if (!options.allow_query_components && (url.includes('?') || url.includes('&'))) {
    return false;
  }

  let protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (new_options.require_valid_protocol && new_options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (new_options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!new_options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.substr(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !new_options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (new_options.disallow_auth) {
      return false;
    }

    if (split[0] === '') {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }

    const [user, password] = auth.split(':');

    if (user === '' && password === '') {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  const ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null && port_str.length > 0) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  } else if (new_options.require_port) {
    return false;
  }

  if (new_options.host_whitelist) {
    return checkHost(host, new_options.host_whitelist);
  }

  if (!isIP(host) && !isFQDN(host, new_options) && (!ipv6 || !isIPv6(ipv6))) {
    return false;
  }

  host = host || ipv6;
  return !(new_options.host_blacklist && checkHost(host, new_options.host_blacklist));
}

/**
 * uuid 合法性校验
 * @param[str]  url
 * @param[version] uuid版本
 * */

function isUUID(str, version) {
  const uuid = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
  };

  if (!isValidParamsTypes(str)) {
    return false;
  }

  const pattern = uuid[![undefined, null].includes(version) ? version : 'all'];
  return !!pattern && pattern.test(str);
}

exports.IsBankCard = IsBankCard;
exports.isBooleanTrue = isBooleanTrue;
exports.isByteLength = isByteLength;
exports.isCellPhone = isCellPhone;
exports.isCreditCard = isCreditCard;
exports.isDomain = isDomain;
exports.isEmail = isEmail;
exports.isEthereumAddress = isEthereumAddress;
exports.isFQDN = isFQDN;
exports.isFixedPhone = isFixedPhone;
exports.isHost = isHost;
exports.isIMEI = isIMEI;
exports.isIP = isIP;
exports.isIPv4 = isIPv4;
exports.isIPv6 = isIPv6;
exports.isIdentityCard = isIdentityCard;
exports.isIn = isIn;
exports.isInRange = isInRange;
exports.isInt = isInt;
exports.isPort = isPort;
exports.isPostalCode = isPostalCode;
exports.isRdata = isRdata;
exports.isStrongPassword = isStrongPassword;
exports.isTTL = isTTL;
exports.isTaxpayerNo = isTaxpayerNo;
exports.isURL = isURL;
exports.isUUID = isUUID;
exports.isZone = isZone;
exports.version = version;
//# sourceMappingURL=index.js.map
