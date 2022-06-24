/**
 * 是否包含数据判断
 * */

import utilToString from './util/utilToString';
import isValidParamsTypes from "@/lib/util/isValidDataTypes";
import utilTypeOf from "@/lib/util/utilTypeOf";

export default function isIn(str: any, options: any) {
  if(!isValidParamsTypes(str)) {
    return false
  }
  let i;
  let options_type = utilTypeOf(options)
  if(options_type === 'array') {
    const array: any[] = [];
    for (i in options) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if({}.hasOwnProperty.call(options, i)) {
        array[i] = utilToString(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if(options_type === 'object') {
    return options.hasOwnProperty(str);
  } else if(options_type === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}
