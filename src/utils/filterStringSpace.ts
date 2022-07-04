/**
 * @names：普通文本过滤所有的空格
 * 部分 ajax 响应数据为字符串，且包含转义字符，无法转成JSON
 *
 * @params[str] string
 * @params[options] {filterAll: boolean, returnType: boolean}
 * @return string
 * eg: aaa  aa  => aaa aa
 * */
const filterStringSpace = (str: any, options?: {
  filterAll?: boolean;
  returnType?: boolean
}) => {
  if(typeof str !== 'string') {
    // return str;
    return ''
  }
  const reg = /\\0|\\u0000|\s+/g
  // return str.replace(/\s+/g, '');
  if(options?.filterAll) {
    return str.replace(reg, '')
  }
  return str.replace(reg, ' ')
};

export default filterStringSpace;
