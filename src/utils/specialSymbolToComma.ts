
/**
 * 特殊符号转 , 英文号
 * @params[str] string
 * @return string
 * @description： \r|\s|\n|， => 英文，
 * */
export const specialSymbolToComma = (str: any) => {
  if(typeof str === "string") {
    return str.replace(/\r|\s|\n|，/g, ',')
  }
  return ""
};
