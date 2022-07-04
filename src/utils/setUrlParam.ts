import { isExistValue } from "./isExistValue";

/**
 * 配置url参数
 *
 * @param[data] 参数
 */
export function setUrlParam(data: string) {
  if(Object.prototype.toString.call(data) !== '[object Object]') {
    return undefined
  }
  let keys = Object.keys(data);
  let str = '';
  keys.forEach(key => {
    const value = data[key];
    if(isExistValue(value)) {
      if(str) {
        str += '&'
      }
      str += `${key}=${value}`
    }
  });
  return encodeURI(str);
}
