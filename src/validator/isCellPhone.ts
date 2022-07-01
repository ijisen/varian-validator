/**
 *
 * 手机格式校验
 * @param[str]: 手机号
 * */
const isCellPhone = function (str: any) {
  try {
    const reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    return reg.test(str);
  } catch (err) {
    return false
  }
}

export default isCellPhone
