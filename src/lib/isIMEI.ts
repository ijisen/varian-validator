/**
 * IMEI校验
 *
 *
 * */
import isValidParamsTypes from "@/lib/util/isValidDataTypes";


let imeiRegexWithoutHypens = /^[0-9]{15}$/;
let imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;


export default function isIMEI(str: any, options: {
  allow_hyphens?: boolean
}) {
  if(!isValidParamsTypes(str)) {
    return false
  }
  str = `${str}`;
  options = options || {};

  // default regex for checking imei is the one without hyphens

  let imeiRegex = imeiRegexWithoutHypens;

  if(options.allow_hyphens) {
    imeiRegex = imeiRegexWithHypens;
  }


  if(!imeiRegex.test(str)) {
    return false;
  }

  str = str.replace(/-/g, '');

  let sum = 0,
    mul = 2,
    l = 14;

  for (let i = 0; i < l; i++) {
    const digit = str.substring(l - i - 1, l - i);
    const tp = parseInt(digit, 10) * mul;
    if(tp >= 10) {
      sum += (tp % 10) + 1;
    } else {
      sum += tp;
    }
    if(mul === 1) {
      mul += 1;
    } else {
      mul -= 1;
    }
  }
  const chk = ((10 - (sum % 10)) % 10);
  return chk === parseInt(str.substring(14, 15), 10);

}