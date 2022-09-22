import isValidParamsTypes from "./isValidParamsTypes";
import filterStringSpace from "./filterStringSpace";


/**
 * 判断字符串是否为空值
 * @param[str] 需要判断的值
 * @param[ignoreSpace] boolean 是否忽略空格
 * */
export const isEmptyStr = (str: any, ignoreSpace: boolean): boolean => {
  if(!isValidParamsTypes(str)) {
    return false
  }

  str = `${str}`;

  if(!ignoreSpace) {
    str = filterStringSpace(str)
  }
  return !(str.length === 0);
}


/**
 * @names：判断数组是否为空数据
 * @params[data] Array
 * */
export const isEmptyArray = (data: any): boolean => {
  return !Array.isArray(data) || !data.length
};

