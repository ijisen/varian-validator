/**
 * 以太坊地址校验
 * @param[str] 以太坊地址
 * */
const isEthereumAddress = (str: any) => {
  const ethReg = /^(0x)[0-9a-f]{40}$/i;
  if(typeof str !== "string") {
    return false
  }
  str += '';
  return ethReg.test(str);
}
export default isEthereumAddress
