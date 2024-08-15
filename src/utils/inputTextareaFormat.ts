import { specialSymbolToComma } from './specialSymbolToComma';

/**
 * @names：textarea 输入内容格式化
 * @params[str] string
 * @params[needToLowerCase] boolean 是否需要转小写
 * @return [] Array
 * @description:
 * 1、去掉首位空格
 * 2、大写转小写
 * 3、去除多余的空格
 * 4、specialSymbolToComma 转 英文,
 * 5、数组去重
 * */
export const inputTextareaFormat = (str: any, needToLowerCase?: boolean): any[] => {
  if (typeof str !== 'string') {
    return [];
  }
  // 去除首尾空格
  str = str.trim();
  // 大写转小写
  if (needToLowerCase !== false) {
    str = str.toLowerCase();
  }
  // 去除多余的空格
  str = str.replace(/\s+|\n+/g, ' ');
  // 特殊符号转 ,
  str = specialSymbolToComma(str);
  // 去重
  str = [ ...new Set(str.split(',')) ];
  return str.filter((item: string) => item !== '');
};

/**
 * 文本去重并换行
 * @params[str] 字符串|数组 => ''
 */
export const inputValueFormatBr = (str: any): string => {
  let _arr = [];
  if (Array.isArray(str)) {
    _arr = str;
  } else if (typeof str === 'string') {
    _arr = inputTextareaFormat(str);
  }
  if (_arr.length) {
    return _arr.toString().replace(/,/g, '\n');
  }
  return '';
};
