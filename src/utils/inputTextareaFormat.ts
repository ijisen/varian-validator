import { specialSymbolToComma } from "./specialSymbolToComma";

/**
 * @names：textarea 输入内容格式化
 * @params[str] string
 * @return [] Array
 * */
export const inputTextareaFormat = (str: any) => {
  if(typeof str !== "string") {
    return []
  }
  // 去除首尾空格
  str = str.trim();
  // 大写转小写
  str = str.toLowerCase();
  // 去除多余的空格
  str = str.replace(/\s+|\n+/g, ' ');
  // 特殊符号转 ,
  str = specialSymbolToComma(str);
  // 去重
  str = [...new Set(str.split(','))];
  return str.filter((item:string) => item === '');
};
