/**! 
 * varian-validator v0.04 
 * Lightweight JavaScript form validation. 
 * 
 * Copyright (c) 2022 ji sen  (https://github.com/ijisen) 
 * https://github.com/ijisen/varian-validator#readme 
 * Licensed under the ISC license 
 */

var version = "0.04";

const Button = 'export default Button;';

/**
 * 标签语义化
 *
 * */
const escape = str => {
  if (typeof str !== "string") {
    return false;
  }

  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
};

let EnumLanguageType;

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
 * Error codes and messages.
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
 * 域名格式校验
 * FQDN：(Fully Qualified Domain Name)全限定域名：同时带有主机名和域名的名称。（通过符号“.”）
 * 例如：主机名是bigserver,域名是mycompany.com,那么FQDN就是bigserver.mycompany.com。 [1]
 * str: m.zdns.cn || zdns.cn. || h.m.zdns.cn.
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
function isFQDN(str, options = {}, lang) {
  let errorMessage = errorCodes[setErrorCodeLang(lang)];

  if (typeof str !== 'string' || str.replace(' ', '') === '') {
    return {
      success: false,
      message: errorMessage.DOMAIN_IS_EMPTY
    };
  }

  options = { ...default_fqdn_options,
    ...options
  };
  console.log(options);

  if (!str) {
    return {
      success: false,
      message: errorMessage.DOMAIN_TOO_SHORT
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
 * MX【邮件交换记录 - Mail Exchanger】  => 将域名指向邮件服务器地址
 *  使用场景：设置邮箱时，让邮箱能收到邮件，就需要添加 MX 记录。MX全称为mail exchanger，用于电子邮件系统发邮件时根据收信人的地址后缀来定位邮件服务器。例如，当有人发邮件给“vincen@example.com”时，系统将对“example.com”进行DNS中的MX记录解析。如果MX记录存在，系统就根据MX记录的优先级，将邮件转发到与该MX相应的邮件服务器上。
 *  主机记录：一般是指子域名的前缀，（要做xxx@dns-example.com的邮箱，所以主机记录输入“ @ ”；要做xxx@mail.dns-example.com，如果主机记录填 mail）。
 *  解析线路：默认为必填项，否则会导致部分用户无法解析，邮件无法收取；
 *  记录值：输入内容通过联系邮箱注册商提供。例如阿里云邮提供的需要配置的解析记录值是 mx1.qiye.aliyun.com；
 *  MX优先级：输入内容通过联系邮箱注册商提供，MX 优先级的数值越低，优先级别就越高（如下图，邮件会先尝试发送到 MX 优先级为 5 的mx1.qiye.aliyun.com，如果尝试失败，才会发送到 MX 优先级为10 的mx2.qiye.aliyun.com）。
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */
var isMX = (str => {
  if (!str) {
    return false;
  }

  return isDomain(str);
});

const v4Seg = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
const v4Str = `(${v4Seg}[.]){3}${v4Seg}`;
const IPv4Reg = new RegExp(`^${v4Str}$`); // IPv6 Segment

const v6Seg = '(?:[0-9a-fA-F]{1,4})';
const IPv6Reg = new RegExp('^(' + `(?:${v6Seg}:){7}(?:${v6Seg}|:)|` + `(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|` + `(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|` + `(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|` + `(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|` + `(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|` + `(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|` + `(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:))` + ')(%[0-9a-zA-Z-.:]{1,})?$');
const isIPv4 = s => {
  return IPv4Reg.test(s);
};
const isIPv6 = s => {
  return IPv6Reg.test(s);
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
var isTXT = (str => {
  return str.length > 255;
});

/**
 * NS【Name Server - 域名服务器记录】  => 将子域名指定其他DNS服务器解析
 *  使用场景：如果需要把子域名交给其他 DNS 服务商解析，就需要添加 NS 记录。
 *  主机记录：一般是指子域名的前缀（如需将子域名为www.dns-example.com 的解析授权给腾讯云解析的DNS服务器进行解析管理，只需要在主机记录处填写 www 即可）。
 *  解析线路：默认为必填项，未设置默认线路会导致部分用户无法解析。
 *  记录值：记录值为要授权的 DNS 服务器域名，例如腾讯云解析的DNS服务器域名f1g1ns1.dnspod.net。
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */
var isNS = (str => {
  return isDomain(str);
});

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
 * */

var isInRange = ((str, min, max) => {
  if (!isNumber(str)) {
    return false;
  }

  const val = Number(str);
  return val >= min && val <= max;
});

/**
 * 字符串 转 数组
 * String to Array
 * */
const stringToArray = (str, separator) => {
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

var isCAA = (str => {
  const caaValueRegex = /^"[\w-:./@]{1,255}"$/;
  const caaTags = ['issue', 'issuewild', 'iodef'];
  const values = stringToArray(str);
  return values.length === 3 && isInRange(values[0], 0, 255) && caaTags.indexOf(values[1]) !== -1 && caaValueRegex.test(values[2]);
});

/**
 * 端口号校验
 * */
var isPort = (str => {
  return isInRange(str, 1, 65535);
});

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

var isSRV = (str => {
  const values = stringToArray(str);
  return values.length === 4 && isInRange(values[0], 0, 65535) && isInRange(values[1], 0, 65535) && isPort(values[2]) && isDomain(values[3]);
});

let EnumRecordType; // is rdata

(function (EnumRecordType) {
  EnumRecordType["A"] = "A";
  EnumRecordType["AAAA"] = "AAAA";
  EnumRecordType["NS"] = "NS";
  EnumRecordType["MX"] = "MX";
  EnumRecordType["CNAME"] = "CNAME";
  EnumRecordType["CAA"] = "CAA";
  EnumRecordType["SRV"] = "SRV";
  EnumRecordType["TXT"] = "TXT";
})(EnumRecordType || (EnumRecordType = {}));

const isRdata = (str, type) => {
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

export { Button, escape, isDomain, isFQDN, isRdata, version };
//# sourceMappingURL=index.js.map
