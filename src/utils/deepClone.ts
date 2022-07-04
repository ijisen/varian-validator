
/**
 * 对象深度克隆
 *
 * @param[obj] 要克隆的对象
 */
export function deepClone(obj: any[] | { [propName: string]: any }) {
  let newObj = Array.isArray(obj) ? [] : {};
  if(obj && typeof obj === "object") {
    for (let key in obj) {
      if(obj.hasOwnProperty(key)) {
        newObj[key] = (obj && typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key];
      }
    }
  }
  return newObj
}
