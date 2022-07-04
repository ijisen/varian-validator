import isValidParamsTypes from "../utils/isValidDataTypes";

/**
 * 纳税人识别码 合法性验证
 * @param[str] any 识别码
 * */
const isTaxpayerNo = (str: any) => {
  const reg = /^[0-9A-Z]{15,18}$/i;
  if(!isValidParamsTypes(str)) {
    return false
  }
  return reg.test(str)
}

export default isTaxpayerNo
