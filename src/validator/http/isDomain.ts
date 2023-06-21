import isFQDN from './isFQDN'
import { IsFQDNConfig, isFQDNRes } from "./typings.d";

/**
 * 域名合法性校验
 * */
interface IsDomainConfig {
  str: string;
  lang?: string;
  config?: Partial<IsFQDNConfig>;
}

const isDomain = ({ str, lang, config = {} }: IsDomainConfig = { str: '' }): isFQDNRes => {
  return isFQDN(str, {
    // 是否包含TLD
    require_tld: true,
    // 是否允许包含下划线
    allow_underscores: true,
    // 是否允许 . 号结尾
    allow_trailing_dot: false,
    // 是否允许数字TLD号结尾
    allow_numeric_tld: false,
    // 是否运通配符 *
    allow_wildcard: false,
    ...config
  }, lang);
};
export default isDomain
