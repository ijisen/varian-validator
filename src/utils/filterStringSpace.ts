/**
 * @names：普通文本过滤所有的空格
 * 部分 ajax 响应数据为字符串，且包含转义字符，无法转成JSON
 *
 * @params[str] string
 * @return string
 * eg: aaa  aa  => aaa aa
 * */
const filterStringSpace = (str: any) => {
  if(typeof str !== 'string') {
    // return str;
    return ''
  }
  // return str.replace(/\s+/g, '');
  return str.replace(/\\0|\\u0000|\s+/g, ' ')
};

export default filterStringSpace;
