import isInRange from "../isInRange";

/**
 * 端口号校验
 * */
const isPort = (str: any) => {
  const isRange = isInRange(str, 1, 65535);
  if(isRange && `${str}`.includes('.')) {
    return false
  }
  return isRange
};

export default isPort;
