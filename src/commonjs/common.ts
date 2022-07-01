/** =======================================================
 * @names：  公共js
 * @author：jisen
 * @time：  2022-07-01
 * @description：公共js文件，该文件的js不需要依赖别的js文件
 * ======================================================== */

// 获取域名的TLD
//  abc.com.cn =>cn
//  abc.com => com
//  blog.zdns.com.cn => com.cn
export function getDomainTld(domain: string) {
  let _arr = domain.split('.');
  let len = _arr.length;
  return _arr[len - 1];
}

// 域名可注册年限判断
// .co 为五年
// 其它十年
// @params[tld] 顶级域 com|co|net
export function getDomainPeriod(tld: string): number {
  // 注册时间为5年的顶级域
  const tld_arr = ['co'];
  if(!tld) {
    return 10
  }
  let _period = 10;
  if(tld_arr.indexOf(tld) > -1) {
    _period = 5;
  }
  return _period;
}


// 将字符串中的 空格 转成 ' '
// 部分 ajax 响应数据为字符串，且包含转义字符，无法转成JSON
export function filterStringSpace(str: string) {
  return str.replace(/\\0|\\u0000|\s+/g, ' ')
}

/**
 * 金额保留两位小数
 */
export function toDecimal2(x: any) {
  if(!isNumber(x)) {
    return false;
  }
  let f = parseFloat(x);
  f = numberMultiply(f, 100);
  f = Math.round(f) / 100;
  let s = f.toString();
  let rs = s.indexOf('.');
  if(rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}

/**
 * 域名注册-金额保留两位小数，向上取整，
 * eg: 5.051 = 5.06
 */
export function domainCreatePriceToDecimal2(x: any) {
  if(!isNumber(x)) {
    return false;
  }
  let f = parseFloat(x);
  // Math.ceil(19.01*100) => 1902 js BUG
  f = numberMultiply(f, 100);
  f = Math.ceil(f) / 100;
  let s = f.toString();
  let rs = s.indexOf('.');
  if(rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}

/**
 * 判断参数是否为数字
 *
 * @param[number] 价格参数
 * @param[allowNegative] 是否允许为负数
 */
export function isNumber(number: any, allowNegative = false) {
  /**
   * isNaN([]) || isNaN('') || isNaN(true) || isNaN(false) || isNaN(null) => false
   * */
  if(typeof number === 'string') {
    number = number.replace(/\s+/g, '');
  }
  if(isNaN(number) || number === "" || typeof number === 'object' || typeof number === 'boolean') {
    return false
  } else {
    number = parseFloat(number);
    if(number < 0) {
      return allowNegative
    } else {
      return true
    }
  }
}


/**
 * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
 *
 * @param num1 加数1
 * @param num2 加数2
 */
export function numberAdd(num1: number, num2: number) {
  let baseNum, baseNum1, baseNum2;
  try {
    baseNum1 = num1.toString().split(".")[1].length;
  } catch (e) {
    baseNum1 = 0;
  }
  try {
    baseNum2 = num2.toString().split(".")[1].length;
  } catch (e) {
    baseNum2 = 0;
  }
  baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  return (numberMultiply(num1, baseNum) + numberMultiply(num2, baseNum)) / baseNum;
}

/**
 * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
 *
 * @param num1 被减数
 * @param num2 减数
 */
export function numberSubtract(num1: number, num2: number) {
  let baseNum, baseNum1, baseNum2;
  let precision;// 精度
  try {
    baseNum1 = num1.toString().split(".")[1].length;
  } catch (e) {
    baseNum1 = 0;
  }
  try {
    baseNum2 = num2.toString().split(".")[1].length;
  } catch (e) {
    baseNum2 = 0;
  }
  baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
  return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
}

/**
 * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
 *
 * @param num1 被乘数
 * @param num2 乘数
 */
export function numberMultiply(num1: number, num2: number) {
  let baseNum = 0;
  try {
    baseNum += num1.toString().split(".")[1].length;
  } catch (e) {
  }
  try {
    baseNum += num2.toString().split(".")[1].length;
  } catch (e) {
  }
  return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
}

/**
 * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
 *
 * @param num1 被除数
 * @param num2 除数
 */
export function numberDivide(num1: number, num2: number) {
  let baseNum1 = 0, baseNum2 = 0;
  let baseNum3, baseNum4;
  try {
    baseNum1 = num1.toString().split(".")[1].length;
  } catch (e) {
    baseNum1 = 0;
  }
  try {
    baseNum2 = num2.toString().split(".")[1].length;
  } catch (e) {
    baseNum2 = 0;
  }
  baseNum3 = Number(num1.toString().replace(".", ""));
  baseNum4 = Number(num2.toString().replace(".", ""));
  return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
}

/**
 * 获取url中的参数
 *
 * @param name 参数名
 * @param param 参数  'name=xx&age=124'
 */
export function getUrlParam(name: string, param: string) {
  //构造一个含有目标参数的正则表达式对象
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  //匹配目标参数
  let _params = param || window.location.search.substr(1);
  let r = _params.match(reg);
  //返回参数值
  if(r !== null) return decodeURIComponent(r[2]);
  return null;
}


/**
 * 配置url参数
 *
 * @param[data] 参数
 */
export function setUrlParam(data: string) {
  if(Object.prototype.toString.call(data) !== '[object Object]') {
    return undefined
  }
  let keys = Object.keys(data);
  let str = '';
  keys.forEach(key => {
    const value = data[key];
    if(isExistValue(value)) {
      if(str) {
        str += '&'
      }
      str += `${key}=${value}`
    }
  });
  return encodeURI(str);
}

// 解决IE不识别 2018-08-12的时间格式
export function dateReg(date: any) {
  if(typeof date === 'string') {
    date = date.replace(/\-/g, '/')
  }
  return date;
}


/**
 * 对象深度克隆
 *
 * @param[obj] 要克隆的对象
 */
export function deepClone(obj: any[] | { [propName: string]: any }) {
  let newObj = Array.isArray(obj) ? [] : {};
  if(obj && typeof obj === "object") {
    for (let key in obj) {
      if(obj.hasOwnProperty(key)) {
        newObj[key] = (obj && typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key];
      }
    }
  }
  return newObj
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
  date = dateReg(date);
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

/**
 * URL 合法性校验
 */
export function validateURL(url: string) {
  //url= 协议://(ftp的登录信息)[IP|域名](:端口号)(/或?请求参数)
  const strRegex = '^((https|http|ftp)://)?'//(https或http或ftp):// 可有可无
    + '(([\\w_!~*\'()\\.&=+$%-]+: )?[\\w_!~*\'()\\.&=+$%-]+@)?' //ftp的user@  可有可无
    + '(([0-9]{1,3}\\.){3}[0-9]{1,3}' // IP形式的URL- 3位数字.3位数字.3位数字.3位数字
    + '|' // 允许IP和DOMAIN（域名）
    + '(localhost)|'	//匹配localhost
    + '([\\w_!~*\'()-]+\\.)*' // 域名- 至少一个[英文或数字_!~*\'()-]加上.
    + '\\w+\\.' // 一级域名 -英文或数字  加上.
    + '[a-zA-Z]{1,6})' // 顶级域名- 1-6位英文
    + '(:[0-9]{1,5})?' // 端口- :80 ,1-5位数字
    + '((/?)|' // url无参数结尾 - 斜杆或这没有
    + '(/[\\w_!~*\'()\\.;?:@&=+$,%#-]+)+/?)$';//请求参数结尾- 英文或数字和[]内的各种字符

  const reg = new RegExp(strRegex, 'i');//i不区分大小写
  // console.log(reg);
  //将url做uri转码后再匹配，解除请求参数中的中文和空字符影响
  return reg.test(encodeURI(url))
}

/**
 * 设置页面标题
 */
export function setHtmlTitle(title: string) {
  document.title = title;
}


/**
 *  计算字符串长度
 *  将字符串转Unicode计算 一个中文 = 3个子节
 */
export function getStrByteLength(str: string) {
  let totalLength = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const charCode = str.charCodeAt(i);
    if(charCode < 0x007f) {
      totalLength += 1;
    } else if((0x0080 <= charCode) && (charCode <= 0x07ff)) {
      totalLength += 2;
    } else if((0x0800 <= charCode) && (charCode <= 0xffff)) {
      totalLength += 3;
    }
  }
  console.log("信息长度为: " + totalLength + " 字节");
}

/**
 * 判断数据是否存在
 * @return boolean || string
 * @param value 需要判断的数据
 * @param returnType 返回类型，默认返回 boolean
 */
export const isExistValue = (value: any, returnType = 'boolean') => {
  let _value = '';
  if(value === 0 || value === false || value) {
    _value = value;
  } else {
    // null undefined ''
    _value = '-';
  }
  // console.log(_value);
  return (returnType === 'boolean') ? (_value !== '-') : _value
};

/**
 * @names：数组分组提交数据
 * @params[data] 数据
 * @params[groupLen] 组员
 * */
export const dataGrouping = (data = [], groupLen = 10) => {
  if(!Array.isArray(data) || !data.length) {
    return undefined
  }
  // 数据长度
  let dataLen = data.length;
  if(dataLen <= groupLen) {
    return [data]
  }
  data = JSON.parse(JSON.stringify(data));
  // 当前数据可分组数
  let group = Math.ceil(dataLen / groupLen);
  let groupData = [];
  for (let i = 1; i < group; i++) {
    groupData.push(data.splice(0, groupLen))
  }
  groupData.push(data);
  return groupData;
};

/**
 * @names：判断数组是否为空数据
 * @params[data] Array
 * */
export const isEmptyArray = (data = []) => {
  return !Array.isArray(data) || !data.length
};

/**
 * @names：判断字符串是否为空字符串
 * @params[data] Array
 * */
export const isEmptyStr = (str: any) => {
  if(typeof str === "undefined" || str === null) {
    return true
  }
  if(typeof str === 'string') {
    str = str.replace(/\s+/g, '');
    return !str
  }
  return false
};

/**
 * name：函数防抖
 * description：函数触发后，如果函数还没执行完成，则打断执行，重新执行
 * @params[fn]  回调函数
 * @params[delay]  定时器延时
 */
export const debounce = (fn = () => {
}, delay = 200) => {
  let timer: any = null;
  return () => {
    // 再次触发时，立即重新执行
    // if (timer) {
    clearTimeout(timer);
    timer = null;
    // }
    timer = setTimeout(fn, delay);

  }
};

/**
 * name：函数节流
 * description：函数触发后,如果函数还在执行中，就不再执行，
 * @params[fn]  回调函数
 * @params[delay]  定时器延时
 */
export const throttle = (fn = () => {
}, delay = 200) => {
  let timer: any = null;
  return () => {
    // 函数在执行中，无论触发几次都不执行。
    if(timer) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn && fn();
      timer = null;
    }, delay);
  }
};


