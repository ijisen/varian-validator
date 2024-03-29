import isFQDN from "../http/isFQDN";

/**
 * 主机合法性校验
 * */
const isHost = (str: string) => {
  const specialHosts = '@';
  if(str.indexOf(specialHosts) > -1) {
    return true;
  }
  const { success } = isFQDN(str, {
    // 是否包含TLD
    require_tld: true,
    // 是否允许包含下划线
    allow_underscores: true,
    // 是否允许 . 号结尾
    allow_trailing_dot: false,
    // 是否允许数字TLD号结尾
    allow_numeric_tld: false,
    // 是否允许配符 *
    allow_wildcard: false
  })
  return success;
};

export default isHost
