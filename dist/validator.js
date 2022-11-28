/**! 
 * varian-validator v0.0.18 
 * Lightweight JavaScript form validation. 
 * 
 * Copyright (c) 2022 ji sen  (https://github.com/ijisen) 
 * https://github.com/ijisen/varian-validator 
 * Licensed under the ISC license 
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Validator={})}(this,(function(t){"use strict";function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"==typeof t&&(t=t.replace(/\s+/g,"")),!isNaN(t)&&""!==t&&"object"!==n(t)&&"boolean"!=typeof t&&(!((t=parseFloat(t))<0)||e)};var l=function(t){try{return t.toString().split(".")[1].length}catch(t){return 0}};function f(t,e){var r=0;return r+=l(t),r+=l(e),Number(t.toString().replace(".",""))*Number(e.toString().replace(".",""))/Math.pow(10,r)}function d(t){return"string"==typeof t&&(t=t.replace(/-/g,"/")),t}var p=function(t,e){if("string"!=typeof t)return"";var r=/\\0|\\u0000|\s+/g;return null!=e&&e.filterAll?t.replace(r,""):t.replace(r," ")};var g,m=function(t){return"string"==typeof t?t.replace(/\r|\s|\n|，/g,","):""},h=function(t){var e=Object.prototype.toString.call(t).toLowerCase();return/\[object (.*)]/g.exec(e)[1]},A=function(t,e){return"array"!==h(e)&&(e=["string","number"]),e&&e.includes(h(t))},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"boolean",r="";return r=0===t||!1===t||t?t:"-","boolean"===e?"-"!==r:r};!function(t){t.en="en-US",t.zh="zh-CN"}(g||(g={}));var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.zh;return t===g.en?"en":"zh"};var y=function(t,e){return e=e||",","string"==typeof t?(e=e||",",(t=t.trim()).split(e||/\s+/)):Array.isArray(t)?t:"number"==typeof t||"boolean"==typeof t?[t]:[]},b=function(t){return"object"===n(t)&&null!==t?t="function"==typeof t.toString?t.toString():"[object Object]":(null==t||isNaN(t)&&!t.length)&&(t=""),String(t)},S="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",O="(".concat(S,"[.]){3}").concat(S),T=new RegExp("^".concat(O,"$")),E="(?:[0-9a-fA-F]{1,4})",w=new RegExp("^("+"(?:".concat(E,":){7}(?:").concat(E,"|:)|")+"(?:".concat(E,":){6}(?:").concat(O,"|:").concat(E,"|:)|")+"(?:".concat(E,":){5}(?::").concat(O,"|(:").concat(E,"){1,2}|:)|")+"(?:".concat(E,":){4}(?:(:").concat(E,"){0,1}:").concat(O,"|(:").concat(E,"){1,3}|:)|")+"(?:".concat(E,":){3}(?:(:").concat(E,"){0,2}:").concat(O,"|(:").concat(E,"){1,4}|:)|")+"(?:".concat(E,":){2}(?:(:").concat(E,"){0,3}:").concat(O,"|(:").concat(E,"){1,5}|:)|")+"(?:".concat(E,":){1}(?:(:").concat(E,"){0,4}:").concat(O,"|(:").concat(E,"){1,6}|:)|")+"(?::((?::".concat(E,"){0,5}:").concat(O,"|(?::").concat(E,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$"),I=function(t){return T.test(t)},L=function(t){return w.test(t)},N=function(t){return I(t)?4:L(t)?6:0},R={zh:{DOMAIN_IS_EMPTY:"校验内容为空",DOMAIN_FORMAT_ERROR:"域名格式错误",DOMAIN_TOO_SHORT:"域名长度不能小于 1 个字符.",DOMAIN_TOO_LONG:"域名长度不能超过 255 个字符.",LABEL_STARTS_WITH_DASH:"域名标签不能以 . 开头.",LABEL_ENDS_WITH_DASH:"域名标签不能以 . 结尾.",LABEL_WITH_HYPHEN:"域名标签不能以 - 开头或结尾.",LABEL_TOO_LONG:"域名标签的长度最多为 63 个字符.",LABEL_TOO_SHORT:"域名标签应至少为 1 个字符长.",LABEL_WITH_UNDERSCORES:"域名标签不能包含 _ ",LABEL_ENDS_WITH_UNDERSCORES:"域名标签不能以 _ 结尾.",LABEL_INVALID_CHARS:"域名标签只能包含a-z、A-Z、0-9、-、_、.、中文汉字.",TLD_WITH_NUMBER:"TLD不能包含数字.",TLD_INVALID_CHARS:"TLD格式错误."},en:{DOMAIN_IS_EMPTY:"Check content is empty",DOMAIN_FORMAT_ERROR:"Domain name format error",DOMAIN_TOO_SHORT:"Domain name too short.",DOMAIN_TOO_LONG:"Domain name too long. It should be no more than 255 chars.",LABEL_STARTS_WITH_DASH:"Domain name label can not start with a dash.",LABEL_ENDS_WITH_DASH:"Domain name label can not end with a dash.",LABEL_WITH_HYPHEN:"Domain labels cannot start or end with -.",LABEL_TOO_LONG:"Domain name label should be at most 63 chars long.",LABEL_TOO_SHORT:"Domain name label should be at least 1 character long.",LABEL_WITH_UNDERSCORES:"Domain labels cannot contain _",LABEL_ENDS_WITH_UNDERSCORES:"Domain labels can not end with _",LABEL_INVALID_CHARS:"Domain name label can only contain a-z、A-Z、0-9、-、_、.、中文汉字.",TLD_WITH_NUMBER:"TLD cannot contain numbers",TLD_INVALID_CHARS:"TLD format error"}},D={require_tld:!0,allow_underscores:!0,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1};function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=R[v(n)];if("string"!=typeof t)return{success:!1,message:o.DOMAIN_FORMAT_ERROR};if(t=p(t,{filterAll:!0}),e=r(r({},D),e),!t)return{success:!1,message:o.DOMAIN_IS_EMPTY};var i=t.length;if(i>255)return{success:!1,message:o.DOMAIN_TOO_LONG};e.allow_trailing_dot&&"."===t[i-1]&&(t=t.substring(0,i-1)),e.allow_wildcard&&0===t.indexOf("*.")&&(t=t.substring(2));var a=t.split("."),u=a.length,s=127;if(e.require_tld){if(u<2)return{success:!1,message:o.DOMAIN_FORMAT_ERROR};if(u>s)return{success:!1,message:o.DOMAIN_FORMAT_ERROR};var c=a[u-1];if(!e.allow_numeric_tld&&/^\d+$/.test(c))return{success:!1,message:o.TLD_WITH_NUMBER};if(!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(c))return{success:!1,message:o.TLD_INVALID_CHARS}}else if(u>s-1)return{success:!1,message:o.DOMAIN_FORMAT_ERROR};for(var l=0;l<u;l++){var f=a[l];if(f.length>63)return{success:!1,message:o.LABEL_TOO_LONG};if(!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(f))return{success:!1,message:o.LABEL_INVALID_CHARS};if(/[\uff01-\uff5e]/.test(f))return{success:!1,message:o.LABEL_INVALID_CHARS};if(/^-|-$/.test(f))return{success:!1,message:o.LABEL_WITH_HYPHEN};if(!e.allow_underscores&&/_/.test(f))return{success:!1,message:o.LABEL_WITH_UNDERSCORES};if(/_$/.test(f))return{success:!1,message:o.LABEL_ENDS_WITH_UNDERSCORES}}return{success:!0,message:""}}var $,F=function(t){return C(t,{require_tld:!0,allow_underscores:!0,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1})},M=function(t,e,r){if(!c(t))return!1;var n=Number(t);return n>=e&&n<=r},H=function(t){return M(t,1,65535)};t.EnumRecordType=void 0,($=t.EnumRecordType||(t.EnumRecordType={})).A="A",$.AAAA="AAAA",$.NS="NS",$.MX="MX",$.CNAME="CNAME",$.CAA="CAA",$.SRV="SRV",$.TXT="TXT";var P=/^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;function x(t,e){if(!A(t))return!1;var r=(e=e||{}).hasOwnProperty("allow_leading_zeroes")&&!e.allow_leading_zeroes?/^(?:[-+]?(?:0|[1-9][0-9]*))$/:/^[-+]?[0-9]+$/,n=!e.hasOwnProperty("min")||void 0!==e.min&&t>=e.min,o=!e.hasOwnProperty("max")||void 0!==e.max&&t<=e.max,i=!e.hasOwnProperty("lt")||void 0!==e.lt&&t<e.lt,a=!e.hasOwnProperty("gt")||void 0!==e.gt&&t>e.gt;return r.test(t)&&n&&o&&i&&a}var B={PL:function(t){var e={1:1,2:3,3:7,4:9,5:1,6:3,7:7,8:9,9:1,10:3,11:0};if(null!=t&&11===t.length&&x(t,{allow_leading_zeroes:!0})){var r=t.split("").slice(0,-1).reduce((function(t,r,n){return t+Number(r)*e[n+1]}),0)%10,n=Number(t.charAt(t.length-1));if(0===r&&0===n||n===10-r)return!0}return!1},ES:function(t){var e={X:0,Y:1,Z:2},r=t.trim().toUpperCase();if(!/^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(r))return!1;var n=r.slice(0,-1).replace(/[X,Y,Z]/g,(function(t){return e[t]}));return r.endsWith(["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"][n%23])},FI:function(t){if(11!==t.length)return!1;if(!t.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/))return!1;return"0123456789ABCDEFHJKLMNPRSTUVWXY"[(1e3*parseInt(t.slice(0,6),10)+parseInt(t.slice(7,10),10))%31]===t.slice(10,11)},IN:function(t){var e=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],r=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],n=t.trim();if(!/^[1-9]\d{3}\s?\d{4}\s?\d{4}$/.test(n))return!1;var o=0;return n.replace(/\s/g,"").split("").map(Number).reverse().forEach((function(t,n){o=e[o][r[n%8][t]]})),0===o},IR:function(t){if(!t.match(/^\d{10}$/))return!1;if(t="0000".concat(t).substr(t.length-6),0===parseInt(t.substr(3,6),10))return!1;for(var e=parseInt(t.substr(9,1),10),r=0,n=0;n<9;n++)r+=parseInt(t.substr(n,1),10)*(10-n);return(r%=11)<2&&e===r||r>=2&&e===11-r},IT:function(t){return 9===t.length&&("CA00000AA"!==t&&t.search(/C[A-Z]\d{5}[A-Z]{2}/i)>-1)},NO:function(t){var e=t.trim();if(isNaN(Number(e)))return!1;if(11!==e.length)return!1;if("00000000000"===e)return!1;var r=e.split("").map(Number),n=(11-(3*r[0]+7*r[1]+6*r[2]+1*r[3]+8*r[4]+9*r[5]+4*r[6]+5*r[7]+2*r[8])%11)%11,o=(11-(5*r[0]+4*r[1]+3*r[2]+2*r[3]+7*r[4]+6*r[5]+5*r[6]+4*r[7]+3*r[8]+2*n)%11)%11;return n===r[9]&&o===r[10]},TH:function(t){if(!t.match(/^[1-8]\d{12}$/))return!1;for(var e=0,r=0;r<12;r++)e+=parseInt(t[r],10)*(13-r);return t[12]===((11-e%11)%10).toString()},LK:function(t){return!(10!==t.length||!/^[1-9]\d{8}[vx]$/i.test(t))||!(12!==t.length||!/^[1-9]\d{11}$/i.test(t))},"he-IL":function(t){var e=t.trim();if(!/^\d{9}$/.test(e))return!1;for(var r,n=e,o=0,i=0;i<n.length;i++)o+=(r=Number(n[i])*(i%2+1))>9?r-9:r;return o%10==0},"ar-LY":function(t){var e=t.trim();return!!/^(1|2)\d{11}$/.test(e)},"ar-TN":function(t){var e=t.trim();return!!/^\d{8}$/.test(e)},"zh-CN":function(t){var e,r=["11","12","13","14","15","21","22","23","31","32","33","34","35","36","37","41","42","43","44","45","46","50","51","52","53","54","61","62","63","64","65","71","81","82","91"],n=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],o=["1","0","X","9","8","7","6","5","4","3","2"],i=function(t){return r.includes(t)},a=function(t){var e=parseInt(t.substring(0,4),10),r=parseInt(t.substring(4,6),10),n=parseInt(t.substring(6),10),o=new Date(e,r-1,n);return!(o>new Date)&&(o.getFullYear()===e&&o.getMonth()===r-1&&o.getDate()===n)},u=function(t){return function(t){for(var e=t.substring(0,17),r=0,i=0;i<17;i++)r+=parseInt(e.charAt(i),10)*parseInt(n[i],10);return o[r%11]}(t)===t.charAt(17).toUpperCase()};return!!/^\d{15}|(\d{17}(\d|x|X))$/.test(e=t)&&(15===e.length?function(t){var e=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(t);if(!e)return!1;var r=t.substring(0,2);if(!(e=i(r)))return!1;var n="19".concat(t.substring(6,12));return!!(e=a(n))}(e):function(t){var e=/^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(t);if(!e)return!1;var r=t.substring(0,2);if(!(e=i(r)))return!1;var n=t.substring(6,14);return!!(e=a(n))&&u(t)}(e))},"zh-TW":function(t){var e={A:10,B:11,C:12,D:13,E:14,F:15,G:16,H:17,I:34,J:18,K:19,L:20,M:21,N:22,O:35,P:23,Q:24,R:25,S:26,T:27,U:28,V:29,W:32,X:30,Y:31,Z:33},r=t.trim().toUpperCase();return!!/^[A-Z][0-9]{9}$/.test(r)&&Array.from(r).reduce((function(t,r,n){if(0===n){var o=e[r];return o%10*9+Math.floor(o/10)}return 9===n?(10-t%10-Number(r))%10==0:t+Number(r)*(9-n)}),0)}};var j=/^[A-Z]$/,U=/^[a-z]$/,z=/^[0-9]$/,Z=/^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/,V={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1,returnScore:!1,pointsPerUnique:1,pointsPerRepeat:.5,pointsForContainingLower:10,pointsForContainingUpper:10,pointsForContainingNumber:10,pointsForContainingSymbol:10};function W(t){var e,r,n=(e=t,r={},Array.from(e).forEach((function(t){r[t]?r[t]+=1:r[t]=1})),r),o={length:t.length,uniqueChars:Object.keys(n).length,uppercaseCount:0,lowercaseCount:0,numberCount:0,symbolCount:0};return Object.keys(n).forEach((function(t){j.test(t)?o.uppercaseCount+=n[t]:U.test(t)?o.lowercaseCount+=n[t]:z.test(t)?o.numberCount+=n[t]:Z.test(t)&&(o.symbolCount+=n[t])})),o}t.IsBankCard=function(t){return!!A(t)&&/^([1-9]{1})(\d{11}|\d{15}|\d{16}|\d{17}|\d{18})$/.test(t)},t.arrayDataGrouping=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if(Array.isArray(t)&&t.length){var r=t.length;if(r<=e)return[t];t=JSON.parse(JSON.stringify(t));for(var n=Math.ceil(r/e),o=[],i=1;i<n;i++)o.push(t.splice(0,e));return o.push(t),o}},t.dateFormatReg=d,t.debounce=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=null;return function(){clearTimeout(r),r=null,r=setTimeout(t,e)}},t.deepClone=function t(e){var r=Array.isArray(e)?[]:{};if(e&&"object"===n(e))for(var o in e)e.hasOwnProperty(o)&&(r[o]=e&&"object"===n(e[o])?t(e[o]):e[o]);return r},t.escape=function(t){return"string"==typeof t&&t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\\/g,"&#x5C;").replace(/`/g,"&#96;")},t.filterStringSpace=p,t.formatDate=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";if(!t)return"";var r=/cst/gi;"string"==typeof t&&r.test(t)&&(t=new Date(t)).setHours(t.getHours()-14),t=d(t);var n={"M+":(t=new Date(t)).getMonth()+1,"D+":t.getDate(),"d+":t.getDate(),"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var o in/(Y+)/i.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return e},t.getCookieValue=function(t){if(t){var e=t+"=",r=document.cookie.indexOf(e);if(-1===r)return null;var n=document.cookie.indexOf(";",r+e.length);-1===n&&(n=document.cookie.length);var o=document.cookie.substring(r+e.length,n);o=decodeURI(o);try{return JSON.parse(o)}catch(t){return o}}},t.getDomainPeriod=function(t){if("string"!=typeof t)return 10;var e=10;return["co"].indexOf(t)>-1&&(e=5),e},t.getDomainTld=function(t){if("string"!=typeof t)return"";var e=t.indexOf(".");return e>-1?t.slice(e+1):""},t.getLocalStorage=function(t){if(t){var e=window.localStorage.getItem(t);try{return JSON.parse(e)}catch(t){return e}}},t.getSessionStorage=function(t){if(!t)return!1;var e=window.sessionStorage.getItem(t);try{return JSON.parse(e)}catch(t){return e}},t.getStrByteLength=function(t){for(var e=0,r=0,n=t.length;r<n;r++){var o=t.charCodeAt(r);o<127?e+=1:128<=o&&o<=2047?e+=2:2048<=o&&o<=65535&&(e+=3)}return e},t.getUrlParam=function(t,e){var r=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=(e||window.location.search.substring(1)).match(r);return null!==n?decodeURIComponent(n[2]):null},t.inputTextareaFormat=function(t){return"string"!=typeof t?[]:(t=(t=(t=t.trim()).toLowerCase()).replace(/\s+|\n+/g," "),t=m(t),(t=a(new Set(t.split(",")))).filter((function(t){return""!==t})))},t.isBooleanTrue=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["yes","true","1"],o=n(t);return"boolean"===o?t:!!A(t)&&(e?(t="".concat(t).toLowerCase(),r.includes(t)):void 0)},t.isByteLength=function(t,e){if("string"!=typeof t)return!1;var r,o;t+="","object"===n(e)?(r=e.min||0,o=e.max):(r=arguments[1],o=arguments[2]);var i=encodeURI(t).split(/%..|./).length-1;return i>=r&&(void 0===o||i<=o)},t.isCellPhone=function(t){try{return/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(t)}catch(t){return!1}},t.isCreditCard=function(t){if("string"!=typeof t)return!1;var e=(t+=t).replace(/[- ]+/g,"");if(!P.test(e))return!1;for(var r,n,o,i=0,a=e.length-1;a>=0;a--)r=e.substring(a,a+1),n=parseInt(r,10),i+=o&&(n*=2)>=10?n%10+1:n,o=!o;return!(i%10!=0||!e)},t.isDomain=F,t.isEmail=function(t){if("string"!=typeof t)return!1;return/^(?!.*?[._-]{2})[a-z0-9][a-z0-9._-]{0,62}[a-z0-9]@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]{2,63}$/i.test(t)},t.isEmptyArray=function(t){return!Array.isArray(t)||!t.length},t.isEmptyStr=function(t,e){return!!A(t)&&(t="".concat(t),e||(t=p(t)),!(0===t.length))},t.isEthereumAddress=function(t){return"string"==typeof t&&/^(0x)[0-9a-f]{40}$/i.test(t+="")},t.isExistValue=_,t.isFQDN=C,t.isFixedPhone=function(t){return/^(\d{3,4}-|\s)?\d{7,14}$/.test(t)},t.isHost=function(t){return t.indexOf("@")>-1||C(t,{require_tld:!0,allow_underscores:!0,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1})},t.isIMEI=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!A(t))return!1;t="".concat(t);var r=/^[0-9]{15}$/,n=/^\d{2}-\d{6}-\d{6}-\d{1}$/,o=r;if(e&&(o=n),!o.test(t))return!1;t=t.replace(/-/g,"");for(var i=0,a=2,u=14,s=0;s<u;s++){var c=t.substring(u-s-1,u-s),l=parseInt(c,10)*a;i+=l>=10?l%10+1:l,1===a?a+=1:a-=1}var f=(10-i%10)%10;return f===parseInt(t.substring(14,15),10)},t.isIP=N,t.isIPv4=I,t.isIPv6=L,t.isIdentityCard=function(t,e){if(!A(t))return!1;if(t="".concat(t),e in B)return B[e](t);if("any"===e){for(var r in B){if(B.hasOwnProperty(r))if((0,B[r])(t))return!0}return!1}throw new Error("Invalid locale '".concat(e,"'"))},t.isIn=function(t,e){if(!A(t))return!1;var r,n=h(e);if("array"===n){var o=[];for(r in e)({}).hasOwnProperty.call(e,r)&&(o[r]=b(e[r]));return o.indexOf(t)>=0}return"object"===n?e.hasOwnProperty(t):"function"===n&&e.indexOf(t)>=0},t.isInRange=M,t.isInt=x,t.isNumber=c,t.isPort=H,t.isPostalCode=function(t,e){if(!A(t))return!1;var r=/^\d{4}$/,n=/^\d{5}$/,o=/^\d{6}$/,i={AD:/^AD\d{3}$/,AT:r,AU:r,AZ:/^AZ\d{4}$/,BE:r,BG:r,BR:/^\d{5}-\d{3}$/,BY:/2[1-4]{1}\d{4}$/,CA:/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,CH:r,CN:/^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,CZ:/^\d{3}\s?\d{2}$/,DE:n,DK:r,DO:n,DZ:n,EE:n,ES:/^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,FI:n,FR:/^\d{2}\s?\d{3}$/,GB:/^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,GR:/^\d{3}\s?\d{2}$/,HR:/^([1-5]\d{4}$)/,HT:/^HT\d{4}$/,HU:r,ID:n,IE:/^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,IL:/^(\d{5}|\d{7})$/,IN:/^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,IR:/\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,IS:/^\d{3}$/,IT:n,JP:/^\d{3}\-\d{4}$/,KE:n,KR:/^(\d{5}|\d{6})$/,LI:/^(948[5-9]|949[0-7])$/,LT:/^LT\-\d{5}$/,LU:r,LV:/^LV\-\d{4}$/,LK:n,MX:n,MT:/^[A-Za-z]{3}\s{0,1}\d{4}$/,MY:n,NL:/^\d{4}\s?[a-z]{2}$/i,NO:r,NP:/^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,NZ:r,PL:/^\d{2}\-\d{3}$/,PR:/^00[679]\d{2}([ -]\d{4})?$/,PT:/^\d{4}\-\d{3}?$/,RO:o,RU:o,SA:n,SE:/^[1-9]\d{2}\s?\d{2}$/,SG:o,SI:r,SK:/^\d{3}\s?\d{2}$/,TH:n,TN:r,TW:/^\d{3}(\d{2})?$/,UA:n,US:/^\d{5}(-\d{4})?$/,ZA:r,ZM:n};if(e in i)return i[e].test(t);if("any"===e){for(var a in i){if(i.hasOwnProperty(a))if(i[a].test(t))return!0}return!1}throw new Error("Invalid locale '".concat(e,"'"))},t.isRdata=function(e,r){if("string"!=typeof e)return!1;switch(r.toUpperCase()){case t.EnumRecordType.A:return function(t){return I(t)}(e);case t.EnumRecordType.AAAA:return function(t){return L(t)}(e);case t.EnumRecordType.CAA:return function(t){var e=y(t);return 3===e.length&&M(e[0],0,255)&&-1!==["issue","issuewild","iodef"].indexOf(e[1])&&/^"[\w-:./@]{1,255}"$/.test(e[2])}(e);case t.EnumRecordType.CNAME:return function(t){return F(t)}(e);case t.EnumRecordType.MX:return function(t){return!!t&&F(t)}(e);case t.EnumRecordType.NS:return function(t){return F(t)}(e);case t.EnumRecordType.SRV:return function(t){var e=y(t);return 4===e.length&&M(e[0],0,65535)&&M(e[1],0,65535)&&H(e[2])&&F(e[3])}(e);case t.EnumRecordType.TXT:return function(t){return t.length>255}(e);default:return!1}},t.isStrongPassword=function(t,e){if(!A(t))return!1;var n=W(t),o=r(r({},V),e);return o.returnScore?function(t,e){var r=0;return r+=t.uniqueChars*e.pointsPerUnique,r+=(t.length-t.uniqueChars)*e.pointsPerRepeat,t.lowercaseCount>0&&(r+=e.pointsForContainingLower),t.uppercaseCount>0&&(r+=e.pointsForContainingUpper),t.numberCount>0&&(r+=e.pointsForContainingNumber),t.symbolCount>0&&(r+=e.pointsForContainingSymbol),r}(n,o):n.length>=o.minLength&&n.lowercaseCount>=o.minLowercase&&n.uppercaseCount>=o.minUppercase&&n.numberCount>=o.minNumbers&&n.symbolCount>=o.minSymbols},t.isTTL=function(t,e){if(!c(t))return!1;if(c(t)){var r=Number(t);return r>0&&r<=e}return!1},t.isTaxpayerNo=function(t){return!!A(t)&&/^[0-9A-Z]{15,18}$/i.test(t)},t.isURL=function(t,e){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];if(t===n||(o=n,"[object RegExp]"===Object.prototype.toString.call(o)&&n.test(t)))return!0}var o;return!1}if("string"!=typeof t)return!1;if(!t||/[\s<>]/.test(t))return!1;if(0===t.indexOf("mailto:"))return!1;var o,a,u,s,c,l,f,d,p=r(r({},e),{protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,allow_fragments:!0,allow_query_components:!0,validate_length:!0});if(e.validate_length&&t.length>=2083)return!1;if(!e.allow_fragments&&t.includes("#"))return!1;if(!e.allow_query_components&&(t.includes("?")||t.includes("&")))return!1;if(f=t.split("#"),t=f.shift(),f=t.split("?"),t=f.shift(),(f=t.split("://")).length>1){if(o=f.shift().toLowerCase(),p.require_valid_protocol&&-1===p.protocols.indexOf(o))return!1}else{if(p.require_protocol)return!1;if("//"===t.substr(0,2)){if(!p.allow_protocol_relative_urls)return!1;f[0]=t.substr(2)}}if(""===(t=f.join("://")))return!1;if(f=t.split("/"),""===(t=f.shift())&&!p.require_host)return!0;if((f=t.split("@")).length>1){if(p.disallow_auth)return!1;if(""===f[0])return!1;if((a=f.shift()).indexOf(":")>=0&&a.split(":").length>2)return!1;var g=i(a.split(":"),2),m=g[0],h=g[1];if(""===m&&""===h)return!1}l=null,d=null;var A=(s=f.join("@")).match(/^\[([^\]]+)\](?::([0-9]+))?$/);if(A?(u="",d=A[1],l=A[2]||null):(u=(f=s.split(":")).shift(),f.length&&(l=f.join(":"))),null!==l&&l.length>0){if(c=parseInt(l,10),!/^[0-9]+$/.test(l)||c<=0||c>65535)return!1}else if(p.require_port)return!1;return p.host_whitelist?n(u,p.host_whitelist):!!(N(u)||C(u,p)||d&&L(d))&&(u=u||d,!(p.host_blacklist&&n(u,p.host_blacklist)))},t.isUUID=function(t,e){if(!A(t))return!1;var r={1:/^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,2:/^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i}[[void 0,null].includes(e)?"all":e];return!!r&&r.test(t)},t.isValidParamsTypes=A,t.isZone=function(t){return"."===t||F(t)},t.numberAdd=function(t,e){var r=l(t),n=l(e),o=Math.pow(10,Math.max(r,n));return(f(t,o)+f(e,o))/o},t.numberDivide=function(t,e){var r=l(t),n=l(e);return Number(t.toString().replace(".",""))/Number(e.toString().replace(".",""))*Math.pow(10,n-r)},t.numberMultiply=f,t.numberSubtract=function(t,e){var r=l(t),n=l(e),o=Math.pow(10,Math.max(r,n));return((t*o-e*o)/o).toFixed(r>=n?r:n)},t.numberToDecimal2=function(t,e){if(!c(t))return t;var r=parseFloat(t);r=f(r,100);var n=(r=e?Math.ceil(r)/100:Math.round(r)/100).toString(),o=n.indexOf(".");for(o<0&&(o=n.length,n+=".");n.length<=o+2;)n+="0";return n},t.removeLocalStorage=function(t){return!!t&&(window.localStorage.removeItem(t),!0)},t.removeSessionStorage=function(t){return!!t&&(window.sessionStorage.removeItem(t),!0)},t.setCookie=function(t,e,r){if(!t||!e)return!1;"object"===n(e)&&(e=JSON.stringify(e));var o=t+"="+encodeURI(e);if(r>0){var i=new Date,a=3600*r*1e3;i.setTime(i.getTime()+a),o+="; expires="+i.toUTCString()}return document.cookie=o,!0},t.setErrorCodeLang=v,t.setHtmlTitle=function(t){document.title=t},t.setLocalStorage=function(t,e){return!!t&&("string"!=typeof e&&(e=JSON.stringify(e)),window.localStorage.setItem(t,e),!0)},t.setSessionStorage=function(t,e){if(t)return"string"!=typeof e&&(e=JSON.stringify(e)),window.sessionStorage.setItem(t,e),!0},t.setUrlParam=function(t){if("[object Object]"===Object.prototype.toString.call(t)){var e=Object.keys(t),r="";return e.forEach((function(e){var n=t[e];_(n)&&(r&&(r+="&"),r+="".concat(e,"=").concat(n))})),encodeURI(r)}},t.specialSymbolToComma=m,t.throttle=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=null;return function(){r||(clearTimeout(r),r=setTimeout((function(){t&&t(),r=null}),e))}},t.unescape=function(t){return"string"==typeof t&&t.replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#x5C;/g,"\\").replace(/&#96;/g,"`").replace(/&amp;/g,"&")},t.utilStringToArray=y,t.utilToString=b,t.utilTypeOf=h,t.utilsSubmitForm=function(t){var e=(t=t||{}).url,r=t.method||"POST",n=t.params||{},o=document.createElement("form");o.style.display="none",o.method=r,o.action=e;for(var a=0,u=Object.entries(n);a<u.length;a++){var s=i(u[a],2),c=s[0],l=s[1],f=document.createElement("input");f.type="hidden",f.name=c,f.value=l,o.appendChild(f)}document.body.appendChild(o),o.submit(),document.body.removeChild(o)},t.version="0.0.18",Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=validator.js.map
