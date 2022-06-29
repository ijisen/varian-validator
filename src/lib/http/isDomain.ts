import isFQDN from './isFQDN'

// is domain·
const isDomain = (str: string) => {
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
export default isDomain
