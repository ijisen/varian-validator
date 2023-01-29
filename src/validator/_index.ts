// export { something as somethingElse }; => export var something = true;
/**
 * 公共 模块引入
 * path: src/validator/util
 *
 * */

// export type { ValidParamsDefaultTypes } from '../commonjs/isValidParamsTypes'
// export { default as isValidParamsTypes } from '../commonjs/isValidParamsTypes'
// export type { EnumLanguageType } from '../commonjs/setErrorCodeLang'
// export { default as setErrorCodeLang } from '../commonjs/setErrorCodeLang'
// export { default as utilStringToArray } from '../commonjs/utilStringToArray'
// export { default as utilToString } from '../commonjs/utilToString'
// export type { EnumUtilTypeOf } from '../commonjs/utilTypeOf'
// export { default as utilTypeOf } from '../commonjs/utilTypeOf'
/** ========  END 公共 模块 ======== */

/**
 * HTTP 模块引入
 * path: src/validator/http
 *
 * */
export * from './http/IP';
export type { IsFQDNConfig, isFQDNRes } from './http/typings';
export { default as isFQDN } from './http/isFQDN';
export { default as isDomain } from './http/isDomain';
export { default as isPort } from './http/isPort';
/** ========  END HTTP 模块 ======== */

/**
 * 域名解析类型 模块引入
 * path: src/validator/rr
 *
 * */
// export type { EnumRecordType } from './rr/isRdata';
export type { EnumRecordType } from './rr/isRdata';
export { isRdata } from './rr/isRdata';
export { default as isHost } from './rr/isHost';
export { default as isTTL } from './rr/isTTL';
export { default as isZone } from './rr/isZone';
/** ========  END 域名解析 模块 ======== */


export { default as IsBankCard } from './IsBankCard';
export { default as isBooleanTrue } from './isBooleanTrue';
export type { IsByteLengthOptions } from './isByteLength';
export { default as isByteLength } from './isByteLength';
export { default as isCellPhone } from './isCellPhone';
export { default as isCreditCard } from './isCreditCard';
export { default as isEmail } from './isEmail';
export { default as isEthereumAddress } from './isEthereumAddress';
export { default as isFixedPhone } from './isFixedPhone';
export { default as isIdentityCard } from './isIdentityCard';
export { default as isIMEI } from './isIMEI';
export { default as isIn } from './isIn';
export { default as isInRange } from './isInRange';
export { default as isInt } from './isInt';
export { default as isPostalCode } from './isPostalCode';
export type { IsStrongPasswordOptions, IAnalysisType } from './isStrongPassword';
export { default as isStrongPassword } from './isStrongPassword';
export { default as isTaxpayerNo } from './isTaxpayerNo';
export type { IIsURLDefaultUrlOptions } from './isURL';
export { default as isURL } from './isURL';
export { default as isUUID } from './isUUID';


