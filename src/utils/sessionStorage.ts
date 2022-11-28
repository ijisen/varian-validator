/**
 * 存储 sessionStorage
 * @param[name] session关键字
 * @param[data] session值
 * @return boolean  储存成功与否
 */
export const setSessionStorage = (name: string, data: any) => {
  if(!name) return undefined;
  if(typeof data !== 'string') {
    data = JSON.stringify(data)
  }
  window.sessionStorage.setItem(name, data);
  return true
}

/**
 * 获取 sessionStorage
 * @param[name] session关键字
 * @return any  获取到的值
 */
export const getSessionStorage = (name: string) => {
  if(!name) return false;
  const value = window.sessionStorage.getItem(name);
  try {
    return JSON.parse(<string>value)
  } catch (e) {
    return value
  }
  // return value ? JSON.parse(value) : value
}

/**
 * 删除 sessionStorage
 * @param[name] session关键字
 * @return boolean 删除成功与否
 */
export const removeSessionStorage = (name: string) => {
  if(!name) return false;
  window.sessionStorage.removeItem(name);
  return true
}
