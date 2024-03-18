/**
 * 字符串 转 数组
 * String to Array
 * @param[str] 需要拆分的数据
 * @param[separator] 拆分标识符，默认 ,
 * */

//@deception
const stringToArray = (str: any, separator?: string) => {
  separator = separator || ','
  if (typeof str === 'string') {
    str = str.trim();
    separator = separator || ',';
    return str.split(separator || /\s+/);
  } else if (Array.isArray(str)) {
    return str
  } else if (typeof str === 'number' || typeof str === "boolean") {
    return [str]
  }
  return [];
};

export default stringToArray;
