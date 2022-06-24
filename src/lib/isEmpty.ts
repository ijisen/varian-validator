/**
 * 判断字符串是否为空值
 * @param[str] 需要判断的值
 * @param[option] {ignore_whitespace: boolean} 是否忽略空格
 * */


interface DefaultIsEmptyOptions {
  ignore_whitespace: boolean;
}

const default_is_empty_options = {
  ignore_whitespace: false
};
const isEmpty = (str: any, options?: DefaultIsEmptyOptions) => {
  if(typeof str !== "string" && typeof str !== 'number') {
    return false
  }
  str = `${str}`;
  options = options || default_is_empty_options;

  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}

export default isEmpty
