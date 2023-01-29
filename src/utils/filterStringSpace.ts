/**
 * @names：普通文本过滤所有的空格
 * 部分 ajax 响应数据为字符串，且包含转义字符，无法转成JSON
 *
 * @params[str] string
 * @params[filterAllSpace] boolean
 * @return string
 * eg: aaa  aa  => aaa aa
 * */
const filterStringSpace = (str: any, filterAllSpace = false): string => {
  if(typeof str !== 'string') {
    // return str;
    return ''
  }
  str = str.trim();
  const reg = /\\0|\\u0000|\s+/g;
  if(filterAllSpace) {
    return str.replace(reg, '')
  } else {
    return str.replace(reg, ' ')
  }
};

export default filterStringSpace;
