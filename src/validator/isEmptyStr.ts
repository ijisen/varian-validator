import { filterStringSpace, isValidParamsTypes } from "@/utils/_index";


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
