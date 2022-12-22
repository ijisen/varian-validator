import isFQDN from './isFQDN'
import {isFQDNRes} from "./typings.d";

/**
 * 域名合法性校验
 * */
const isDomain = (str: string, lang?: string): isFQDNRes => {
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
    }, lang);
};
export default isDomain
