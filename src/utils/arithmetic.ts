/** =======================================================
 * @names：  算术运算
 * @author：jisen
 * @time：  2022-07-04
 * @description：
 * ======================================================== */
import { isNumber } from "./isNumber";

/**
 * 计算值格式化 - 获取小数位数
 * @param[num]
 * */
const numberFormat = (num: any) => {
  try {
    return num.toString().split(".")[1].length;
  } catch (e) {
    return 0;
  }
}

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
  return Number(s);
}


/**
 * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
 *
 * @param num1 加数1
 * @param num2 加数2
 * 1.111 + 2 = 3.1109999999999998
 */
export function numberAdd(num1: any, num2: any) {
  if(!isNumber(num1, true) || !isNumber(num2, true)) {
    return 0
  }
  const num1_decimal_len = numberFormat(num1);
  const num2_decimal_len = numberFormat(num2);
  // 保留小数位数
  const baseNum = Math.pow(10, Math.max(num1_decimal_len, num2_decimal_len));
  return (numberMultiply(num1, baseNum) + numberMultiply(num2, baseNum)) / baseNum;
}

/**
 * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
 *
 * @param num1 被减数
 * @param num2 减数
 */
export function numberSubtract(num1: any, num2: any) {
  if(!isNumber(num1, true) || !isNumber(num2, true)) {
    return 0
  }
  const baseNum1 = numberFormat(num1);
  const baseNum2 = numberFormat(num2);
  const baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  // 精度
  const precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
  return Number(((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision));
}

/**
 * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
 *
 * @param num1 乘数a
 * @param num2 乘数b
 */
export function numberMultiply(num1: number, num2: number) {
  if(!isNumber(num1, true) || !isNumber(num2, true)) {
    return 0
  }
  let baseNum = 0;
  baseNum += numberFormat(num1);
  baseNum += numberFormat(num2);
  const baseNum3 = Number(num1.toString().replace(".", ""));
  const baseNum4 = Number(num2.toString().replace(".", ""));
  return baseNum3 * baseNum4 / Math.pow(10, baseNum);
}

/**
 * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
 *
 * @param num1 被除数
 * @param num2 除数
 */
export function numberDivide(num1: number, num2: number) {
  if(!isNumber(num1, true) || !isNumber(num2, true)) {
    return 0
  }
  if(num2 === 0) {
    throw new TypeError('除数不能为0')
  }
  const baseNum1 = numberFormat(num1);
  const baseNum2 = numberFormat(num2);
  const baseNum3 = Number(num1.toString().replace(".", ""));
  const baseNum4 = Number(num2.toString().replace(".", ""));
  return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
}

/**
 * 数字格数转换缩写
 *
 * @param val 原始数字
 * @param isEn 是否为英文
 */
export const numberSimplifyCutting = (val: any, isEn?: boolean) => {
  // 10000 => 10K
  // 1000000 => 1M
  // 百亿 10 billion(美国、法国)
  if(!isNumber(val)) {
    return val;
  }

  const valFormat = (val: number, max?: number) => {
    if(max) {
      val = numberDivide(val, max);
    }

    val = numberToDecimal2(val);

    return Number(`${val}`.replace('.00', ''))
  }

  val = numberToDecimal2(val);

  let max = 100000000;
  if(val >= max) {
    let unit = isEn ? 'B' : '亿';
    return `${valFormat(val, max)}${unit}`;
  }

  max = 10000;
  // 9.999901
  if(val >= max) {
    // 10000 => 10K
    val = valFormat(val, max);
    if(val >= max) {
      let unit = isEn ? 'B' : '亿';
      return `${valFormat(val, max)}${unit}`;
    }
    if(isEn) {
      val = val * 10;
      return `${valFormat(val)}K`;
    }
    return `${val}万`;
  }

  return valFormat(val);
};
