import isInRange from "../isInRange";

/**
 * 端口号校验
 * */
const isPort = (str: any) => {
  return isInRange(str, 1, 65535);
};

export default isPort;
