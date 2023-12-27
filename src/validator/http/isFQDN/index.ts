import setErrorCodeLang from '@/utils/setErrorCodeLang';
import filterStringSpace from '@/utils/filterStringSpace';

import errorCodes from "./errorCodes";
import tldValidator from "./tldValidator";
import domainLabelValidator from "./domainLabelValidator";

import { IsFQDNConfig, isFQDNRes } from "@/validator/http/typings.d";

const setMaxNode = (num: any, require_tld: boolean) => {
  let min_node = 1;
  let max_node = 126;
  if(require_tld) {
    min_node = 2;
    max_node = max_node + 1;
  }
  if(typeof num === 'number') {
    if(num < min_node) {
      return min_node
    } else {
      if(num > max_node) {
        return max_node
      }
    }
    return num
  }
  return max_node
}

/**
 * 域名格式校验 - 默认配置参数
 * FQDN：(Fully Qualified Domain Name)全限定域名：同时带有主机名和域名的名称。（通过符号“.”）
 * 例如：主机名是bigserver,域名是mycompany.com,那么FQDN就是bigserver.mycompany.com。 [1]
 * str: m.zdns.cn || zdns.cn. || h.m.zdns.cn.
 *
 * */
const default_fqdn_options = {
  // 是否包含TLD
  require_tld: true,
  // 域名最大节点数
  // a.com
  // a.com.cn
  // a.baidu.com.cn
  max_node: 127,
  // 是否允许包含下划线
  allow_underscores: false,
  // 是否允许 . 号结尾
  allow_trailing_dot: false,
  // 是否允许纯数字TLD
  allow_numeric_tld: false,
  // 是否允许TLD包含 -
  allow_hyphen_tld: false,
  // 是否允许配符 *
  allow_wildcard: false,
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
const isFQDN = (str: any, option: Partial<IsFQDNConfig> = {}, lang?: string): isFQDNRes => {
  let errorMessage = errorCodes[setErrorCodeLang(lang)];
  str = filterStringSpace(str, true);
  option = {
    ...default_fqdn_options,
    ...option,
  };
  console.log(option);

  if(!str) {
    return {
      success: false,
      message: errorMessage.DOMAIN_IS_EMPTY,
    };
  }

  const len = str.length;
  if(len > 255) {
    return {
      success: false,
      message: errorMessage.DOMAIN_TOO_LONG,
    };
  }

  /* Remove the optional trailing dot before checking validity */
  if(option.allow_trailing_dot && str[len - 1] === '.') {
    str = str.substring(0, len - 1);
  }

  /* Remove the optional wildcard before checking validity */
  if(option.allow_wildcard && str.indexOf('*.') === 0) {
    str = str.substring(2);
  }

  const nodes = str.split('.');
  console.log(nodes);
  const node_len = nodes.length;
  let max_node = setMaxNode(option.max_node, option.require_tld || false);

  if(option.require_tld) {
    // 域名包含tld
    // 最小节点数据 = 2   a.com b.cn
    if(node_len < 2) {
      // 域名格式错误  zdns.cn
      return {
        success: false,
        message: errorMessage.DOMAIN_FORMAT_ERROR,
      };
    }

    if(node_len > max_node) {
      return {
        success: false,
        message: errorMessage.DOMAIN_FORMAT_ERROR,
      };
    }

    const tldResData = tldValidator({
      tld: nodes[node_len - 1],
      option: {
        allow_numeric_tld: option.allow_numeric_tld,
        allow_hyphen_tld: option.allow_hyphen_tld,
      },
      lang
    })
    if(!tldResData.success) {
      return tldResData
    }
  } else {
    // 域名不包含tld => 节点数量 = 最大节点数 - 1
    if(node_len > max_node) {
      return {
        success: false,
        message: errorMessage.DOMAIN_FORMAT_ERROR,
      };
    }
  }

  /** 域名关键词验证 */
  for (let i = 0; i < node_len; i++) {
    const label = nodes[i];
    if(!label) {
      return {
        success: false,
        message: errorMessage.DOMAIN_FORMAT_ERROR,
      };
    }
    const labelResData = domainLabelValidator({
      label: label,
      option: {
        allow_underscores: option.allow_underscores,
      },
      lang
    })
    if(!labelResData.success) {
      return labelResData
    }
  }

  return {
    success: true,
    message: '',
  };
}

export default isFQDN
