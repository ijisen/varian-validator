/**
 * 字符串 转 数组
 * String to Array
 * @param[str] 需要拆分的数据
 * @param[separator] 拆分标识符，默认 ,
 * */
const utilStringToArray = (str: any, separator?: string) => {
  separator = separator || ','

  if (Array.isArray(str)) {
    return str
  }

  if (typeof str === 'string') {
    str = str.trim();
    return str.split(separator || /\s+/);
  }

  return [];
};

export default utilStringToArray;
