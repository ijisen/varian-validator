/**
 * 子节长度判断
 *@param[str] any 字符串
 *@param[option] 参数 {min: number, max:number}
 * */
export interface IsByteLengthOptions {
  min?: number;
  max: number;
}

export default function isByteLength(str: any, options: IsByteLengthOptions) {
  if(typeof str !== "string") {
    return false
  }
  str += '';
  let min;
  let max;
  if(typeof (options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  const len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

