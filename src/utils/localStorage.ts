/**
 * 存储 localStorage
 * @param[name] storage 关键字
 * @param[data] storage 值
 * @return boolean  储存成功与否
 */
export const setLocalStorage = (name: string, data: any) => {
  if(!name) return false;
  if(typeof data !== 'string') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data);
  return true
}

/**
 * 获取localStorage
 * @param[name] storage 关键字
 * @return any  获取到的值
 */
export const getLocalStorage = (name: string) => {
  if(!name) return false;
  const value = window.localStorage.getItem(name);
  try {
    return JSON.parse(<string>value)
  } catch (e) {
    return value
  }
}

/**
 * 删除localStorage
 * @param[name] storage 关键字
 * @return boolean 删除成功与否
 */
export const removeLocalStorage = (name: string) => {
  if(!name) return false;
  window.localStorage.removeItem(name);
  return true
}
