/**
 * 判断函数参数是否为有效数据类型
 * @param[str] any 参数
 * @param[types] [any] 支持参数类型
 * */
import { EnumUtilTypeOf } from "@/lib/util/utilTypeOf";
declare type DefaultTypes = Array<EnumUtilTypeOf>;
declare const isValidParamsTypes: (str: any, types?: DefaultTypes) => boolean | undefined;
export default isValidParamsTypes;
