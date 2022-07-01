/**
 * 字符串 转 数组
 * String to Array
 * */
const utilStringToArray = (str: any, separator?: string) => {
  if(typeof str === 'string') {
    str = str.trim();
    return str.split(separator || /\s+/);
  }
  return [];
};

export default utilStringToArray;
