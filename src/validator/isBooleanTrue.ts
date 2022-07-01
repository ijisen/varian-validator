import isValidParamsTypes from "./util/isValidDataTypes";

/**
 * 布尔值判断
 * @param[str]: 布尔值
 * @param[extend]: 是否支持拓展
 * @param[trueBooleans]: 拓展布尔值
 * */
const isBooleanTrue = (str: any, extend: Boolean, trueBooleans = ['yes', 'true', '1']) => {
  const type_str = typeof str;
  if(type_str === 'boolean') {
    return str
  }

  if(!isValidParamsTypes(str)) {
    return false
  }

  if(extend) {
    str = `${str}`.toLowerCase()
    return trueBooleans.includes(str);
  }
}

export default isBooleanTrue
