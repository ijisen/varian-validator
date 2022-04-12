'use strict';

const isInteger = (value, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
  if(typeof value !== 'number') {
    // ERR_INVALID_ARG_TYPE
    return false;
  }
  if(!Number.isInteger(value)) {
    // ERR_OUT_OF_RANGE
    return false
  }
  if(value < min || value > max) {
    //throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
    return false
  }
  return true
};


function isString(value) {
  return (typeof value !== 'string')
}

function isNumber(value) {
  return (typeof value !== 'number')
}

function isBoolean(value) {
  return (typeof value !== 'boolean')
}

/**
 * @param {unknown} value
 * @param {{
 *   allowArray?: boolean,
 *   allowFunction?: boolean,
 *   nullable?: boolean
 * }} [options]
 */
const isObject = (value, options?: {
  allowArray: false,
  allowFunction: false,
  nullable: false,
}) => {
  const useDefaultOptions = options == null;
  const allowArray = useDefaultOptions ? false : options.allowArray;
  const allowFunction = useDefaultOptions ? false : options.allowFunction;
  const nullable = useDefaultOptions ? false : options.nullable;
  if((!nullable && value === null) ||
    (!allowArray && Array.isArray(value)) ||
    (typeof value !== 'object' && (
      !allowFunction || typeof value !== 'function'
    ))) {
    return false
  }
  return true
};

const isArray = (value, name, minLength = 0) => {
  if(!Array.isArray(value)) {
    // throw new ERR_INVALID_ARG_TYPE(name, 'Array', value);
    return false
  }
  if(value.length < minLength) {
    // console.log(`must be longer than ${minLength}`);
    // throw new ERR_INVALID_ARG_VALUE(name, value, reason);
    return false
  }
  return true
};


// Check that the port number is not NaN when coerced to a number,
// is an integer and that it falls within the legal range of port numbers.
function isPort(port, allowZero = true): any {
  if((typeof port !== 'number' && typeof port !== 'string') ||
    (typeof port === 'string' && port.trim().length === 0) ||
    +port !== (+port >>> 0) ||
    port > 0xFFFF ||
    (port === 0 && !allowZero)) {
    // throw new ERR_SOCKET_BAD_PORT(name, port, allowZero);
    return false
  }
  return port;
}


const isFunction = (value) => {
  return (typeof value !== 'function')
};


const isUndefined = (value) => {
  return (value !== undefined)
};

module.exports = {
  isArray,
  isBoolean,
  isFunction,
  isInteger,
  isNumber,
  isObject,
  isPort,
  isString,
  isUndefined,
};
