/**
 * Better way to handle type checking
 * null, {}, array and date are objects, which confuses
 */
export declare type EnumUtilTypeOf = 'undefined' | 'object' | 'array' | 'boolean' | 'number' | 'string' | 'function' | 'symbol' | 'bigint';
declare const utilTypeOf: (input: any) => EnumUtilTypeOf;
export default utilTypeOf;
