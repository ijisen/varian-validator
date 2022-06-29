/**
 * 布尔值判断
 * @param[str]: 布尔值
 * @param[extend]: 是否支持拓展
 * @param[trueBoolean]: 拓展布尔值
 * */
import isValidParamsTypes from "@/lib/util/isValidDataTypes";

const looseBooleans = ['yes', 'true', '1'];
const isBooleanTrue = (str: any, extend: Boolean, trueBooleans = looseBooleans) => {
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
