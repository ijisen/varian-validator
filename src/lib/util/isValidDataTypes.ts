/**
 * 判断函数参数是否为有效数据类型
 * @param[str] any 参数
 * @param[types] [any] 支持参数类型
 * */
import utilTypeOf, { EnumUtilTypeOf } from "@/lib/util/utilTypeOf";

type DefaultTypes = Array<EnumUtilTypeOf>;
let defaultTypes: DefaultTypes = ['string', 'number'];

const isValidParamsTypes = (str: any, types?: DefaultTypes) => {
  if(utilTypeOf(types) !== 'array') {
    types = defaultTypes;
  }
  return (types && types.includes(utilTypeOf(str)));
}

export default isValidParamsTypes;
