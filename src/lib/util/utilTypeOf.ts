/**
 * Better way to handle type checking
 * null, {}, array and date are objects, which confuses
 */

export type EnumUtilTypeOf = 'undefined' | 'object' | 'array' | 'boolean' | 'number' | 'string' | 'function' | 'symbol' | 'bigint';

const utilTypeOf = (input: any): EnumUtilTypeOf => {
  const rawObject = Object.prototype.toString.call(input).toLowerCase();
  const typeOfRegex = /\[object (.*)]/g;
  // @ts-ignore
  return typeOfRegex.exec(rawObject)[1];
}

export default utilTypeOf




