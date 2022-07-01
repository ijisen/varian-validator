/**
 * 判断函数参数是否为有效数据类型
 * @param[str] any 参数
 * @param[types] [any] 支持参数类型, 默认支持 ['string', 'number']
 * */
import utilTypeOf, { EnumUtilTypeOf } from "./utilTypeOf";

export type ValidParamsDefaultTypes = Array<EnumUtilTypeOf>;

const isValidParamsTypes = (str: any, types?: ValidParamsDefaultTypes) => {
  let defaultTypes: ValidParamsDefaultTypes = ['string', 'number'];
  if(utilTypeOf(types) !== 'array') {
    types = defaultTypes;
  }
  return (types && types.includes(utilTypeOf(str)));
}

export default isValidParamsTypes;
