/**
 * 判断参数是否为数字
 * @param[number]
 * @param[allowNegative] 是否允许为负数，默认: false
 * isNaN([]) || isNaN('') || isNaN(true) || isNaN(false) || isNaN(null) => false
 */
export const isNumber = (number: any, allowNegative = false) => {
  if(typeof number === 'string') {
    number = number.replace(/\s+/g, '');
  }
  if(
    isNaN(number) ||
    number === '' ||
    typeof number === 'object' ||
    typeof number === 'boolean'
  ) {
    return false;
  } else {
    number = parseFloat(number);
    if(number < 0) {
      return allowNegative;
    } else {
      return true;
    }
  }
};
