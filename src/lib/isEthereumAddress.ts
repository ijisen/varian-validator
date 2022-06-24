import assertString from './util/assertString';

const eth = /^(0x)[0-9a-f]{40}$/i;

const isEthereumAddress = (str: string) => {
  assertString(str);
  return eth.test(str);
}
export default isEthereumAddress
