/** =======================================================
 * @names：  算术运算
 * @author：jisen
 * @time：  2022-07-04
 * @description：
 * ======================================================== */
import { isNumber } from "./isNumber";


/**
 * 金额保留两位小数
 * @param[num]
 * @param[ceil] 是否向上取整， 默认四舍五入
 * ceil === true, 向上取整; eg: 5.051 = 5.06
 * ceil === false, 四舍五入; eg: 5.051 = 5.05
 */
export function numberToDecimal2(num: any, ceil?: boolean) {
  if(!isNumber(num)) {
    return num;
  }
  let f = parseFloat(num);
  // Math.ceil(19.01*100) => 1902 js BUG
  f = numberMultiply(f, 100);
  if(ceil) {
    f = Math.ceil(f) / 100;
  } else {
    f = Math.round(f) / 100;
  }
  let s = f.toString();
  let rs = s.indexOf('.');
  if(rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}

/**
 * 计算值格式化
 * */
const numberFormat = (num: any) => {
  try {
    return num.toString().split(".")[1].length;
  } catch (e) {
    return 0;
  }
}


/**
 * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
 *
 * @param num1 加数1
 * @param num2 加数2
 */
export function numberAdd(num1: any, num2: any) {
  const baseNum1 = numberFormat(num1);
  const baseNum2 = numberFormat(num2);
  const baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  return (numberMultiply(num1, baseNum) + numberMultiply(num2, baseNum)) / baseNum;
}

/**
 * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
 *
 * @param num1 被减数
 * @param num2 减数
 */
export function numberSubtract(num1: number, num2: number) {
  // 精度
  let precision;
  const baseNum1 = numberFormat(num1);
  const baseNum2 = numberFormat(num2);
  const baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
  return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
}

/**
 * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
 *
 * @param num1 被乘数
 * @param num2 乘数
 */
export function numberMultiply(num1: number, num2: number) {
  let baseNum = 0;
  baseNum += numberFormat(num1);
  baseNum += numberFormat(num2);
  return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
}

/**
 * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
 *
 * @param num1 被除数
 * @param num2 除数
 */
export function numberDivide(num1: number, num2: number) {
  const baseNum1 = numberFormat(num1);
  const baseNum2 = numberFormat(num2);
  const baseNum3 = Number(num1.toString().replace(".", ""));
  const baseNum4 = Number(num2.toString().replace(".", ""));
  return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
}
