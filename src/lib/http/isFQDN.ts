import assertString from '@/lib/util/assertString';
import { IsFQDNConfig } from "./http.d";

//
// Error codes and messages.
//
export const errorCodes = {
  DOMAIN_TOO_SHORT: 'Domain name too short.',
  DOMAIN_TOO_LONG: 'Domain name too long. It should be no more than 255 chars.',
  LABEL_STARTS_WITH_DASH: 'Domain name label can not start with a dash.',
  LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
  LABEL_TOO_LONG: 'Domain name label should be at most 63 chars long.',
  LABEL_TOO_SHORT: 'Domain name label should be at least 1 character long.',
  LABEL_INVALID_CHARS: 'Domain name label can only contain alphanumeric characters or dashes.'
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
  // 是否允许数字TLD号结尾
  allow_numeric_tld: false,
  // 是否运通配符 *
  allow_wildcard: false
};

export default function isFQDN(str: string, options:  Partial<IsFQDNConfig>) {
  assertString(str);
  console.log(options);
  options = {
    ...default_fqdn_options,
    ...options
  };

  if(!str) {
    return false
  }

  const len = str.length
  if(len > 255) {
    return false
  }

  /* Remove the optional trailing dot before checking validity */
  if(options.allow_trailing_dot && str[len - 1] === '.') {
    str = str.substring(0, len - 1);
  }

  /* Remove the optional wildcard before checking validity */
  if(options.allow_wildcard && str.indexOf('*.') === 0) {
    str = str.substring(2);
  }

  const nodes = str.split('.');
  console.log(nodes);
  const node_len = nodes.length;
  const max_node = 127;
  if(options.require_tld) {
    // disallow fqdns without tld
    if(node_len < 2) {
      return false;
    }

    if(node_len > max_node) {
      return false;
    }

    const tld = nodes[node_len - 1];
    // reject numeric TLDs
    if(!options.allow_numeric_tld && /^\d+$/.test(tld)) {
      return false;
    }

    if(!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
  } else {
    if(node_len > max_node - 1) {
      return false;
    }
  }

  return nodes.every((part) => {
    if(part.length > 63) {
      return false;
    }

    if(!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }

    // disallow full-width chars
    if(/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    // disallow node starting or ending with hyphen
    if(/^-|-$/.test(part)) {
      return false;
    }

    return !(!options.allow_underscores && /_/.test(part));

  });
}
