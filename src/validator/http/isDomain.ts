import isFQDN from './isFQDN';
import { IsFQDNConfig, isFQDNRes } from './typings.d';

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
const isDomain = (params: {
  str: string;
  lang?: string;
  config?: Partial<IsFQDNConfig>;
} = { str: '' }): isFQDNRes => {
  const { str, lang, config = {} } = params;
  return isFQDN(str, {
    // 是否包含TLD
    require_tld: true,
    // 是否允许包含下划线
    allow_underscores: true,
    // 是否允许 . 号结尾
    allow_trailing_dot: false,
    // 是否允许数字TLD号结尾
    allow_numeric_tld: false,
    // 是否允许配符 *
    allow_wildcard: false,
    ...config
  }, lang);
};
export default isDomain;
