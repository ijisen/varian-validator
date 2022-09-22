/**
 * 字符串 转 数组
 * String to Array
 * */
const utilStringToArray = (str: any, separator?: string) => {
  if(typeof str === 'string') {
    str = str.trim();
    separator = separator || ',';
    return str.split(separator || /\s+/);
  } else if(Array.isArray(str)) {
    return str
  } else if(typeof str === 'number' || typeof str === "boolean") {
    return [str]
  }
  return [];
};

export default utilStringToArray;
