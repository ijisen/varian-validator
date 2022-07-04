
/**
 * @names：特殊符号转 , 英文号
 * @params[str] string
 * @return string
 * */
export const specialSymbolToComma = (str: any) => {
  if(typeof str === "string") {
    return str.replace(/\r|\s|\n|，/g, ',')
  }
  return ""
};
