/**
 * @deprecated since v4.0.0
 * @param {any} arg
 * @returns {arg is (null | undefined)}
 */
export function isNullOrUndefined(arg: any) {
  return arg === null || arg === undefined;
}
