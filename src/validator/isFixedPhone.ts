/**
 *
 * 固定电话格式校验
 * @param[str]: 电话
 * eg: (0827-7977654) || (7977654)
 * */
const  isFixedPhone = (str: string) => {
  const reg = /^(\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(str)
}

export default isFixedPhone
