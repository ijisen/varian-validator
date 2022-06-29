const eth = /^(0x)[0-9a-f]{40}$/i;

const isEthereumAddress = (str: any) => {
  if(typeof str !== "string") {
    return false
  }
  str += '';
  return eth.test(str);
}
export default isEthereumAddress
