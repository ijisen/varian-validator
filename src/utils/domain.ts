/** =======================================================
 * @names：  域名相关公共方法
 * @author：jisen
 * @time：  2022-07-04
 * @description：域名相关公共方法
 * ======================================================== */
/**
 *  获取【域名】的TLD
 *  abc.com => com
 *  abc.com.cn => cn
 *  blog.zdns.com.cn => zdns.com.cn
 *  baidu.com.cn.net => com.cn.net
 * */
export function getDomainTld(domain: any) {
  if(typeof domain !== 'string') {
    return ''
  }
  let index = domain.indexOf('.')
  if(index > -1) {
    return domain.slice(index + 1);
  }
  return ''
}

/**
 * 域名可注册年限判断
 * .co 为五年
 * 其它十年
 * @params[tld] 顶级域 com|co|net
 * */
export function getDomainPeriod(tld: any): number {
  if(typeof tld !== 'string') {
    return 10
  }
  // 注册时间为5年的顶级域
  const tld_arr = ['co'];

  let _period = 10;
  if(tld_arr.indexOf(tld) > -1) {
    _period = 5;
  }
  return _period;
}
