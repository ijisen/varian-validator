import isValidParamsTypes from "./util/isValidDataTypes";

/**
 * 是否为整数判断
 * @param[str] 数值
 * @param[options] 参数
 *
 * */
export default function isInt(str: any, options?: {
  allow_leading_zeroes?: Boolean,
  min?: number;
  max?: number;
  lt?: number;
  gt?: number;
}) {
  if(!isValidParamsTypes(str)) {
    return false
  }

  const int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
  const intLeadingZeroes = /^[-+]?[0-9]+$/;

  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  let regex = (
    options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ?
      int : intLeadingZeroes
  );

  // Check min/max/lt/gt
  let minCheckPassed = (!options.hasOwnProperty('min') || (typeof options.min !== 'undefined' && str >= options.min));
  let maxCheckPassed = (!options.hasOwnProperty('max') || (typeof options.max !== 'undefined' && str <= options.max));
  let ltCheckPassed = (!options.hasOwnProperty('lt') || (typeof options.lt !== 'undefined' && str < options.lt));
  let gtCheckPassed = (!options.hasOwnProperty('gt') || (typeof options.gt !== 'undefined' && str > options.gt));

  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
