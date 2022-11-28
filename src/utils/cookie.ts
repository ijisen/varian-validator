
/**
 * 储存 cookie 值
 * @param[name] cookie 关键字
 * @param[data] cookie 值
 * @param[objHours] 储存时间
 * @return boolean  储存成功与否
 */
export const setCookie = (name:string, data: any, objHours: number) => {
  if(!name || !data) {
    return false
  }
  if(typeof data === "object") {
    data = JSON.stringify(data)
  }
  // 编码
  let str = name + "=" + encodeURI(data);
  // 为0时不设定过期时间，浏览器关闭时cookie自动消失
  if(objHours > 0) {
    const date = new Date();
    const ms = objHours * 3600 * 1000;
    date.setTime(date.getTime() + ms);
    str += "; expires=" + date.toUTCString();
  }
  document.cookie = str;
  return  true
}


/**
 * 获取 cookie 值
 * @param[name] cookie 关键字
 * @return any  获取到的值
 */
export const getCookieValue = (name: string)=> {
  if(!name) return undefined;
  let prefix = name + "=";
  let start = document.cookie.indexOf(prefix);

  if(start === -1) {
    return null;
  }

  let end = document.cookie.indexOf(";", start + prefix.length);
  if(end === -1) {
    end = document.cookie.length;
  }

  let value = document.cookie.substring(start + prefix.length, end);
  value = decodeURI(value);
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}
