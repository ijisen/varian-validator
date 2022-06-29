import isNumber from "./isNumber";

/**
 * 数字取值范围校验
 * */
export default (str: any, min: number, max: number) => {
  if(!isNumber(str)) {
    return false;
  }

  const val = Number(str);
  return val >= min && val <= max;
};
