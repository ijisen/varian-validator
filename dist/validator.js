/**! 
 * varian-validator v0.0.47 
 * Lightweight JavaScript form validation. 
 * 
 * Copyright (c) 2024 ji sen  (https://github.com/ijisen) 
 * https://github.com/ijisen/varian-validator 
 * Licensed under the ISC license 
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Validator = {}));
})(this, (function (exports) { 'use strict';

  var version = "0.0.47";

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * 判断参数是否为数字
   * @param[number]
   * @param[allowNegative] 是否允许为负数，默认: false
   * isNaN([]) || isNaN('') || isNaN(true) || isNaN(false) || isNaN(null) => false
   */
  var isNumber = function isNumber(number) {
    var allowNegative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (typeof number === 'string') {
      number = number.replace(/\s+/g, '');
    }
    if (isNaN(number) || number === '' || _typeof(number) === 'object' || typeof number === 'boolean') {
      return false;
    } else {
      number = parseFloat(number);
      if (number < 0) {
        return allowNegative;
      } else {
        return true;
      }
    }
  };

  /** =======================================================
   * @names：  算术运算
   * @author：jisen
   * @time：  2022-07-04
   * @description：
   * ======================================================== */

  /**
   * 计算值格式化 - 获取小数位数
   * @param[num]
   * */
  var numberFormat = function numberFormat(num) {
    try {
      return num.toString().split(".")[1].length;
    } catch (e) {
      return 0;
    }
  };

  /**
   * 金额保留两位小数
   * @param[num]
   * @param[ceil] 是否向上取整， 默认四舍五入
   * ceil === true, 向上取整; eg: 5.051 = 5.06
   * ceil === false, 四舍五入; eg: 5.051 = 5.05
   */
  function numberToDecimal2(num, ceil) {
    if (!isNumber(num)) {
      return num;
    }
    var f = parseFloat(num);
    // Math.ceil(19.01*100) => 1902 js BUG
    f = numberMultiply(f, 100);
    if (ceil) {
      f = Math.ceil(f) / 100;
    } else {
      f = Math.round(f) / 100;
    }
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
      rs = s.length;
      s += '.';
    }
    while (s.length <= rs + 2) {
      s += '0';
    }
    return Number(s);
  }

  /**
   * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
   *
   * @param num1 加数1
   * @param num2 加数2
   * 1.111 + 2 = 3.1109999999999998
   */
  function numberAdd(num1, num2) {
    if (!isNumber(num1, true) || !isNumber(num2, true)) {
      return 0;
    }
    var num1_decimal_len = numberFormat(num1);
    var num2_decimal_len = numberFormat(num2);
    // 保留小数位数
    var baseNum = Math.pow(10, Math.max(num1_decimal_len, num2_decimal_len));
    return (numberMultiply(num1, baseNum) + numberMultiply(num2, baseNum)) / baseNum;
  }

  /**
   * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
   *
   * @param num1 被减数
   * @param num2 减数
   */
  function numberSubtract(num1, num2) {
    if (!isNumber(num1, true) || !isNumber(num2, true)) {
      return 0;
    }
    var baseNum1 = numberFormat(num1);
    var baseNum2 = numberFormat(num2);
    var baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    // 精度
    var precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
    return Number(((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision));
  }

  /**
   * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
   *
   * @param num1 乘数a
   * @param num2 乘数b
   */
  function numberMultiply(num1, num2) {
    if (!isNumber(num1, true) || !isNumber(num2, true)) {
      return 0;
    }
    var baseNum = 0;
    baseNum += numberFormat(num1);
    baseNum += numberFormat(num2);
    var baseNum3 = Number(num1.toString().replace(".", ""));
    var baseNum4 = Number(num2.toString().replace(".", ""));
    return baseNum3 * baseNum4 / Math.pow(10, baseNum);
  }

  /**
   * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
   *
   * @param num1 被除数
   * @param num2 除数
   */
  function numberDivide(num1, num2) {
    if (!isNumber(num1, true) || !isNumber(num2, true)) {
      return 0;
    }
    if (num2 === 0) {
      throw new TypeError('除数不能为0');
    }
    var baseNum1 = numberFormat(num1);
    var baseNum2 = numberFormat(num2);
    var baseNum3 = Number(num1.toString().replace(".", ""));
    var baseNum4 = Number(num2.toString().replace(".", ""));
    return baseNum3 / baseNum4 * Math.pow(10, baseNum2 - baseNum1);
  }

  /**
   * 数字格数转换缩写
   *
   * @param val 原始数字
   * @param isEn 是否为英文
   */
  var numberSimplifyCutting = function numberSimplifyCutting(val, isEn) {
    // 10000 => 10K
    // 1000000 => 1M
    // 百亿 10 billion(美国、法国)
    if (!isNumber(val)) {
      return val;
    }
    var valFormat = function valFormat(val, max) {
      if (max) {
        val = numberDivide(val, max);
      }
      val = numberToDecimal2(val);
      return Number("".concat(val).replace('.00', ''));
    };
    val = numberToDecimal2(val);
    var max = 100000000;
    if (val >= max) {
      var unit = isEn ? 'B' : '亿';
      return "".concat(valFormat(val, max)).concat(unit);
    }
    max = 10000;
    // 9.999901
    if (val >= max) {
      // 10000 => 10K
      val = valFormat(val, max);
      if (val >= max) {
        var _unit = isEn ? 'B' : '亿';
        return "".concat(valFormat(val, max)).concat(_unit);
      }
      if (isEn) {
        val = val * 10;
        return "".concat(valFormat(val), "K");
      }
      return "".concat(val, "\u4E07");
    }
    return valFormat(val);
  };

  /**
   * @names：数组分组提交数据
   * @params[data] 数据
   * @params[groupLen] 组员
   * */
  var arrayDataGrouping = function arrayDataGrouping() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var groupLen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    if (!Array.isArray(data) || !data.length) {
      return undefined;
    }
    // 数据长度
    var dataLen = data.length;
    if (dataLen <= groupLen) {
      return [data];
    }
    data = JSON.parse(JSON.stringify(data));
    // 当前数据可分组数
    var group = Math.ceil(dataLen / groupLen);
    var groupData = [];
    for (var i = 1; i < group; i++) {
      groupData.push(data.splice(0, groupLen));
    }
    groupData.push(data);
    return groupData;
  };

  /**
   * 储存 cookie 值
   * @param[name] cookie 关键字
   * @param[data] cookie 值
   * @param[objHours] 储存时间
   * @return boolean  储存成功与否
   */
  var setCookie = function setCookie(name, data, objHours) {
    if (!name || !data) {
      return false;
    }
    if (_typeof(data) === "object") {
      data = JSON.stringify(data);
    }
    // 编码
    var str = name + "=" + encodeURI(data);
    // 为0时不设定过期时间，浏览器关闭时cookie自动消失
    if (objHours > 0) {
      var date = new Date();
      var ms = objHours * 3600 * 1000;
      date.setTime(date.getTime() + ms);
      str += "; expires=" + date.toUTCString();
    }
    document.cookie = str;
    return true;
  };

  /**
   * 获取 cookie 值
   * @param[name] cookie 关键字
   * @return any  获取到的值
   */
  var getCookieValue = function getCookieValue(name) {
    if (!name) return undefined;
    var prefix = name + "=";
    var start = document.cookie.indexOf(prefix);
    if (start === -1) {
      return null;
    }
    var end = document.cookie.indexOf(";", start + prefix.length);
    if (end === -1) {
      end = document.cookie.length;
    }
    var value = document.cookie.substring(start + prefix.length, end);
    value = decodeURI(value);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  };

  /**
   * 解决IE不识别 2018-08-12的时间格式
   *
   * @param[date]: 日期
   *
   * eg: 2018-08-12 => 2018/08/12
   * */
  function dateFormatReg(date) {
    if (typeof date === 'string') {
      date = date.replace(/-/g, '/');
    }
    return date;
  }

  /**
   * 日期格式化.
   * @param[date]
   * @param[format] 格式
   */
  function formatDate(date) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
    if (!date) {
      return '';
    }
    var reg = /cst/ig;
    // 如果时间格式为 CST格式，则需要-14小时
    if (typeof date === 'string' && reg.test(date)) {
      date = new Date(date);
      date.setHours(date.getHours() - 14);
    }
    date = dateFormatReg(date);
    date = new Date(date);
    var o = {
      'M+': date.getMonth() + 1,
      //month
      'D+': date.getDate(),
      //day
      'd+': date.getDate(),
      //day
      'H+': date.getHours(),
      //hour
      'm+': date.getMinutes(),
      //minute
      's+': date.getSeconds(),
      //second
      'q+': Math.floor((date.getMonth() + 3) / 3),
      //quarter
      'S': date.getMilliseconds() //millisecond
    };

    if (/(Y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return format;
  }

  /**
   * name：函数防抖
   * description：函数触发后，如果函数还没执行完成，则打断执行，重新执行
   * @params[fn]  回调函数
   * @params[delay]  定时器延时
   * @params[immediate]  表示第一次是否立即执行
   */
  var debounce = function debounce(fn) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var timer = null;
    return function () {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (timer) clearTimeout(timer);

      // ------ 新增部分 start ------
      // immediate 为 true 表示第一次触发后执行
      // timer 为空表示首次触发
      if (immediate && !timer) {
        fn.apply(this, args);
      }
      // ------ 新增部分 end ------

      timer = setTimeout(function () {
        fn.apply(_this, args);
      }, delay);
    };
  };

  // DEMO
  // 执行 debounce 函数返回新函数
  /*
  const betterFn = debounce((data:any) => {
    console.log(data);
    console.log('fn 防抖执行了')
  }, 1000, true)
  */
  // 第一次触发 scroll 执行一次 fn，后续只有在停止滑动 1 秒后才执行函数 fn
  /*
  document.addEventListener('scroll', betterFn)
  betterFn(80)
  */

  /**
   * 对象深度克隆
   *
   * @param[obj] 要克隆的对象
   */
  function deepClone(obj) {
    var newObj = Array.isArray(obj) ? [] : {};
    if (obj && _typeof(obj) === "object") {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = obj && _typeof(obj[key]) === 'object' ? deepClone(obj[key]) : obj[key];
        }
      }
    }
    return newObj;
  }

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
  function getDomainTld(domain) {
    if (typeof domain !== 'string') {
      return '';
    }
    var index = domain.indexOf('.');
    if (index > -1) {
      return domain.slice(index + 1);
    }
    return '';
  }

  /**
   * 域名可注册年限判断
   * .co 为五年
   * 其它十年
   * @params[tld] 顶级域 com|co|net
   * */
  function getDomainPeriod(tld) {
    if (typeof tld !== 'string') {
      return 10;
    }
    // 注册时间为5年的顶级域
    var tld_arr = ['co'];
    var _period = 10;
    if (tld_arr.indexOf(tld) > -1) {
      _period = 5;
    }
    return _period;
  }

  /**
   * 标签语义化
   *
   * @param[str]  str
   * eg: <h1> => &lt;h1&gt;
   *
   * */
  var escape = function escape(str) {
    if (typeof str !== "string") {
      return false;
    }
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
  };

  /**
   * @names：普通文本过滤所有的空格
   * 部分 ajax 响应数据为字符串，且包含转义字符，无法转成JSON
   *
   * @params[str] string
   * @params[filterAllSpace] boolean
   * @return string
   * eg: aaa  aa  => aaa aa
   * */
  var filterStringSpace = function filterStringSpace(str) {
    var filterAllSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (typeof str !== 'string') {
      // return str;
      return '';
    }
    var reg = /\\0|\\u0000|\s+/g;
    if (filterAllSpace) {
      return str.replace(reg, '');
    } else {
      // return str.replace(reg, ' ');
      return str.trim();
    }
  };

  /**
   *  计算字符串长度
   *  将字符串转Unicode计算 一个中文 = 3个子节
   *
   * @param[str] 字符串
   */
  function getStrByteLength(str) {
    var totalLength = 0;
    for (var i = 0, len = str.length; i < len; i++) {
      var charCode = str.charCodeAt(i);
      if (charCode < 0x007f) {
        totalLength += 1;
      } else if (0x0080 <= charCode && charCode <= 0x07ff) {
        totalLength += 2;
      } else if (0x0800 <= charCode && charCode <= 0xffff) {
        totalLength += 3;
      }
    }
    console.log("信息长度为: " + totalLength + " 字节");
    return totalLength;
  }

  /**
   * 获取url中的参数
   *
   * @param[name] 参数名
   * @param[param] 参数  'name=xx&age=124'
   */
  function getUrlParam(name, param) {
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数
    var _params = param || window.location.search.substring(1);
    var r = _params.match(reg);
    //返回参数值
    if (r !== null) return decodeURIComponent(r[2]);
    return null;
  }

  /**
   * 特殊符号转 , 英文号
   * @params[str] string
   * @return string
   * @description： \r|\s|\n|， => 英文，
   * */
  var specialSymbolToComma = function specialSymbolToComma(str) {
    if (typeof str === "string") {
      return str.replace(/\r|\s|\n|，/g, ',');
    }
    return "";
  };

  /**
   * @names：textarea 输入内容格式化
   * @params[str] string
   * @params[needToLowerCase] boolean 是否需要转小写
   * @return [] Array
   * @description:
   * 1、去掉首位空格
   * 2、大写转小写
   * 3、去除多余的空格
   * 4、specialSymbolToComma 转 英文,
   * 5、数组去重
   * */
  var inputTextareaFormat = function inputTextareaFormat(str, needToLowerCase) {
    if (typeof str !== 'string') {
      return [];
    }
    // 去除首尾空格
    str = str.trim();
    // 大写转小写
    if (needToLowerCase !== false) {
      str = str.toLowerCase();
    }
    // 去除多余的空格
    str = str.replace(/\s+|\n+/g, ' ');
    // 特殊符号转 ,
    str = specialSymbolToComma(str);
    // 去重
    str = _toConsumableArray(new Set(str.split(',')));
    return str.filter(function (item) {
      return item !== '';
    });
  };

  /**
   * 文本去重并换行
   * @params[str] 字符串|数组 => ''
   * @params[needToLowerCase] boolean 是否需要转小写
   */
  var inputValueFormatBr = function inputValueFormatBr(str, needToLowerCase) {
    var _arr = [];
    if (Array.isArray(str)) {
      _arr = str;
    } else if (typeof str === 'string') {
      _arr = inputTextareaFormat(str, needToLowerCase);
    }
    if (_arr.length) {
      return _arr.toString().replace(/,/g, '\n');
    }
    return '';
  };

  /**
   * 判断数据是否存在
   * @param[value] 需要判断的数据
   * @param[returnType] 返回类型，默认返回 boolean
   * @param[emptyVal] 当returnType=string时，返回值; 默认返回 N/A
   * @return any
   * @description:
   * --> value=0 => true
   * --> value=false => true
   * --> value=undefined => false
   * --> value=null => true
   * */
  var isExistValue = function isExistValue(value, returnType, emptyVal) {
    var _value = false;
    returnType = returnType || 'boolean';
    emptyVal = typeof emptyVal === 'undefined' ? 'N/A' : emptyVal;
    if (value === 0 || value === false || value) {
      _value = true;
    }
    if (returnType === 'boolean') {
      return _value;
    }
    return _value ? value : emptyVal;
  };

  /**
   * Better way to handle type checking
   * null, {}, array and date are objects, which confuses
   */

  var utilTypeOf = function utilTypeOf(input) {
    var rawObject = Object.prototype.toString.call(input).toLowerCase();
    var typeOfRegex = /\[object (.*)]/g;
    // @ts-ignore
    return typeOfRegex.exec(rawObject)[1];
  };

  /**
   * 判断函数参数是否为有效数据类型
   * @param[str] any 参数
   * @param[types] [any] 支持参数类型, 默认支持 ['string', 'number']
   * */
  var isValidParamsTypes = function isValidParamsTypes(str, types) {
    var defaultTypes = ['string', 'number'];
    if (utilTypeOf(types) !== 'array') {
      types = defaultTypes;
    }
    return types && types.includes(utilTypeOf(str));
  };

  /**
   * 存储 localStorage
   * @param[name] storage 关键字
   * @param[data] storage 值
   * @return boolean  储存成功与否
   */
  var setLocalStorage = function setLocalStorage(name, data) {
    if (!name) return false;
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    window.localStorage.setItem(name, data);
    return true;
  };

  /**
   * 获取localStorage
   * @param[name] storage 关键字
   * @return any  获取到的值
   */
  var getLocalStorage = function getLocalStorage(name) {
    if (!name) return undefined;
    var value = window.localStorage.getItem(name);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  };

  /**
   * 删除localStorage
   * @param[name] storage 关键字
   * @return boolean 删除成功与否
   */
  var removeLocalStorage = function removeLocalStorage(name) {
    if (!name) return false;
    window.localStorage.removeItem(name);
    return true;
  };

  /**
   * 存储 sessionStorage
   * @param[name] session关键字
   * @param[data] session值
   * @return boolean  储存成功与否
   */
  var setSessionStorage = function setSessionStorage(name, data) {
    if (!name) return undefined;
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    window.sessionStorage.setItem(name, data);
    return true;
  };

  /**
   * 获取 sessionStorage
   * @param[name] session关键字
   * @return any  获取到的值
   */
  var getSessionStorage = function getSessionStorage(name) {
    if (!name) return false;
    var value = window.sessionStorage.getItem(name);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
    // return value ? JSON.parse(value) : value
  };

  /**
   * 删除 sessionStorage
   * @param[name] session关键字
   * @return boolean 删除成功与否
   */
  var removeSessionStorage = function removeSessionStorage(name) {
    if (!name) return false;
    window.sessionStorage.removeItem(name);
    return true;
  };

  /**
   * 语言类型枚举值
   * */
  var EnumLanguageType;
  (function (EnumLanguageType) {
    EnumLanguageType["en"] = "en-US";
    EnumLanguageType["zh"] = "zh-CN";
  })(EnumLanguageType || (EnumLanguageType = {}));
  /**
   * 设置错误消息语言类型
   * @param[lang] LanguageType 默认: 中文[zh-CN]
   * */
  var setErrorCodeLang = function setErrorCodeLang() {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EnumLanguageType.zh;
    if (lang === EnumLanguageType.en) {
      return EnumLanguageType.en;
    }
    return EnumLanguageType.zh;
  };

  /**
   * 设置页面标题
   *
   * @param[title] 标题
   */
  function setHtmlTitle(title) {
    document.title = title;
  }

  /**
   * 配置url参数
   *
   * @param[data] 参数
   */
  function setUrlParam(data) {
    if (Object.prototype.toString.call(data) !== '[object Object]') {
      return undefined;
    }
    var keys = Object.keys(data);
    var str = '';
    keys.forEach(function (key) {
      var value = data[key];
      if (isExistValue(value)) {
        if (str) {
          str += '&';
        }
        str += "".concat(key, "=").concat(value);
      }
    });
    return encodeURI(str);
  }

  /**
   * 字符串 大小写转换
   * String to Case
   * */
  var stringToLowerOrUpperCase = function stringToLowerOrUpperCase(str, toUpper) {
    if (str && typeof str === 'string') {
      return toUpper ? str.toUpperCase() : str.toLowerCase();
    }
    return str;
  };

  /**
   * name：函数节流
   * description：函数触发后,如果函数还在执行中，就不再执行，
   * @params[fn]  回调函数
   * @params[delay]  定时器延时
   */
  var throttle = function throttle(fn) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var timer = null;
    return function () {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      // 函数在执行中，无论触发几次都不执行。
      if (timer) return;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn && fn.apply(_this, args);
        timer = null;
      }, delay);
    };
  };

  // DEMO
  // 执行 throttle 函数返回新函数
  /*
  const betterFn = throttle((data:any) => {
    console.log(data);
    console.log('fn 节流执行了')
  }, 1000)
  */
  // 第一次触发 scroll 执行一次 fn，后续只有在停止滑动 1 秒后才执行函数 fn
  /*
  betterFn(80)
  */

  /**
   * 标签语义化编译
   * @param[str]  str
   * eg: &lt;h1&gt; => <h1>
   * */
  function unescape(str) {
    if (typeof str !== "string") {
      return false;
    }
    return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`').replace(/&amp;/g, '&');
    // &amp; replacement has to be the last one to prevent
    // bugs with intermediate strings containing escape sequences
    // See: https://github.com/validatorjs/validator.js/issues/1827
  }

  /**
   * @names：模拟表单提交数据
   * @params[config] Object
   * */
  var utilsSubmitForm = function utilsSubmitForm(config) {
    config = config || {};
    var action = config.url;
    var method = config.method || 'POST';
    var params = config.params || {};
    var form = document.createElement('form');
    form.style.display = 'none';
    form.method = method;
    form.action = action;
    // form.target = '_blank';

    for (var _i = 0, _Object$entries = Object.entries(params); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      var input = document.createElement('input');
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

  /**
   * 字符串 转 数组
   * String to Array
   * @param[str] 需要拆分的数据
   * @param[separator] 拆分标识符，默认 ,
   * */

  //@deception
  var stringToArray = function stringToArray(str, separator) {
    separator = separator || ',';
    if (typeof str === 'string') {
      str = str.trim();
      separator = separator || ',';
      return str.split(separator || /\s+/);
    } else if (Array.isArray(str)) {
      return str;
    } else if (typeof str === 'number' || typeof str === "boolean") {
      return [str];
    }
    return [];
  };

  /**
   * 字符串格式判断
   * */
  var utilToString = function utilToString(input) {
    if (_typeof(input) === 'object' && input !== null) {
      if (typeof input.toString === 'function') {
        input = input.toString();
      } else {
        input = '[object Object]';
      }
    } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
      input = '';
    }
    return String(input);
  };

  /**
   * Error codes and messages.
   * */
  var errorCodes$9 = {
    'zh-CN': {
      IP_SEGMENT_ERR_FORMAT: 'IP 格式错误',
      IP_SEGMENT_NOT_SUPPORT_V6: '不支持IPV6网段',
      IP_SEGMENT_ERR_TYPE: 'IP类型不一致',
      IP_SEGMENT_ERR_SEGMENT: 'IP 不在同一网段',
      IP_SEGMENT_ERR_RANGE: '结束IP不能小于起始IP',
      IP_SEGMENT_SUCCESS: '校验成功'
    },
    'en-US': {
      IP_SEGMENT_ERR_FORMAT: 'Incorrect IP format',
      IP_SEGMENT_NOT_SUPPORT_V6: 'Does not support IPV6',
      IP_SEGMENT_ERR_TYPE: 'IP types are inconsistent',
      IP_SEGMENT_ERR_SEGMENT: 'IP is not in the same network segment',
      IP_SEGMENT_ERR_RANGE: 'The ending IP cannot be smaller than the starting IP',
      IP_SEGMENT_SUCCESS: 'Verification succeeded'
    }
  };

  // IPv4 Segment
  var v4Seg = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
  var v4Str = "(".concat(v4Seg, "[.]){3}").concat(v4Seg);
  var IPv4Reg = new RegExp("^".concat(v4Str, "$"));

  // IPv6 Segment
  var v6Seg = '(?:[0-9a-fA-F]{1,4})';
  var IPv6Reg = new RegExp('^(' + "(?:".concat(v6Seg, ":){7}(?:").concat(v6Seg, "|:)|") + "(?:".concat(v6Seg, ":){6}(?:").concat(v4Str, "|:").concat(v6Seg, "|:)|") + "(?:".concat(v6Seg, ":){5}(?::").concat(v4Str, "|(:").concat(v6Seg, "){1,2}|:)|") + "(?:".concat(v6Seg, ":){4}(?:(:").concat(v6Seg, "){0,1}:").concat(v4Str, "|(:").concat(v6Seg, "){1,3}|:)|") + "(?:".concat(v6Seg, ":){3}(?:(:").concat(v6Seg, "){0,2}:").concat(v4Str, "|(:").concat(v6Seg, "){1,4}|:)|") + "(?:".concat(v6Seg, ":){2}(?:(:").concat(v6Seg, "){0,3}:").concat(v4Str, "|(:").concat(v6Seg, "){1,5}|:)|") + "(?:".concat(v6Seg, ":){1}(?:(:").concat(v6Seg, "){0,4}:").concat(v4Str, "|(:").concat(v6Seg, "){1,6}|:)|") + "(?::((?::".concat(v6Seg, "){0,5}:").concat(v4Str, "|(?::").concat(v6Seg, "){1,7}|:))") + ')(%[0-9a-zA-Z-.:]{1,})?$');

  /**
   * 验证 IP V4 合法性
   * @param[str] 关键词
   * */
  var isIPv4 = function isIPv4(str) {
    return IPv4Reg.test(str);
  };

  /**
   * 验证 IP V6 合法性
   * @param[str] 关键词
   * */
  var isIPv6 = function isIPv6(str) {
    return IPv6Reg.test(str);
  };

  /**
   * 验证IP合法性
   * @param[str] 关键词
   * */
  var isIP = function isIP(str) {
    if (isIPv4(str)) return 4;
    if (isIPv6(str)) return 6;
    return 0;
  };

  /**
   * IPV4 是否为同一网段判定
   * @param[startIP] IP开始断
   * @param[endIP] IP结束断
   * @param[lang] 国际话语言 默认： zh_CN
   * */
  var isSameIPV4Segment = function isSameIPV4Segment(startIP, endIP, lang) {
    var errorMessage = errorCodes$9[setErrorCodeLang(lang)];
    if (!isIPv4(startIP) || !isIPv4(endIP)) {
      /** IP 格式错误 */
      return {
        success: false,
        message: errorMessage.IP_SEGMENT_ERR_FORMAT
      };
    }

    /** IPV4 拆分 */
    var ipV4Split = function ipV4Split(ip) {
      // ip = 255.255.255.1
      var slice_index = ip.lastIndexOf('.');
      return {
        // 255.255.255
        ip_prefix: ip.slice(0, slice_index),
        // 1
        ip_suffix: ip.slice(slice_index + 1)
      };
    };
    var start_ip = ipV4Split(startIP);
    var end_ip = ipV4Split(endIP);
    var msg_tips = {
      success: false,
      // IP 不在同一网段
      message: errorMessage.IP_SEGMENT_ERR_SEGMENT
    };
    if (start_ip.ip_prefix === end_ip.ip_prefix) {
      if (start_ip.ip_suffix > end_ip.ip_suffix) {
        // 起始IP不能大于结束IP
        msg_tips.message = errorMessage.IP_SEGMENT_ERR_RANGE;
      } else {
        msg_tips = {
          success: true,
          // 校验成功,
          message: errorMessage.IP_SEGMENT_SUCCESS
        };
      }
    }
    return msg_tips;
  };

  /**
   * 域名格式校验 - 错误提示消息.
   * */
  var errorCodes$8 = {
    'zh-CN': {
      DOMAIN_IS_EMPTY: '请输入域名.',
      DOMAIN_FORMAT_ERROR: '域名格式错误.',
      DOMAIN_TOO_SHORT: '域名长度不能小于 1 个字符.',
      DOMAIN_TOO_LONG: '域名长度不能超过 255 个字符.',
      LABEL_STARTS_WITH_DASH: '域名关键字不能以 . 开头.',
      LABEL_ENDS_WITH_DASH: '域名关键字不能以 . 结尾.',
      LABEL_WITH_HYPHEN: '域名关键字不能以 - 开头或结尾.',
      LABEL_TOO_LONG: '域名关键字的长度最多为 63 个字符.',
      LABEL_TOO_SHORT: '请输入域名关键字.',
      LABEL_WITH_UNDERSCORES: '域名关键字不能包含 _',
      LABEL_ENDS_WITH_UNDERSCORES: '域名关键字不能以 _ 结尾.',
      LABEL_INVALID_CHARS: '域名关键字只能包含a-z、A-Z、0-9、-、中文汉字.',
      LABEL_INVALID_CHARS_WITH_UNDERSCORES: '域名关键字只能包含a-z、A-Z、0-9、-、_、中文汉字.',
      TLD_WITH_NUMBER: 'TLD不能包含数字.',
      TLD_INVALID_CHARS: 'TLD格式错误.'
    },
    'en-US': {
      DOMAIN_IS_EMPTY: 'Check content is empty',
      DOMAIN_FORMAT_ERROR: 'Domain name format error',
      DOMAIN_TOO_SHORT: 'Domain name too short.',
      DOMAIN_TOO_LONG: 'Domain name too long. It should be no more than 255 chars.',
      LABEL_STARTS_WITH_DASH: 'Domain name label can not start with a dash.',
      LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
      LABEL_WITH_HYPHEN: 'Domain labels cannot start or end with -.',
      LABEL_TOO_LONG: 'Domain name label should be at most 63 chars long.',
      LABEL_TOO_SHORT: 'Domain name label should be at least 1 character long.',
      LABEL_WITH_UNDERSCORES: 'Domain labels cannot contain _',
      LABEL_ENDS_WITH_UNDERSCORES: 'Domain labels can not end with _',
      LABEL_INVALID_CHARS: 'Domain name label can only contain a-z、A-Z、0-9、-、中文汉字.',
      LABEL_INVALID_CHARS_WITH_UNDERSCORES: 'Domain name label can only contain a-z、A-Z、0-9、-、_、中文汉字.',
      TLD_WITH_NUMBER: 'TLD cannot contain numbers',
      TLD_INVALID_CHARS: 'TLD format error'
    }
  };

  /**
   * 域名关键词验证
   * @param[config.label] 关键词
   * @param[config.option.allow_underscores] 是否允许包含下划线, 默认: false
   * @param[config.lang] 国际话语言 默认： zh_CN
   * */
  var domainLabelValidator = function domainLabelValidator(config) {
    var label = config.label,
      _config$option = config.option,
      option = _config$option === void 0 ? {} : _config$option,
      lang = config.lang;
    var errorMessage = errorCodes$8[setErrorCodeLang(lang)];
    label = filterStringSpace(label, true);
    if (!label) {
      return {
        success: false,
        message: errorMessage.LABEL_TOO_SHORT
      };
    }
    option = _objectSpread2({
      // 是否允许包含下划线
      allow_underscores: false
    }, option);
    if (label.length > 63) {
      return {
        success: false,
        message: errorMessage.LABEL_TOO_LONG
      };
    }
    if (!option.allow_underscores && /_/.test(label)) {
      // 不允许下划线
      return {
        success: false,
        // 域名关键字不能包含 _
        message: errorMessage.LABEL_WITH_UNDERSCORES
      };
    } else {
      // 允许下划线 =》 域名关键字不能以 _ 结尾
      if (/_$/.test(label)) {
        return {
          success: false,
          message: errorMessage.LABEL_ENDS_WITH_UNDERSCORES
        };
      }
    }

    // \u4E00-\u9FA5 \u00a1-\uffff
    var labelReg = /^[a-z\u00a1-\uffff0-9-]+$/i;
    // 域名关键字只能包含a-z、A-Z、0-9、-、中文汉字.
    var labelRegErrMsg = errorMessage.LABEL_INVALID_CHARS;
    if (option.allow_underscores) {
      // 允许下划线
      labelReg = /^[a-z\u00a1-\uffff0-9-_]+$/i;
      labelRegErrMsg = errorMessage.LABEL_INVALID_CHARS_WITH_UNDERSCORES;
    }
    if (!labelReg.test(label)) {
      return {
        success: false,
        message: labelRegErrMsg
      };
    }

    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(label)) {
      return {
        success: false,
        message: errorMessage.LABEL_INVALID_CHARS
      };
    }

    // disallow node starting or ending with hyphen
    if (/^-|-$/.test(label)) {
      return {
        success: false,
        message: errorMessage.LABEL_WITH_HYPHEN
      };
    }
    return {
      success: true,
      message: ''
    };
  };

  /**
   * TLD格式校验
   * @param[params.tld] 需要校验的TLD
   * @param[params.option] TLD验证可选参数
   * @param[params.lang] 国际话语言
   * */
  var tldValidator = function tldValidator(params) {
    var tld = params.tld,
      _params$option = params.option,
      option = _params$option === void 0 ? {} : _params$option,
      lang = params.lang;
    option = _objectSpread2({
      // 是否允许纯数字TLD
      allow_numeric_tld: false,
      // 是否允许TLD包含 -
      allow_hyphen_tld: false
    }, option);
    var errorMessage = errorCodes$8[setErrorCodeLang(lang)];

    // reject numeric TLDs
    if (!option.allow_numeric_tld && /^\d+$/.test(tld)) {
      return {
        success: false,
        message: errorMessage.TLD_WITH_NUMBER
      };
    }
    var tldReg = /^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i;
    if (option.allow_hyphen_tld) {
      tldReg = /^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]{2,})$/i;
    }
    if (!tldReg.test(tld)) {
      return {
        success: false,
        message: errorMessage.TLD_INVALID_CHARS
      };
    }
    return {
      success: true,
      message: ''
    };
  };

  var setMaxNode = function setMaxNode(num, require_tld) {
    var min_node = 1;
    var max_node = 126;
    if (require_tld) {
      min_node = 2;
      max_node = max_node + 1;
    }
    if (typeof num === 'number') {
      if (num < min_node) {
        return min_node;
      } else {
        if (num > max_node) {
          return max_node;
        }
      }
      return num;
    }
    return max_node;
  };

  /**
   * 域名格式校验 - 默认配置参数
   * FQDN：(Fully Qualified Domain Name)全限定域名：同时带有主机名和域名的名称。（通过符号“.”）
   * 例如：主机名是bigserver,域名是mycompany.com,那么FQDN就是bigserver.mycompany.com。 [1]
   * str: m.zdns.cn || zdns.cn. || h.m.zdns.cn.
   *
   * */
  var default_fqdn_options = {
    // 是否包含TLD
    require_tld: true,
    // 域名最大节点数
    // a.com
    // a.com.cn
    // a.baidu.com.cn
    max_node: 127,
    // 是否允许包含下划线
    allow_underscores: false,
    // 是否允许 . 号结尾
    allow_trailing_dot: false,
    // 是否允许纯数字TLD
    allow_numeric_tld: false,
    // 是否允许TLD包含 -
    allow_hyphen_tld: false,
    // 是否允许配符 *
    allow_wildcard: false
  };

  /**
   * 域名格式校验
   * FQDN：(Fully Qualified Domain Name)全限定域名：同时带有主机名和域名的名称。（通过符号“.”）
   * 例如：主机名是bigserver,域名是mycompany.com,那么FQDN就是bigserver.mycompany.com。 [1]
   * str: m.zdns.cn || zdns.cn. || h.m.zdns.cn.
   * @param[str] 需要校验的文本
   * @param[option] 域名验证可选参数
   * @param[lang] 国际话语言
   * */
  var isFQDN = function isFQDN(str) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var lang = arguments.length > 2 ? arguments[2] : undefined;
    var errorMessage = errorCodes$8[setErrorCodeLang(lang)];
    str = filterStringSpace(str, true);
    option = _objectSpread2(_objectSpread2({}, default_fqdn_options), option);
    console.log(option);
    if (!str) {
      return {
        success: false,
        message: errorMessage.DOMAIN_IS_EMPTY
      };
    }
    var len = str.length;
    if (len > 255) {
      return {
        success: false,
        message: errorMessage.DOMAIN_TOO_LONG
      };
    }

    /* Remove the optional trailing dot before checking validity */
    if (option.allow_trailing_dot && str[len - 1] === '.') {
      str = str.substring(0, len - 1);
    }

    /* Remove the optional wildcard before checking validity */
    if (option.allow_wildcard && str.indexOf('*.') === 0) {
      str = str.substring(2);
    }
    var nodes = str.split('.');
    console.log(nodes);
    var node_len = nodes.length;
    var max_node = setMaxNode(option.max_node, option.require_tld || false);
    if (option.require_tld) {
      // 域名包含tld
      // 最小节点数据 = 2   a.com b.cn
      if (node_len < 2) {
        // 域名格式错误  zdns.cn
        return {
          success: false,
          message: errorMessage.DOMAIN_FORMAT_ERROR
        };
      }
      if (node_len > max_node) {
        return {
          success: false,
          message: errorMessage.DOMAIN_FORMAT_ERROR
        };
      }
      var tldResData = tldValidator({
        tld: nodes[node_len - 1],
        option: {
          allow_numeric_tld: option.allow_numeric_tld,
          allow_hyphen_tld: option.allow_hyphen_tld
        },
        lang: lang
      });
      if (!tldResData.success) {
        return tldResData;
      }
    } else {
      // 域名不包含tld => 节点数量 = 最大节点数 - 1
      if (node_len > max_node) {
        return {
          success: false,
          message: errorMessage.DOMAIN_FORMAT_ERROR
        };
      }
    }

    /** 域名关键词验证 */
    for (var i = 0; i < node_len; i++) {
      var label = nodes[i];
      if (!label) {
        return {
          success: false,
          message: errorMessage.DOMAIN_FORMAT_ERROR
        };
      }
      var labelResData = domainLabelValidator({
        label: label,
        option: {
          allow_underscores: option.allow_underscores
        },
        lang: lang
      });
      if (!labelResData.success) {
        return labelResData;
      }
    }
    return {
      success: true,
      message: ''
    };
  };

  /**
   * 域名合法性校验
   * @param[params.str] 域名
   * @param[params.lang] 国际话语言
   * @param[params.config] 域名格式校验参数
   * @config 参数默认值
   * @param[params.config.require_tld] 是否包含TLD，默认：true
   * @param[params.config.allow_underscores] 是否允许包含下划线，默认：true
   * @param[params.config.allow_trailing_dot] 是否允许 . 号结尾，默认：false
   * @param[params.config.allow_numeric_tld] 是否允许数字TLD号结尾，默认：false
   * @param[params.config.allow_wildcard] 是否允许配符 *，默认：false
   * */
  var isDomain = function isDomain() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      str: ''
    };
    var str = params.str,
      lang = params.lang,
      _params$config = params.config,
      config = _params$config === void 0 ? {} : _params$config;
    return isFQDN(str, _objectSpread2({
      // 是否包含TLD
      require_tld: true,
      // 是否允许包含下划线
      allow_underscores: true,
      // 是否允许 . 号结尾
      allow_trailing_dot: false,
      // 是否允许数字TLD号结尾
      allow_numeric_tld: false,
      // 是否允许配符 *
      allow_wildcard: false
    }, config), lang);
  };

  /**
   * 数字取值范围校验
   * @param[str] 数值
   * @param[min] 最小值
   * @param[max] 最大值
   * */
  var isInRange = function isInRange(str, min, max) {
    if (!isNumber(str)) {
      return false;
    }
    var val = Number(str);
    return val >= min && val <= max;
  };

  /**
   * 端口号校验
   * @param[str] 校验的文本
   * */
  var isPort = function isPort(str) {
    var isRange = isInRange(str, 1, 65535);
    if (isRange && "".concat(str).includes('.')) {
      return false;
    }
    return isRange;
  };

  /**
   * MX【邮件交换记录 - Mail Exchanger】  => 将域名指向邮件服务器地址
   *  使用场景：设置邮箱时，让邮箱能收到邮件，就需要添加 MX 记录。MX全称为mail exchanger，用于电子邮件系统发邮件时根据收信人的地址后缀来定位邮件服务器。例如，当有人发邮件给“vincen@example.com”时，系统将对“example.com”进行DNS中的MX记录解析。如果MX记录存在，系统就根据MX记录的优先级，将邮件转发到与该MX相应的邮件服务器上。
   *  主机记录：一般是指子域名的前缀，（要做xxx@dns-example.com的邮箱，所以主机记录输入“ @ ”；要做xxx@mail.dns-example.com，如果主机记录填 mail）。
   *  解析线路：默认为必填项，否则会导致部分用户无法解析，邮件无法收取；
   *  记录值：输入内容通过联系邮箱注册商提供。例如阿里云邮提供的需要配置的解析记录值是 mx1.qiye.aliyun.com；
   *  MX优先级：输入内容通过联系邮箱注册商提供，MX 优先级的数值越低，优先级别就越高（如下图，邮件会先尝试发送到 MX 优先级为 5 的mx1.qiye.aliyun.com，如果尝试失败，才会发送到 MX 优先级为10 的mx2.qiye.aliyun.com）。
   *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
   *
   * */
  /**
   * Error codes and messages.
   * */
  var errorCodes$7 = {
    'zh-CN': {
      FORMAT_ERROR: 'MX记录的记录值为域名形式（如: abc.example.com）'
    },
    'en-US': {
      FORMAT_ERROR: 'The MX record value is in the domain name format (eg: abc.example.com).'
    }
  };
  var isMX = function isMX(str, lang) {
    // 过滤全部空格
    var regValue = filterStringSpace(str, true);
    var error_code = errorCodes$7[setErrorCodeLang(lang)];
    var _isDomain = isDomain({
        str: regValue,
        lang: lang,
        config: {
          allow_trailing_dot: true
        }
      }),
      success = _isDomain.success;
    return {
      success: success,
      message: success ? '' : error_code.FORMAT_ERROR,
      regValue: regValue
    };
  };

  /**
   * TXT  => 文本长度限制512，通常做SPF记录（反垃圾邮件）
   *  使用场景：如果希望对域名进行标识和说明，可以使用 TXT 记录， TXT 记录多用来做 SPF 记录（反垃圾邮件）。
   *  主机记录：一般是指子域名的前缀（如需为子域名为 www.dns-example.com 添加 TXT 记录， 主机记录输入 www；如需为dns-example.com添加TXT记录，主机记录输入 @）
   *  解析线路：默认 为必选项，未设置会导致部分用户无法解析。
   *  记录值：常用情况TXT 记录是用来做 SPF 反垃圾邮件的，最典型的 SPF 格式的 TXT 记录例子为“v=spf1 a mx ~all”，表示只有这个域名的 A 记录和 MX 记录中的 IP 地址有权限使用这个域名发送邮件。
   *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
   *
   * */
  /**
   * Error codes and messages.
   * */
  var errorCodes$6 = {
    'zh-CN': {
      TOO_LONG: 'TXT记录值长度限制 255 个字符.'
    },
    'en-US': {
      TOO_LONG: 'The TXT record value must be 1 to 255 characters in length.'
    }
  };
  var isTXT = function isTXT(str) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var min = option.min || 1;
    var max = option.min || 255;
    var error_code = errorCodes$6[setErrorCodeLang(option.lang)];
    var success = !(str.length > max || str.length < min);
    return {
      success: success,
      message: success ? '' : error_code.TOO_LONG,
      regValue: str
    };
  };

  /**
   * NS【Name Server - 域名服务器记录】  => 将子域名指定其他DNS服务器解析
   *  使用场景：如果需要把子域名交给其他 DNS 服务商解析，就需要添加 NS 记录。
   *  主机记录：一般是指子域名的前缀（如需将子域名为www.dns-example.com 的解析授权给腾讯云解析的DNS服务器进行解析管理，只需要在主机记录处填写 www 即可）。
   *  解析线路：默认为必填项，未设置默认线路会导致部分用户无法解析。
   *  记录值：记录值为要授权的 DNS 服务器域名，例如腾讯云解析的DNS服务器域名f1g1ns1.dnspod.net。
   *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
   *
   * */
  /**
   * Error codes and messages.
   * */
  var errorCodes$5 = {
    'zh-CN': {
      FORMAT_ERROR: 'NS记录的记录值为域名形式（如: ns1.example.com）'
    },
    'en-US': {
      FORMAT_ERROR: 'The NS record value is in the domain name format (eg: ns1.example.com).'
    }
  };
  var isNS = function isNS(str, lang) {
    // 过滤全部空格
    var regValue = filterStringSpace(str, true);
    var error_code = errorCodes$5[setErrorCodeLang(lang)];
    var _isDomain = isDomain({
        str: regValue,
        lang: lang,
        config: {
          allow_trailing_dot: true
        }
      }),
      success = _isDomain.success;
    return {
      success: success,
      message: success ? '' : error_code.FORMAT_ERROR,
      regValue: regValue
    };
  };

  /**
   * CAA  =>  CA证书颁发机构授权校验
   *  使用场景： CAA(Certificate Authority Authorization)，即证书颁发机构授权。是一项新的可以添加到DNS记录中的额外字段,通过DNS机制创建CAA资源记录，可以限定域名颁发的证书和CA（证书颁发机构）之间的联系。未经授权的第三方尝试通过其他CA注册获取用于该域名的SSL/TLS证书将被拒绝。
   *  域名设置 CAA 记录，使网站所有者，可授权指定CA机构为自己的域名颁发证书，以防止HTTPS证书错误签发，从而提高网站安全性。
   *  CAA记录的格式为： [flag] [tag] [value]，是由一个标志字节的[flag]和一个被称为属性的[tag]-[value]（标签-值）对组成。您可以将多个CAA字段添加到域名的DNS记录中。
   * ------> [flag]：无符号整数（目前仅支持0和128），用于标志认证机构。通常情况下填0，表示如果颁发证书机构无法识别本条信息，就忽略。
   * ------> [tag]：支持 issue、issuewild 和 iodef。
   * --------> issue：CA授权单个证书颁发机构发布的 任何类型 域名证书。
   * --------> issuewild：CA授权单个证书颁发机构发布主机名的 通配符 证书。
   * --------> iodef：CA可以将违规的颁发记录URL发送给某个电子邮箱。
   * ------> [value]： CA的域名或用于违规通知的电子邮箱。
   */
  /**
   * Error codes and messages.
   * */
  var errorCodes$4 = {
    'zh-CN': {
      FORMAT_ERROR: 'CAA记录的记录值为字符串形式, 如：0 issue "ca.example.com"'
    },
    'en-US': {
      FORMAT_ERROR: 'Specify your CAA Record value as a string, (eg: 0 issue "ca.example.com" ).'
    }
  };

  // （如：0 iodef "mailto:admin@dns-example.com"）
  // （如：0 issue "symantec.com"）
  var isCAA = function isCAA(str, lang) {
    var caaValueRegex = /^"[\w-:./@]{1,255}"$/;
    var caaTags = ['issue', 'issuewild', 'iodef'];
    // 过滤多余的空格文本
    var regValue = filterStringSpace(str, true);
    var values = stringToArray(regValue);
    console.log(values);
    var success = values.length === 3 && isInRange(values[0], 0, 128) && caaTags.indexOf(values[1]) !== -1 && caaValueRegex.test(values[2]);
    var error_code = errorCodes$4[setErrorCodeLang(lang)];
    return {
      success: success,
      message: success ? '' : error_code.FORMAT_ERROR,
      regValue: regValue
    };
  };

  /**
   * SRV【服务定位（SRV）资源记录】  => 记录提供特定的服务的服务器
   *  使用场景： SRV 记录用来标识某台服务器使用了某个服务，常见于微软系统的目录管理。
   *  主机记录： 格式为 服务的名字.协议的类型。
   *    例如：_sip._tcp
   *  解析线路： 默认 为必选项，未设置默认线路会导致部分用户无法解析
   *  记录值： 格式为 【优先级】 【权重】 【端口】 目标地址 ，每项中间需以空格分隔。
   *    例如：0 5 5060 sipserver.example.com
   *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。

   * */
  /**
   * Error codes and messages.
   * */

  var errorCodes$3 = {
    'zh-CN': {
      FORMAT_ERROR: 'SRV记录格式为： 优先级 权重 端口 目标地址 ，每项中间需以空格分隔。例如 “0 5 5060 sipserver.example.com”。'
    },
    'en-US': {
      FORMAT_ERROR: 'The format of an SRV record is: [Priority] [Weight] [Port number] [Target address]. Separate the priority, weight, port number, and target address with spaces. Example: 0 5 5060 sipserver.example.com'
    }
  };
  var isSRV = function isSRV(str, lang) {
    // 过滤多余的空格文本
    var regValue = filterStringSpace(str);
    var values = stringToArray(regValue);
    console.log(values);
    var error_code = errorCodes$3[setErrorCodeLang(lang)];
    if (values.length === 4) {
      var priority = values[0];
      var weight = values[1];
      var port = values[2];
      var domain = values[3];
      console.log("priority: ".concat(priority, ", weight: ").concat(weight, ", port: ").concat(port, ", domain: ").concat(domain));
      var _isDomain = isDomain({
          str: regValue,
          lang: lang,
          config: {
            allow_trailing_dot: true
          }
        }),
        success = _isDomain.success;
      // console.log(isInRange(priority, 0, 65535));
      // console.log(isInRange(values[1], 0, 65535));
      // console.log(isPort(values[2]));
      var _success = isInRange(priority, 0, 65535) && isInRange(weight, 0, 65535) && isPort(port) && success;
      return {
        success: _success,
        message: _success ? '' : error_code.FORMAT_ERROR,
        regValue: regValue
      };
    }
    return {
      success: false,
      message: error_code.FORMAT_ERROR,
      regValue: regValue
    };
  };

  /**
   * A记录【Address】 => 将域名指向一个IPV4地址
   *  使用场景: 添加 A 记录可实现将域名指向 IP 地址。
   *  主机记录：一般是指子域名的前缀（如需创建子域名为www.dns-example.com, 主机记录输入 www；如需实现dns-example.com，主机记录输入 @）。
   *  解析线路：选择 默认 （默认为必选项，如未设置会导致部分用户无法访问 )。
   *  记录值：记录值为 IP 地址，填写 IPv4 地址。
   *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
   *
   * */
  /**
   * Error codes and messages.
   * */
  var errorCodes$2 = {
    'zh-CN': {
      FORMAT_ERROR: 'A记录的记录值为IPv4形式（如: 10.10.10.10）'
    },
    'en-US': {
      FORMAT_ERROR: 'The A record value is in the IPv4 format (eg: 10.10.10.10).'
    }
  };
  var isA = function isA(str, lang) {
    // 过滤全部空格
    var regValue = filterStringSpace(str);
    var error_code = errorCodes$2[setErrorCodeLang(lang)];
    var success = !!regValue && isIPv4(regValue);
    return {
      success: success,
      message: success ? '' : error_code.FORMAT_ERROR,
      regValue: regValue
    };
  };

  /**
   * AAAA【AAAA record】  => 将域名指向一个IPV6地址
   * 使用场景：当预期是实现访问者通过 IPv6 地址访问网站，可以使用 AAAA 记录实现。
   * 主机记录：一般是指子域名的前缀（如需创建子域名为www.dns-example.com, 主机记录输入 www；如需实现dns-example.com，主机记录输入 @）
   * 解析线路：默认为必选项，未设置会导致部分用户无法访问；
   * 记录值：记录值为IP地址，填写 IPV6 地址
   * TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
   *
   * */
  /**
   * Error codes and messages.
   * */
  var errorCodes$1 = {
    'zh-CN': {
      FORMAT_ERROR: 'AAAA记录的记录值为IPv6形式（如: ff03:0:0:0:0:0:0:c1）'
    },
    'en-US': {
      FORMAT_ERROR: 'The AAAA record value is in the IPv6 format (eg: ff03:0:0:0:0:0:0:c1).'
    }
  };
  var isAAAA = function isAAAA(str, lang) {
    // 过滤全部空格
    var regValue = filterStringSpace(str);
    var error_code = errorCodes$1[setErrorCodeLang(lang)];
    var success = !!regValue && isIPv6(regValue);
    return {
      success: success,
      message: success ? '' : error_code.FORMAT_ERROR,
      regValue: regValue
    };
  };

  /**
   * CNAME【别名解析 - Canonical Name】  => 将域名指向另外一个域名
   *  使用场景: 当需要将域名指向另一个域名，再由另一个域名提供 IP 地址，就需要添加 CNAME 记录，最常用到 CNAME 的场景包括做 CDN、企业邮箱、全局流量管理等。
   *  主机记录：一般是指子域名的前缀（如需创建子域名为www.dns-example.com的解析, 主机记录输入“ www”；如需实现dns-example.com的解析，主机记录输入“@”）
   *  解析线路：默认为必填项，否则会导致部分用户无法解析。
   *  记录值：记录值为 CNAME 指向的域名，只可以填写域名。
   *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
   *
   * */
  /**
   * Error codes and messages.
   * */
  var errorCodes = {
    'zh-CN': {
      FORMAT_ERROR: 'CNAME记录的记录值为域名形式（如: abc.example.com）'
    },
    'en-US': {
      FORMAT_ERROR: 'The Canonical Name value is in the domain name format (eg: abc.example.com).'
    }
  };
  var isCNAME = function isCNAME(str, lang) {
    // 过滤全部空格
    var regValue = filterStringSpace(str, true);
    var _isDomain = isDomain({
        str: regValue,
        lang: lang,
        config: {
          allow_trailing_dot: true
        }
      }),
      success = _isDomain.success;
    var error_code = errorCodes[setErrorCodeLang(lang)];
    return {
      success: success,
      message: success ? '' : error_code.FORMAT_ERROR,
      regValue: regValue
    };
  };

  /**
   * 域名解析记录公共校验
   *
   * */
  var EnumRecordType;

  /**
   * 域名解析记录公共校验
   * @param[str] 校验值
   * @param[type] 校验类型
   * @param[lang] 国际话语言 默认： zh_CN
   * */
  (function (EnumRecordType) {
    EnumRecordType["A"] = "A";
    EnumRecordType["AAAA"] = "AAAA";
    EnumRecordType["NS"] = "NS";
    EnumRecordType["MX"] = "MX";
    EnumRecordType["CNAME"] = "CNAME";
    EnumRecordType["CAA"] = "CAA";
    EnumRecordType["SRV"] = "SRV";
    EnumRecordType["TXT"] = "TXT";
  })(EnumRecordType || (EnumRecordType = {}));
  var isRdata = function isRdata(str, type, lang) {
    switch (type.toUpperCase()) {
      case EnumRecordType.A:
        return isA(str, lang);
      case EnumRecordType.AAAA:
        return isAAAA(str, lang);
      case EnumRecordType.CAA:
        return isCAA(str, lang);
      case EnumRecordType.CNAME:
        return isCNAME(str, lang);
      case EnumRecordType.MX:
        return isMX(str, lang);
      case EnumRecordType.NS:
        return isNS(str, lang);
      case EnumRecordType.SRV:
        return isSRV(str, lang);
      case EnumRecordType.TXT:
        return isTXT(str, {
          lang: lang
        });
      default:
        return {
          success: false,
          message: '未知记录类型！',
          regValue: str
        };
    }
  };

  /**
   * 主机合法性校验
   * */
  var isHost = function isHost(str) {
    var specialHosts = '@';
    if (str.indexOf(specialHosts) > -1) {
      return true;
    }
    var _isFQDN = isFQDN(str, {
        // 是否包含TLD
        require_tld: true,
        // 是否允许包含下划线
        allow_underscores: true,
        // 是否允许 . 号结尾
        allow_trailing_dot: false,
        // 是否允许数字TLD号结尾
        allow_numeric_tld: false,
        // 是否允许配符 *
        allow_wildcard: false
      }),
      success = _isFQDN.success;
    return success;
  };

  /**
   * TTL【Time-To-Live】 => 为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
   *  TTL值是指全国各地的localdns服务器中缓存解析结果的时间周期。
   *  1 . 当各地的localdns服务器接接收到解析请求查询时，就会向权威DNS（例如云解析DNS）发起解析请求查询，获取到解析结果。
   *  2 . localdns会将查询到的解析结果，保存到本地一段时间。保存的这个时间周期，就是根据TTL设置而来的。在保存的这个时间周期内，如果各地localdns再接收到此域名的解析请求查询，是不会再向权威DNS发起请求查询的，而是直接将本地保存的解析结果返回给用户。
   *  3 . 当localdns本地缓存的时间到期后，就会清除该解析记录的缓存结果，清除后，如果各地localdns再接收到此域名的解析请求查询，则会重新向权威DNS（例如云解析DNS）发起解析请求查询，获取最新的解析结果。
   *
   *  */
  var isTTL = function isTTL(str) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 65535;
    if (!isNumber(str)) {
      return false;
    }
    var ttl = Number(str);
    var minTTL = 0;
    var maxTTL = 65535;
    if (ttl < minTTL || ttl > maxTTL) {
      return false;
    }
    return ttl >= min && ttl <= max;
  };

  // is zone
  var isZone = function isZone(str, lang) {
    var rootZone = '.';
    if (rootZone === str) {
      return true;
    }
    var _isDomain = isDomain({
        str: str,
        lang: lang,
        config: {
          allow_trailing_dot: true
        }
      }),
      success = _isDomain.success;
    return success;
  };

  /**
   * 银行卡号合法性验证
   * @param[str] any 银行卡
   * description： 15位或者16位或者19位
   * */
  var IsBankCard = function IsBankCard(str) {
    // 建行16、19，农行19，工行19、交通17、民生16、兴业18、招行12、16、19
    var reg = /^([1-9]{1})(\d{11}|\d{15}|\d{16}|\d{17}|\d{18})$/;
    if (!isValidParamsTypes(str)) {
      return false;
    }
    return reg.test(str);
  };

  /**
   * 布尔值判断
   * @param[str]: 布尔值
   * @param[extend]: 是否支持拓展
   * @param[trueBooleans]: 拓展布尔值
   * */
  var isBooleanTrue = function isBooleanTrue(str, extend) {
    var trueBooleans = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['yes', 'true', '1'];
    var type_str = _typeof(str);
    if (type_str === 'boolean') {
      return str;
    }
    if (!isValidParamsTypes(str)) {
      return false;
    }
    if (extend) {
      str = "".concat(str).toLowerCase();
      return trueBooleans.includes(str);
    }
  };

  /**
   * 子节长度判断
   *@param[str] any 字符串
   *@param[option] 参数 {min: number, max:number}
   * */

  function isByteLength(str, options) {
    if (typeof str !== "string") {
      return false;
    }
    str += '';
    var min;
    var max;
    if (_typeof(options) === 'object') {
      min = options.min || 0;
      max = options.max;
    } else {
      // backwards compatibility: isByteLength(str, min [, max])
      min = arguments[1];
      max = arguments[2];
    }
    var len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === 'undefined' || len <= max);
  }

  /**
   *
   * 手机格式校验
   * @param[str]: 手机号
   * */
  var isCellPhone = function isCellPhone(str) {
    try {
      var reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      return reg.test(str);
    } catch (err) {
      return false;
    }
  };

  /* eslint-disable max-len */
  var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;
  /* eslint-enable max-len */

  /**
   * 信用卡格式验证
   * @param[str] 校验字符串
   * */
  function isCreditCard(str) {
    if (typeof str !== "string") {
      return false;
    }
    str += str;
    var sanitized = str.replace(/[- ]+/g, '');
    if (!creditCard.test(sanitized)) {
      return false;
    }
    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble;
    for (var i = sanitized.length - 1; i >= 0; i--) {
      digit = sanitized.substring(i, i + 1);
      tmpNum = parseInt(digit, 10);
      if (shouldDouble) {
        tmpNum *= 2;
        if (tmpNum >= 10) {
          sum += tmpNum % 10 + 1;
        } else {
          sum += tmpNum;
        }
      } else {
        sum += tmpNum;
      }
      shouldDouble = !shouldDouble;
    }
    return !!(sum % 10 === 0 ? sanitized : false);
  }

  /**
   *
   * 邮箱格式正则校验
   * @param[str] 邮箱
   * */
  var isEmail = function isEmail(str) {
    if (typeof str !== "string") {
      return false;
    }
    // 用户名@主机名”
    var reg = /^(?!.*?[._-]{2})[a-z0-9][a-z0-9._-]{0,62}[a-z0-9]@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]{2,63}$/i;
    return reg.test(str);
  };

  /**
   * @names：判断数组是否为空数据
   * @params[data] Array
   * */
  var isEmptyArray = function isEmptyArray(data) {
    if (Array.isArray(data)) {
      return !data.length;
    }
    return true;
  };

  /**
   * 判断字符串是否为空值
   * @param[str] 需要判断的值
   * @param[ignoreSpace] boolean 是否忽略空格
   * */
  var isEmptyStr = function isEmptyStr(str, ignoreSpace) {
    if (!isValidParamsTypes(str)) {
      return false;
    }
    str = "".concat(str);
    if (!ignoreSpace) {
      str = filterStringSpace(str);
    }
    return !(str.length === 0);
  };

  /**
   * 以太坊地址校验
   * @param[str] 以太坊地址
   * */
  var isEthereumAddress = function isEthereumAddress(str) {
    var ethReg = /^(0x)[0-9a-f]{40}$/i;
    if (typeof str !== "string") {
      return false;
    }
    str += '';
    return ethReg.test(str);
  };

  /**
   * @names：文本是否存在
   * @params[str] string
   * @return string
   * */
  var isExistString = function isExistString(str) {
    if (typeof str === 'string') {
      return filterStringSpace(str);
    }
    return undefined;
  };

  /**
   *
   * 固定电话格式校验
   * @param[str]: 电话
   * eg: (0827-7977654) || (7977654)
   * */
  var isFixedPhone = function isFixedPhone(str) {
    var reg = /^(\d{3,4}-|\s)?\d{7,14}$/;
    return reg.test(str);
  };

  /**
   * 是否为整数判断
   * @param[str] 数值
   * @param[options] 参数
   *
   * */
  function isInt(str, options) {
    if (!isValidParamsTypes(str)) {
      return false;
    }
    var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
    var intLeadingZeroes = /^[-+]?[0-9]+$/;
    options = options || {};

    // Get the regex to use for testing, based on whether
    // leading zeroes are allowed or not.
    var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

    // Check min/max/lt/gt
    var minCheckPassed = !options.hasOwnProperty('min') || typeof options.min !== 'undefined' && str >= options.min;
    var maxCheckPassed = !options.hasOwnProperty('max') || typeof options.max !== 'undefined' && str <= options.max;
    var ltCheckPassed = !options.hasOwnProperty('lt') || typeof options.lt !== 'undefined' && str < options.lt;
    var gtCheckPassed = !options.hasOwnProperty('gt') || typeof options.gt !== 'undefined' && str > options.gt;
    return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
  }

  /**
   * 证件号码验证函数
   *
   * */

  var identityCardValidators = {
    PL: function PL(str) {
      var weightOfDigits = {
        1: 1,
        2: 3,
        3: 7,
        4: 9,
        5: 1,
        6: 3,
        7: 7,
        8: 9,
        9: 1,
        10: 3,
        11: 0
      };
      if (str != null && str.length === 11 && isInt(str, {
        allow_leading_zeroes: true
      })) {
        var digits = str.split('').slice(0, -1);
        var sum = digits.reduce(function (acc, digit, index) {
          return acc + Number(digit) * weightOfDigits[index + 1];
        }, 0);
        var modulo = sum % 10;
        var lastDigit = Number(str.charAt(str.length - 1));
        if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) {
          return true;
        }
      }
      return false;
    },
    ES: function ES(str) {
      var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
      var charsValue = {
        X: 0,
        Y: 1,
        Z: 2
      };
      var controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

      // sanitize user input
      var sanitized = str.trim().toUpperCase();

      // validate the data structure
      if (!DNI.test(sanitized)) {
        return false;
      }

      // validate the control digit
      var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function (char) {
        return charsValue[char];
      });

      // @ts-ignore
      return sanitized.endsWith(controlDigits[number % 23]);
    },
    FI: function FI(str) {
      // https://dvv.fi/en/personal-identity-code#:~:text=control%20character%20for%20a-,personal,-identity%20code%20calculated
      if (str.length !== 11) {
        return false;
      }
      if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) {
        return false;
      }
      var checkDigits = '0123456789ABCDEFHJKLMNPRSTUVWXY';
      var idAsNumber = parseInt(str.slice(0, 6), 10) * 1000 + parseInt(str.slice(7, 10), 10);
      var remainder = idAsNumber % 31;
      var checkDigit = checkDigits[remainder];
      return checkDigit === str.slice(10, 11);
    },
    IN: function IN(str) {
      var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/;

      // multiplication table
      var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];

      // permutation table
      var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];

      // sanitize user input
      var sanitized = str.trim();

      // validate the data structure
      if (!DNI.test(sanitized)) {
        return false;
      }
      var c = 0;
      var invertedArray = sanitized.replace(/\s/g, '').split('').map(Number).reverse();
      invertedArray.forEach(function (val, i) {
        c = d[c][p[i % 8][val]];
      });
      return c === 0;
    },
    IR: function IR(str) {
      if (!str.match(/^\d{10}$/)) return false;
      str = "0000".concat(str).substr(str.length - 6);
      if (parseInt(str.substr(3, 6), 10) === 0) return false;
      var lastNumber = parseInt(str.substr(9, 1), 10);
      var sum = 0;
      for (var i = 0; i < 9; i++) {
        sum += parseInt(str.substr(i, 1), 10) * (10 - i);
      }
      sum %= 11;
      return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
    },
    IT: function IT(str) {
      if (str.length !== 9) return false;
      if (str === 'CA00000AA') return false; // https://it.wikipedia.org/wiki/Carta_d%27identit%C3%A0_elettronica_italiana
      return str.search(/C[A-Z]\d{5}[A-Z]{2}/i) > -1;
    },
    NO: function NO(str) {
      var sanitized = str.trim();
      if (isNaN(Number(sanitized))) return false;
      if (sanitized.length !== 11) return false;
      if (sanitized === '00000000000') return false;

      // https://no.wikipedia.org/wiki/F%C3%B8dselsnummer
      var f = sanitized.split('').map(Number);
      var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
      var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
      if (k1 !== f[9] || k2 !== f[10]) return false;
      return true;
    },
    TH: function TH(str) {
      if (!str.match(/^[1-8]\d{12}$/)) return false;

      // validate check digit
      var sum = 0;
      for (var i = 0; i < 12; i++) {
        sum += parseInt(str[i], 10) * (13 - i);
      }
      return str[12] === ((11 - sum % 11) % 10).toString();
    },
    LK: function LK(str) {
      var old_nic = /^[1-9]\d{8}[vx]$/i;
      var new_nic = /^[1-9]\d{11}$/i;
      if (str.length === 10 && old_nic.test(str)) return true;else if (str.length === 12 && new_nic.test(str)) return true;
      return false;
    },
    'he-IL': function heIL(str) {
      var DNI = /^\d{9}$/;

      // sanitize user input
      var sanitized = str.trim();

      // validate the data structure
      if (!DNI.test(sanitized)) {
        return false;
      }
      var id = sanitized;
      var sum = 0,
        incNum;
      for (var i = 0; i < id.length; i++) {
        incNum = Number(id[i]) * (i % 2 + 1); // Multiply number by 1 or 2
        sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total
      }

      return sum % 10 === 0;
    },
    'ar-LY': function arLY(str) {
      // Libya National Identity Number NIN is 12 digits, the first digit is either 1 or 2
      var NIN = /^(1|2)\d{11}$/;

      // sanitize user input
      var sanitized = str.trim();

      // validate the data structure
      if (!NIN.test(sanitized)) {
        return false;
      }
      return true;
    },
    'ar-TN': function arTN(str) {
      var DNI = /^\d{8}$/;

      // sanitize user input
      var sanitized = str.trim();

      // validate the data structure
      if (!DNI.test(sanitized)) {
        return false;
      }
      return true;
    },
    'zh-CN': function zhCN(str) {
      var provincesAndCities = ['11',
      // 北京
      '12',
      // 天津
      '13',
      // 河北
      '14',
      // 山西
      '15',
      // 内蒙古
      '21',
      // 辽宁
      '22',
      // 吉林
      '23',
      // 黑龙江
      '31',
      // 上海
      '32',
      // 江苏
      '33',
      // 浙江
      '34',
      // 安徽
      '35',
      // 福建
      '36',
      // 江西
      '37',
      // 山东
      '41',
      // 河南
      '42',
      // 湖北
      '43',
      // 湖南
      '44',
      // 广东
      '45',
      // 广西
      '46',
      // 海南
      '50',
      // 重庆
      '51',
      // 四川
      '52',
      // 贵州
      '53',
      // 云南
      '54',
      // 西藏
      '61',
      // 陕西
      '62',
      // 甘肃
      '63',
      // 青海
      '64',
      // 宁夏
      '65',
      // 新疆
      '71',
      // 台湾
      '81',
      // 香港
      '82',
      // 澳门
      '91' // 国外
      ];

      var powers = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'];
      var parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

      // @ts-ignore
      var checkAddressCode = function checkAddressCode(addressCode) {
        return provincesAndCities.includes(addressCode);
      };
      var checkBirthDayCode = function checkBirthDayCode(birDayCode) {
        var yyyy = parseInt(birDayCode.substring(0, 4), 10);
        var mm = parseInt(birDayCode.substring(4, 6), 10);
        var dd = parseInt(birDayCode.substring(6), 10);
        var xdata = new Date(yyyy, mm - 1, dd);
        if (xdata > new Date()) {
          return false;
          // eslint-disable-next-line max-len
        } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
          return true;
        }
        return false;
      };
      var getParityBit = function getParityBit(idCardNo) {
        var id17 = idCardNo.substring(0, 17);
        var power = 0;
        for (var i = 0; i < 17; i++) {
          power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
        }
        var mod = power % 11;
        return parityBit[mod];
      };
      var checkParityBit = function checkParityBit(idCardNo) {
        return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
      };
      var check15IdCardNo = function check15IdCardNo(idCardNo) {
        var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
        if (!check) return false;
        var addressCode = idCardNo.substring(0, 2);
        check = checkAddressCode(addressCode);
        if (!check) return false;
        var birDayCode = "19".concat(idCardNo.substring(6, 12));
        check = checkBirthDayCode(birDayCode);
        if (!check) return false;
        return true;
      };
      var check18IdCardNo = function check18IdCardNo(idCardNo) {
        var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
        if (!check) return false;
        var addressCode = idCardNo.substring(0, 2);
        check = checkAddressCode(addressCode);
        if (!check) return false;
        var birDayCode = idCardNo.substring(6, 14);
        check = checkBirthDayCode(birDayCode);
        if (!check) return false;
        return checkParityBit(idCardNo);
      };
      var checkIdCardNo = function checkIdCardNo(idCardNo) {
        var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
        if (!check) return false;
        if (idCardNo.length === 15) {
          return check15IdCardNo(idCardNo);
        }
        return check18IdCardNo(idCardNo);
      };
      return checkIdCardNo(str);
    },
    'zh-TW': function zhTW(str) {
      var ALPHABET_CODES = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        G: 16,
        H: 17,
        I: 34,
        J: 18,
        K: 19,
        L: 20,
        M: 21,
        N: 22,
        O: 35,
        P: 23,
        Q: 24,
        R: 25,
        S: 26,
        T: 27,
        U: 28,
        V: 29,
        W: 32,
        X: 30,
        Y: 31,
        Z: 33
      };
      var sanitized = str.trim().toUpperCase();
      if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;

      // @ts-ignore
      return Array.from(sanitized).reduce(function (sum, number, index) {
        if (index === 0) {
          var code = ALPHABET_CODES[number];
          return code % 10 * 9 + Math.floor(code / 10);
        }
        if (index === 9) {
          return (10 - sum % 10 - Number(number)) % 10 === 0;
        }
        return sum + Number(number) * (9 - index);
      }, 0);
    }
  };

  /*
  // 身份证
  export function validateIDCard(str) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(str)
  }
  */

  /**
   * isIdentityCard
   * @param[str] any 证件号码
   * @param[locale] string 证件类型
   * */
  function isIdentityCard(str, locale) {
    if (!isValidParamsTypes(str)) {
      return false;
    }
    str = "".concat(str);
    if (locale in identityCardValidators) {
      return identityCardValidators[locale](str);
    } else if (locale === 'any') {
      for (var key in identityCardValidators) {
        // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        if (identityCardValidators.hasOwnProperty(key)) {
          var validator = identityCardValidators[key];
          if (validator(str)) {
            return true;
          }
        }
      }
      return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
  }

  /**
   * IMEI校验
   * @param[str] imei
   * @param[allow_hyphens] boolean 允许连字符
   * */
  function isIMEI(str) {
    var allow_hyphens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!isValidParamsTypes(str)) {
      return false;
    }
    str = "".concat(str);
    var imeiRegexWithoutHypens = /^[0-9]{15}$/;
    var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
    // default regex for checking imei is the one without hyphens

    var imeiRegex = imeiRegexWithoutHypens;
    if (allow_hyphens) {
      imeiRegex = imeiRegexWithHypens;
    }
    if (!imeiRegex.test(str)) {
      return false;
    }
    str = str.replace(/-/g, '');
    var sum = 0,
      mul = 2,
      l = 14;
    for (var i = 0; i < l; i++) {
      var digit = str.substring(l - i - 1, l - i);
      var tp = parseInt(digit, 10) * mul;
      if (tp >= 10) {
        sum += tp % 10 + 1;
      } else {
        sum += tp;
      }
      if (mul === 1) {
        mul += 1;
      } else {
        mul -= 1;
      }
    }
    var chk = (10 - sum % 10) % 10;
    return chk === parseInt(str.substring(14, 15), 10);
  }

  /**
   * 是否包含数据判断
   * @param[str] 要判断的数据
   * @param[options] 匹配的数据
   * */
  function isIn(str, options) {
    if (!isValidParamsTypes(str)) {
      return false;
    }
    var i;
    var options_type = utilTypeOf(options);
    if (options_type === 'array') {
      var array = [];
      for (i in options) {
        // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if ({}.hasOwnProperty.call(options, i)) {
          array[i] = utilToString(options[i]);
        }
      }
      return array.indexOf(str) >= 0;
    } else if (options_type === 'object') {
      return options.hasOwnProperty(str);
    } else if (options_type === 'function') {
      return options.indexOf(str) >= 0;
    }
    return false;
  }

  /**
   * 判断数据是否为 object
   * @param[data]
   * */
  var isObject = function isObject(data) {
    return Object.prototype.toString.call(data) === '[object Object]';
  };

  /**
   * 邮编格式验证
   * @param[str] 邮编
   * @param[locale] 邮编所属地
   * */
  function isPostalCode(str, locale) {
    if (!isValidParamsTypes(str)) {
      return false;
    }

    // common patterns
    var threeDigit = /^\d{3}$/;
    var fourDigit = /^\d{4}$/;
    var fiveDigit = /^\d{5}$/;
    var sixDigit = /^\d{6}$/;
    var patterns = {
      AD: /^AD\d{3}$/,
      AT: fourDigit,
      AU: fourDigit,
      AZ: /^AZ\d{4}$/,
      BE: fourDigit,
      BG: fourDigit,
      BR: /^\d{5}-\d{3}$/,
      BY: /2[1-4]{1}\d{4}$/,
      CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
      CH: fourDigit,
      CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
      CZ: /^\d{3}\s?\d{2}$/,
      DE: fiveDigit,
      DK: fourDigit,
      DO: fiveDigit,
      DZ: fiveDigit,
      EE: fiveDigit,
      ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
      FI: fiveDigit,
      FR: /^\d{2}\s?\d{3}$/,
      GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
      GR: /^\d{3}\s?\d{2}$/,
      HR: /^([1-5]\d{4}$)/,
      HT: /^HT\d{4}$/,
      HU: fourDigit,
      ID: fiveDigit,
      IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
      IL: /^(\d{5}|\d{7})$/,
      IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
      IR: /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
      IS: threeDigit,
      IT: fiveDigit,
      JP: /^\d{3}\-\d{4}$/,
      KE: fiveDigit,
      KR: /^(\d{5}|\d{6})$/,
      LI: /^(948[5-9]|949[0-7])$/,
      LT: /^LT\-\d{5}$/,
      LU: fourDigit,
      LV: /^LV\-\d{4}$/,
      LK: fiveDigit,
      MX: fiveDigit,
      MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
      MY: fiveDigit,
      NL: /^\d{4}\s?[a-z]{2}$/i,
      NO: fourDigit,
      NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
      NZ: fourDigit,
      PL: /^\d{2}\-\d{3}$/,
      PR: /^00[679]\d{2}([ -]\d{4})?$/,
      PT: /^\d{4}\-\d{3}?$/,
      RO: sixDigit,
      RU: sixDigit,
      SA: fiveDigit,
      SE: /^[1-9]\d{2}\s?\d{2}$/,
      SG: sixDigit,
      SI: fourDigit,
      SK: /^\d{3}\s?\d{2}$/,
      TH: fiveDigit,
      TN: fourDigit,
      TW: /^\d{3}(\d{2})?$/,
      UA: fiveDigit,
      US: /^\d{5}(-\d{4})?$/,
      ZA: fourDigit,
      ZM: fiveDigit
    };
    if (locale in patterns) {
      return patterns[locale].test(str);
    } else if (locale === 'any') {
      for (var key in patterns) {
        // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (patterns.hasOwnProperty(key)) {
          var pattern = patterns[key];
          if (pattern.test(str)) {
            return true;
          }
        }
      }
      return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
  }

  var upperCaseRegex = /^[A-Z]$/;
  var lowerCaseRegex = /^[a-z]$/;
  var numberRegex = /^[0-9]$/;
  var symbolRegex = /^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
  var defaultOptions = {
    // 最小长度
    minLength: 8,
    // 最少小写字母个数
    minLowercase: 1,
    // 最少大写字母个数
    minUppercase: 1,
    // 最少数字个数
    minNumbers: 1,
    // 最少特殊符号个数
    minSymbols: 1,
    // 返回密码强度评分
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10
  };

  /* Counts number of occurrences of each char in a string
   * could be moved to util/ ?
  */
  function countChars(str) {
    var result = {};
    Array.from(str).forEach(function (char) {
      var curVal = result[char];
      if (curVal) {
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    });
    return result;
  }

  /* Return information about a password */

  function analyzePassword(password) {
    var charMap = countChars(password);
    var analysis = {
      length: password.length,
      uniqueChars: Object.keys(charMap).length,
      uppercaseCount: 0,
      lowercaseCount: 0,
      numberCount: 0,
      symbolCount: 0
    };
    Object.keys(charMap).forEach(function (char) {
      /* istanbul ignore else */
      if (upperCaseRegex.test(char)) {
        analysis.uppercaseCount += charMap[char];
      } else if (lowerCaseRegex.test(char)) {
        analysis.lowercaseCount += charMap[char];
      } else if (numberRegex.test(char)) {
        analysis.numberCount += charMap[char];
      } else if (symbolRegex.test(char)) {
        analysis.symbolCount += charMap[char];
      }
    });
    return analysis;
  }
  function scorePassword(analysis, scoringOptions) {
    var points = 0;
    points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
    points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
    if (analysis.lowercaseCount > 0) {
      points += scoringOptions.pointsForContainingLower;
    }
    if (analysis.uppercaseCount > 0) {
      points += scoringOptions.pointsForContainingUpper;
    }
    if (analysis.numberCount > 0) {
      points += scoringOptions.pointsForContainingNumber;
    }
    if (analysis.symbolCount > 0) {
      points += scoringOptions.pointsForContainingSymbol;
    }
    return points;
  }

  /**
   * 密码强度验证
   *
   * @param[str]  密码
   * @param[options]  验证参数
   * */
  function isStrongPassword(str, options) {
    if (!isValidParamsTypes(str)) {
      return false;
    }
    var analysis = analyzePassword(str);
    var new_options = _objectSpread2(_objectSpread2({}, defaultOptions), options);
    if (new_options.returnScore) {
      return scorePassword(analysis, new_options);
    }
    return analysis.length >= new_options.minLength && analysis.lowercaseCount >= new_options.minLowercase && analysis.uppercaseCount >= new_options.minUppercase && analysis.numberCount >= new_options.minNumbers && analysis.symbolCount >= new_options.minSymbols;
  }

  /**
   * 纳税人识别码 合法性验证
   * @param[str] any 识别码
   * */
  var isTaxpayerNo = function isTaxpayerNo(str) {
    var reg = /^[0-9A-Z]{15,18}$/i;
    if (!isValidParamsTypes(str)) {
      return false;
    }
    return reg.test(str);
  };

  /*
  options for isURL method

  require_protocol - if set as true isURL will return false if protocol is not present in the URL
  require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
  protocols - valid protocols can be modified with this option
  require_host - if set as false isURL will not check if host is present in the URL
  require_port - if set as true isURL will check if port is present in the URL
  allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
  validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

  */

  /**
   * URL合法性校验
   * @param[url]  url
   * @param[options] 校验参数
   * */
  function isURL(url, options) {
    var default_url_options = {
      protocols: ['http', 'https', 'ftp'],
      require_tld: true,
      require_protocol: false,
      require_host: true,
      require_port: false,
      require_valid_protocol: true,
      allow_underscores: false,
      allow_trailing_dot: false,
      allow_protocol_relative_urls: false,
      allow_fragments: true,
      allow_query_components: true,
      validate_length: true
    };
    var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === '[object RegExp]';
    }
    function checkHost(host, matches) {
      for (var i = 0; i < matches.length; i++) {
        var match = matches[i];
        // @ts-ignore
        if (host === match || isRegExp(match) && match.test(host)) {
          return true;
        }
      }
      return false;
    }
    if (typeof url !== "string") {
      return false;
    }
    if (!url || /[\s<>]/.test(url)) {
      return false;
    }
    if (url.indexOf('mailto:') === 0) {
      return false;
    }
    var new_options = _objectSpread2(_objectSpread2({}, options), default_url_options);
    if (options.validate_length && url.length >= 2083) {
      return false;
    }
    if (!options.allow_fragments && url.includes('#')) {
      return false;
    }
    if (!options.allow_query_components && (url.includes('?') || url.includes('&'))) {
      return false;
    }
    var protocol, auth, host, hostname, port, port_str, split, ipv6;
    split = url.split('#');
    url = split.shift();
    split = url.split('?');
    url = split.shift();
    split = url.split('://');
    if (split.length > 1) {
      protocol = split.shift().toLowerCase();
      if (new_options.require_valid_protocol && new_options.protocols.indexOf(protocol) === -1) {
        return false;
      }
    } else if (new_options.require_protocol) {
      return false;
    } else if (url.substr(0, 2) === '//') {
      if (!new_options.allow_protocol_relative_urls) {
        return false;
      }
      split[0] = url.substr(2);
    }
    url = split.join('://');
    if (url === '') {
      return false;
    }
    split = url.split('/');
    url = split.shift();
    if (url === '' && !new_options.require_host) {
      return true;
    }
    split = url.split('@');
    if (split.length > 1) {
      if (new_options.disallow_auth) {
        return false;
      }
      if (split[0] === '') {
        return false;
      }
      auth = split.shift();
      if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
        return false;
      }
      var _auth$split = auth.split(':'),
        _auth$split2 = _slicedToArray(_auth$split, 2),
        user = _auth$split2[0],
        password = _auth$split2[1];
      if (user === '' && password === '') {
        return false;
      }
    }
    hostname = split.join('@');
    port_str = null;
    ipv6 = null;
    var ipv6_match = hostname.match(wrapped_ipv6);
    if (ipv6_match) {
      host = '';
      ipv6 = ipv6_match[1];
      port_str = ipv6_match[2] || null;
    } else {
      split = hostname.split(':');
      host = split.shift();
      if (split.length) {
        port_str = split.join(':');
      }
    }
    if (port_str !== null && port_str.length > 0) {
      port = parseInt(port_str, 10);
      if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
        return false;
      }
    } else if (new_options.require_port) {
      return false;
    }
    if (new_options.host_whitelist) {
      return checkHost(host, new_options.host_whitelist);
    }
    if (!isIP(host) && !isFQDN(host, new_options) && (!ipv6 || !isIPv6(ipv6))) {
      return false;
    }
    host = host || ipv6;
    return !(new_options.host_blacklist && checkHost(host, new_options.host_blacklist));
  }

  /**
   * uuid 合法性校验
   * @param[str]  url
   * @param[version] uuid版本
   * */
  function isUUID(str, version) {
    var uuid = {
      1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };
    if (!isValidParamsTypes(str)) {
      return false;
    }
    // @ts-ignore
    var pattern = uuid[![undefined, null].includes(version) ? version : 'all'];
    return !!pattern && pattern.test(str);
  }

  exports.IsBankCard = IsBankCard;
  exports.arrayDataGrouping = arrayDataGrouping;
  exports.dateFormatReg = dateFormatReg;
  exports.debounce = debounce;
  exports.deepClone = deepClone;
  exports.domainLabelValidator = domainLabelValidator;
  exports.escape = escape;
  exports.filterStringSpace = filterStringSpace;
  exports.formatDate = formatDate;
  exports.getCookieValue = getCookieValue;
  exports.getDomainPeriod = getDomainPeriod;
  exports.getDomainTld = getDomainTld;
  exports.getLocalStorage = getLocalStorage;
  exports.getSessionStorage = getSessionStorage;
  exports.getStrByteLength = getStrByteLength;
  exports.getUrlParam = getUrlParam;
  exports.inputTextareaFormat = inputTextareaFormat;
  exports.inputValueFormatBr = inputValueFormatBr;
  exports.isBooleanTrue = isBooleanTrue;
  exports.isByteLength = isByteLength;
  exports.isCellPhone = isCellPhone;
  exports.isCreditCard = isCreditCard;
  exports.isDomain = isDomain;
  exports.isEmail = isEmail;
  exports.isEmptyArray = isEmptyArray;
  exports.isEmptyStr = isEmptyStr;
  exports.isEthereumAddress = isEthereumAddress;
  exports.isExistString = isExistString;
  exports.isExistValue = isExistValue;
  exports.isFQDN = isFQDN;
  exports.isFixedPhone = isFixedPhone;
  exports.isHost = isHost;
  exports.isIMEI = isIMEI;
  exports.isIP = isIP;
  exports.isIPv4 = isIPv4;
  exports.isIPv6 = isIPv6;
  exports.isIdentityCard = isIdentityCard;
  exports.isIn = isIn;
  exports.isInRange = isInRange;
  exports.isInt = isInt;
  exports.isNS = isNS;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isPort = isPort;
  exports.isPostalCode = isPostalCode;
  exports.isRdata = isRdata;
  exports.isSameIPV4Segment = isSameIPV4Segment;
  exports.isStrongPassword = isStrongPassword;
  exports.isTTL = isTTL;
  exports.isTaxpayerNo = isTaxpayerNo;
  exports.isURL = isURL;
  exports.isUUID = isUUID;
  exports.isValidParamsTypes = isValidParamsTypes;
  exports.isZone = isZone;
  exports.numberAdd = numberAdd;
  exports.numberDivide = numberDivide;
  exports.numberMultiply = numberMultiply;
  exports.numberSimplifyCutting = numberSimplifyCutting;
  exports.numberSubtract = numberSubtract;
  exports.numberToDecimal2 = numberToDecimal2;
  exports.removeLocalStorage = removeLocalStorage;
  exports.removeSessionStorage = removeSessionStorage;
  exports.setCookie = setCookie;
  exports.setErrorCodeLang = setErrorCodeLang;
  exports.setHtmlTitle = setHtmlTitle;
  exports.setLocalStorage = setLocalStorage;
  exports.setSessionStorage = setSessionStorage;
  exports.setUrlParam = setUrlParam;
  exports.specialSymbolToComma = specialSymbolToComma;
  exports.stringToArray = stringToArray;
  exports.stringToLowerOrUpperCase = stringToLowerOrUpperCase;
  exports.throttle = throttle;
  exports.tldValidator = tldValidator;
  exports.unescape = unescape;
  exports.utilToString = utilToString;
  exports.utilTypeOf = utilTypeOf;
  exports.utilsSubmitForm = utilsSubmitForm;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=validator.js.map
