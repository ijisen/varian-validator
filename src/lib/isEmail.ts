/**
 *
 * 邮箱格式正则校验
 * @param[str] 邮箱
 * */
const isEmail = (str: any) => {
  if(typeof str !== "string") {
    return false
  }
  // 用户名@主机名”
  const reg = /^(?!.*?[._-]{2})[a-z0-9][a-z0-9._-]{0,62}[a-z0-9]@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]{2,63}$/i;
  return reg.test(str)
}

export default isEmail
