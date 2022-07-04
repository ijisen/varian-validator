/**
 * 获取url中的参数
 *
 * @param[name] 参数名
 * @param[param] 参数  'name=xx&age=124'
 */
export function getUrlParam(name: string, param: string) {
  //构造一个含有目标参数的正则表达式对象
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  //匹配目标参数
  let _params = param || window.location.search.substring(1);
  let r = _params.match(reg);
  //返回参数值
  if(r !== null) return decodeURIComponent(r[2]);
  return null;
}
