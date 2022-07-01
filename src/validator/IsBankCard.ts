import isValidParamsTypes from "./util/isValidDataTypes";


/**
 * 银行卡号合法性验证
 * @param[str] any 银行卡
 * description： 15位或者16位或者19位
 * */
const IsBankCard = (str: any) => {
  // 建行16、19，农行19，工行19、交通17、民生16、兴业18、招行12、16、19
  const reg = /^([1-9]{1})(\d{11}|\d{15}|\d{16}|\d{17}|\d{18})$/;
  if(!isValidParamsTypes(str)) {
    return false
  }
  return reg.test(str)
}

export default IsBankCard
