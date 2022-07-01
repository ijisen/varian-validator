import isValidParamsTypes from "./util/isValidDataTypes";


/**
 * 判断字符串是否为空值
 * @param[str] 需要判断的值
 * @param[option] {ignore_whitespace: boolean} 是否忽略空格
 * */

interface DefaultIsEmptyOptions {
  ignore_whitespace: boolean;
}

export const isEmptyStr = (str: any, options?: DefaultIsEmptyOptions) => {
  if(!isValidParamsTypes(str)) {
    return false
  }
  const default_is_empty_options = {
    ignore_whitespace: false
  };
  str = `${str}`;
  options = options || default_is_empty_options;

  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}


/**
 * @names：判断数组是否为空数据
 * @params[data] Array
 * */
export const isEmptyArray = (data = []) => {
  return !Array.isArray(data) || !data.length
};

