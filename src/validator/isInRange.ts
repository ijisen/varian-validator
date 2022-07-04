import { isNumber } from "@/utils/isNumber";

/**
 * 数字取值范围校验
 * @param[str] 数值
 * @param[min] 最小值
 * @param[max] 最大值
 * */
const isInRange = (str: any, min: number, max: number) => {
  if(!isNumber(str)) {
    return false;
  }

  const val = Number(str);
  return val >= min && val <= max;
};

export default isInRange