/**
 * @names：特殊符号转 , 英文号
 * @params[str] string
 * @return string
 * */
export const specialSymbolToComma = (str: any) => {
  if(typeof str === "string") {
    return str.replace(/\r|\s|\n|，/g, ',')
  }
  return ""
};

/**
 * @names：textarea 输入内容格式化
 * @params[str] string
 * @return [] Array
 * */
export const inputTextareaFormat = (str: any) => {
  // 去除首尾空格
  str = str.trim();
  // 大写转小写
  str = str.toLowerCase();
  // 去除多余的空格
  str = str.replace(/\s+|\n+/g, ' ');
  // 特殊符号转 ,
  str = specialSymbolToComma(str);
  // 去重
  str = [...new Set(str.split(','))];
  return str
};

/**
 * @names：普通文本空格过滤
 * @params[str] string
 * @return string
 * */
export const filterInputTextSpace = (str: any) => {
  if(typeof str === 'string') {
    return str.replace(/\s+/g, ' ').trim();
  }
  return str
};


/**
 * @names：模拟表单提交数据
 * @params[config] Object
 * */
export const utilsSubmitForm = (config: {
  url: string;
  method: string;
  params: { [propName: string]: any };
}) => {
  config = config || {};
  const action = config.url;
  const method = config.method || 'POST';
  const params = config.params || {};
  const form = document.createElement('form');

  form.style.display = 'none';
  form.method = method;
  form.action = action;
  // form.target = '_blank';

  for (let [key, value] of Object.entries(params)) {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }
  /*for (let i = 0, j = params.length; i < j; i++) {
    let input = document.createElement('input');
    let item = params[i];
    let key = item.key;
    let value = item.value;
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }*/
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};
