/**
 * 解决IE不识别 2018-08-12的时间格式
 *
 * @param[date]: 日期
 *
 * eg: 2018-08-12 => 2018/08/12
 * */
export function dateFormatReg(date: any) {
  if(typeof date === 'string') {
    date = date.replace(/-/g, '/')
  }
  return date;
}

/**
 * 日期格式化.
 * @param[date]
 * @param[format] 格式
 */
export function formatDate(date: any, format = 'YYYY-MM-DD') {
  if(!date) {
    return ''
  }
  const reg = /cst/ig;
  // 如果时间格式为 CST格式，则需要-14小时
  if(typeof date === 'string' && reg.test(date)) {
    date = new Date(date);
    date.setHours(date.getHours() - 14);
  }
  date = dateFormatReg(date);
  date = new Date(date);
  const o = {
    'M+': date.getMonth() + 1, //month
    'D+': date.getDate(), //day
    'd+': date.getDate(), //day
    'H+': date.getHours(), //hour
    'm+': date.getMinutes(), //minute
    's+': date.getSeconds(), //second
    'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
    'S': date.getMilliseconds(), //millisecond
  };

  if(/(Y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (const k in o) {
    if(new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return format;
}
