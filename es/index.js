/**! 
 * varian-validator v0.0.21 
 * Lightweight JavaScript form validation. 
 * 
 * Copyright (c) 2023 ji sen  (https://github.com/ijisen) 
 * https://github.com/ijisen/varian-validator 
 * Licensed under the ISC license 
 */
var e="0.0.21";function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"==typeof e&&(e=e.replace(/\s+/g,"")),!isNaN(e)&&""!==e&&"object"!==n(e)&&"boolean"!=typeof e&&(!((e=parseFloat(e))<0)||t)};function l(e,t){if(!c(e))return e;var r=parseFloat(e);r=p(r,100);var n=(r=t?Math.ceil(r)/100:Math.round(r)/100).toString(),o=n.indexOf(".");for(o<0&&(o=n.length,n+=".");n.length<=o+2;)n+="0";return n}var f=function(e){try{return e.toString().split(".")[1].length}catch(e){return 0}};function g(e,t){var r=f(e),n=f(t),o=Math.pow(10,Math.max(r,n));return(p(e,o)+p(t,o))/o}function d(e,t){var r=f(e),n=f(t),o=Math.pow(10,Math.max(r,n));return((e*o-t*o)/o).toFixed(r>=n?r:n)}function p(e,t){var r=0;return r+=f(e),r+=f(t),Number(e.toString().replace(".",""))*Number(t.toString().replace(".",""))/Math.pow(10,r)}function m(e,t){var r=f(e),n=f(t);return Number(e.toString().replace(".",""))/Number(t.toString().replace(".",""))*Math.pow(10,n-r)}var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if(Array.isArray(e)&&e.length){var r=e.length;if(r<=t)return[e];e=JSON.parse(JSON.stringify(e));for(var n=Math.ceil(r/t),o=[],a=1;a<n;a++)o.push(e.splice(0,t));return o.push(e),o}},h=function(e,t,r){if(!e||!t)return!1;"object"===n(t)&&(t=JSON.stringify(t));var o=e+"="+encodeURI(t);if(r>0){var a=new Date,i=3600*r*1e3;a.setTime(a.getTime()+i),o+="; expires="+a.toUTCString()}return document.cookie=o,!0},_=function(e){if(e){var t=e+"=",r=document.cookie.indexOf(t);if(-1===r)return null;var n=document.cookie.indexOf(";",r+t.length);-1===n&&(n=document.cookie.length);var o=document.cookie.substring(r+t.length,n);o=decodeURI(o);try{return JSON.parse(o)}catch(e){return o}}};function v(e){return"string"==typeof e&&(e=e.replace(/-/g,"/")),e}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";if(!e)return"";var r=/cst/gi;"string"==typeof e&&r.test(e)&&(e=new Date(e)).setHours(e.getHours()-14),e=v(e);var n={"M+":(e=new Date(e)).getMonth()+1,"D+":e.getDate(),"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var o in/(Y+)/i.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t}var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=null;return function(){clearTimeout(r),r=null,r=setTimeout(e,t)}};function b(e){var t=Array.isArray(e)?[]:{};if(e&&"object"===n(e))for(var r in e)e.hasOwnProperty(r)&&(t[r]=e&&"object"===n(e[r])?b(e[r]):e[r]);return t}function y(e){if("string"!=typeof e)return"";var t=e.indexOf(".");return t>-1?e.slice(t+1):""}function T(e){if("string"!=typeof e)return 10;var t=10;return["co"].indexOf(e)>-1&&(t=5),t}var S=function(e){return"string"==typeof e&&e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\\/g,"&#x5C;").replace(/`/g,"&#96;")},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("string"!=typeof e)return"";e=e.trim();var r=/\\0|\\u0000|\s+/g;return t?e.replace(r,""):e.replace(r," ")};function w(e){for(var t=0,r=0,n=e.length;r<n;r++){var o=e.charCodeAt(r);o<127?t+=1:128<=o&&o<=2047?t+=2:2048<=o&&o<=65535&&(t+=3)}return t}function N(e,t){var r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=(t||window.location.search.substring(1)).match(r);return null!==n?decodeURIComponent(n[2]):null}var I,L=function(e){return"string"==typeof e?e.replace(/\r|\s|\n|，/g,","):""},F=function(e){return"string"!=typeof e?[]:(e=(e=(e=e.trim()).toLowerCase()).replace(/\s+|\n+/g," "),e=L(e),(e=i(new Set(e.split(",")))).filter((function(e){return""!==e})))},$=function(e){var t=Object.prototype.toString.call(e).toLowerCase();return/\[object (.*)]/g.exec(t)[1]},D=function(e,t){return"array"!==$(t)&&(t=["string","number"]),t&&t.includes($(e))},M=function(e,t){return!!D(e)&&(e="".concat(e),t||(e=E(e)),!(0===e.length))},C=function(e){return!Array.isArray(e)||!e.length},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"boolean",r="";return r=0===e||!1===e||e?e:"-","boolean"===t?"-"!==r:r},x=function(e,t){return!!e&&("string"!=typeof t&&(t=JSON.stringify(t)),window.localStorage.setItem(e,t),!0)},P=function(e){if(e){var t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}},B=function(e){return!!e&&(window.localStorage.removeItem(e),!0)},j=function(e,t){if(e)return"string"!=typeof t&&(t=JSON.stringify(t)),window.sessionStorage.setItem(e,t),!0},z=function(e){if(!e)return!1;var t=window.sessionStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}},U=function(e){return!!e&&(window.sessionStorage.removeItem(e),!0)};!function(e){e.en="en-US",e.zh="zh-CN"}(I||(I={}));var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I.zh;return e===I.en?"en":"zh"};function W(e){document.title=e}function Z(e){if("[object Object]"===Object.prototype.toString.call(e)){var t=Object.keys(e),r="";return t.forEach((function(t){var n=e[t];H(n)&&(r&&(r+="&"),r+="".concat(t,"=").concat(n))})),encodeURI(r)}}var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=null;return function(){r||(clearTimeout(r),r=setTimeout((function(){e&&e(),r=null}),t))}};function q(e){return"string"==typeof e&&e.replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#x5C;/g,"\\").replace(/&#96;/g,"`").replace(/&amp;/g,"&")}var X=function(e){var t=(e=e||{}).url,r=e.method||"POST",n=e.params||{},o=document.createElement("form");o.style.display="none",o.method=r,o.action=t;for(var i=0,u=Object.entries(n);i<u.length;i++){var s=a(u[i],2),c=s[0],l=s[1],f=document.createElement("input");f.type="hidden",f.name=c,f.value=l,o.appendChild(f)}document.body.appendChild(o),o.submit(),document.body.removeChild(o)},G=function(e,t){return t=t||",","string"==typeof e?(t=t||",",(e=e.trim()).split(t||/\s+/)):Array.isArray(e)?e:"number"==typeof e||"boolean"==typeof e?[e]:[]},J=function(e){return"object"===n(e)&&null!==e?e="function"==typeof e.toString?e.toString():"[object Object]":(null==e||isNaN(e)&&!e.length)&&(e=""),String(e)},k="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",K="(".concat(k,"[.]){3}").concat(k),Q=new RegExp("^".concat(K,"$")),ee="(?:[0-9a-fA-F]{1,4})",te=new RegExp("^("+"(?:".concat(ee,":){7}(?:").concat(ee,"|:)|")+"(?:".concat(ee,":){6}(?:").concat(K,"|:").concat(ee,"|:)|")+"(?:".concat(ee,":){5}(?::").concat(K,"|(:").concat(ee,"){1,2}|:)|")+"(?:".concat(ee,":){4}(?:(:").concat(ee,"){0,1}:").concat(K,"|(:").concat(ee,"){1,3}|:)|")+"(?:".concat(ee,":){3}(?:(:").concat(ee,"){0,2}:").concat(K,"|(:").concat(ee,"){1,4}|:)|")+"(?:".concat(ee,":){2}(?:(:").concat(ee,"){0,3}:").concat(K,"|(:").concat(ee,"){1,5}|:)|")+"(?:".concat(ee,":){1}(?:(:").concat(ee,"){0,4}:").concat(K,"|(:").concat(ee,"){1,6}|:)|")+"(?::((?::".concat(ee,"){0,5}:").concat(K,"|(?::").concat(ee,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$"),re=function(e){return Q.test(e)},ne=function(e){return te.test(e)},oe=function(e){return re(e)?4:ne(e)?6:0},ae={zh:{DOMAIN_IS_EMPTY:"校验内容为空",DOMAIN_FORMAT_ERROR:"域名格式错误",DOMAIN_TOO_SHORT:"域名长度不能小于 1 个字符.",DOMAIN_TOO_LONG:"域名长度不能超过 255 个字符.",LABEL_STARTS_WITH_DASH:"域名标签不能以 . 开头.",LABEL_ENDS_WITH_DASH:"域名标签不能以 . 结尾.",LABEL_WITH_HYPHEN:"域名标签不能以 - 开头或结尾.",LABEL_TOO_LONG:"域名标签的长度最多为 63 个字符.",LABEL_TOO_SHORT:"域名标签应至少为 1 个字符长.",LABEL_WITH_UNDERSCORES:"域名标签不能包含 _ ",LABEL_ENDS_WITH_UNDERSCORES:"域名标签不能以 _ 结尾.",LABEL_INVALID_CHARS:"域名标签只能包含a-z、A-Z、0-9、-、_、.、中文汉字.",TLD_WITH_NUMBER:"TLD不能包含数字.",TLD_INVALID_CHARS:"TLD格式错误."},en:{DOMAIN_IS_EMPTY:"Check content is empty",DOMAIN_FORMAT_ERROR:"Domain name format error",DOMAIN_TOO_SHORT:"Domain name too short.",DOMAIN_TOO_LONG:"Domain name too long. It should be no more than 255 chars.",LABEL_STARTS_WITH_DASH:"Domain name label can not start with a dash.",LABEL_ENDS_WITH_DASH:"Domain name label can not end with a dash.",LABEL_WITH_HYPHEN:"Domain labels cannot start or end with -.",LABEL_TOO_LONG:"Domain name label should be at most 63 chars long.",LABEL_TOO_SHORT:"Domain name label should be at least 1 character long.",LABEL_WITH_UNDERSCORES:"Domain labels cannot contain _",LABEL_ENDS_WITH_UNDERSCORES:"Domain labels can not end with _",LABEL_INVALID_CHARS:"Domain name label can only contain a-z、A-Z、0-9、-、_、.、中文汉字.",TLD_WITH_NUMBER:"TLD cannot contain numbers",TLD_INVALID_CHARS:"TLD format error"}},ie={require_tld:!0,allow_underscores:!0,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1};function ue(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=ae[V(n)];if("string"!=typeof e)return{success:!1,message:o.DOMAIN_FORMAT_ERROR};if(e=E(e,!0),t=r(r({},ie),t),!e)return{success:!1,message:o.DOMAIN_IS_EMPTY};var a=e.length;if(a>255)return{success:!1,message:o.DOMAIN_TOO_LONG};t.allow_trailing_dot&&"."===e[a-1]&&(e=e.substring(0,a-1)),t.allow_wildcard&&0===e.indexOf("*.")&&(e=e.substring(2));var i=e.split("."),u=i.length,s=127;if(t.require_tld){if(u<2)return{success:!1,message:o.DOMAIN_FORMAT_ERROR};if(u>s)return{success:!1,message:o.DOMAIN_FORMAT_ERROR};var c=i[u-1];if(!t.allow_numeric_tld&&/^\d+$/.test(c))return{success:!1,message:o.TLD_WITH_NUMBER};if(!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(c))return{success:!1,message:o.TLD_INVALID_CHARS}}else if(u>s-1)return{success:!1,message:o.DOMAIN_FORMAT_ERROR};for(var l=0;l<u;l++){var f=i[l];if(f.length>63)return{success:!1,message:o.LABEL_TOO_LONG};if(!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(f))return{success:!1,message:o.LABEL_INVALID_CHARS};if(/[\uff01-\uff5e]/.test(f))return{success:!1,message:o.LABEL_INVALID_CHARS};if(/^-|-$/.test(f))return{success:!1,message:o.LABEL_WITH_HYPHEN};if(!t.allow_underscores&&/_/.test(f))return{success:!1,message:o.LABEL_WITH_UNDERSCORES};if(/_$/.test(f))return{success:!1,message:o.LABEL_ENDS_WITH_UNDERSCORES}}return{success:!0,message:""}}var se,ce=function(e,t){return ue(e,{require_tld:!0,allow_underscores:!0,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1},t)},le=function(e,t,r){if(!c(e))return!1;var n=Number(e);return n>=t&&n<=r},fe=function(e){return le(e,1,65535)},ge={zh:{FORMAT_ERROR:"MX记录的记录值为域名形式（如: abc.example.com）"},en:{FORMAT_ERROR:"The MX record value is in the domain name format (eg: abc.example.com)."}},de={zh:{TOO_LONG:"TXT记录值长度限制 255 个字符."},en:{TOO_LONG:"The TXT record value must be 1 to 255 characters in length."}},pe={zh:{FORMAT_ERROR:"NS记录的记录值为域名形式（如: ns1.example.com）"},en:{FORMAT_ERROR:"The NS record value is in the domain name format (eg: ns1.example.com)."}},me={zh:{FORMAT_ERROR:'CAA记录的记录值为字符串形式, 如：0 issue "ca.example.com"'},en:{FORMAT_ERROR:'Specify your CAA Record value as a string, (eg: 0 issue "ca.example.com" ).'}},Ae={zh:{FORMAT_ERROR:"SRV记录格式为： 优先级 权重 端口 目标地址 ，每项中间需以空格分隔。例如 “0 5 5060 sipserver.example.com”。"},en:{FORMAT_ERROR:"The format of an SRV record is: [Priority] [Weight] [Port number] [Target address]. Separate the priority, weight, port number, and target address with spaces. Example: 0 5 5060 sipserver.example.com"}},he={zh:{FORMAT_ERROR:"A记录的记录值为IPv4形式（如: 10.10.10.10）"},en:{FORMAT_ERROR:"The A record value is in the IPv4 format (eg: 10.10.10.10)."}},_e={zh:{FORMAT_ERROR:"AAAA记录的记录值为IPv6形式（如: ff03:0:0:0:0:0:0:c1）"},en:{FORMAT_ERROR:"The AAAA record value is in the IPv6 format (eg: ff03:0:0:0:0:0:0:c1)."}},ve={zh:{FORMAT_ERROR:"CNAME记录的记录值为域名形式（如: abc.example.com）"},en:{FORMAT_ERROR:"The Canonical Name value is in the domain name format (eg: abc.example.com)."}};!function(e){e.A="A",e.AAAA="AAAA",e.NS="NS",e.MX="MX",e.CNAME="CNAME",e.CAA="CAA",e.SRV="SRV",e.TXT="TXT"}(se||(se={}));var Oe=function(e,t,r){switch(t.toUpperCase()){case se.A:return function(e,t){var r=E(e),n=he[V(t)],o=!!r&&re(r);return{success:o,message:o?"":n.FORMAT_ERROR,regValue:r}}(e,r);case se.AAAA:return function(e,t){var r=E(e),n=_e[V(t)],o=!!r&&ne(r);return{success:o,message:o?"":n.FORMAT_ERROR,regValue:r}}(e,r);case se.CAA:return function(e,t){var r=E(e,!0),n=G(r),o=3===n.length&&le(n[0],0,128)&&-1!==["issue","issuewild","iodef"].indexOf(n[1])&&/^"[\w-:./@]{1,255}"$/.test(n[2]),a=me[V(t)];return{success:o,message:o?"":a.FORMAT_ERROR,regValue:r}}(e,r);case se.CNAME:return function(e,t){var r=E(e,!0),n=ce(r,t).success,o=ve[V(t)];return{success:n,message:n?"":o.FORMAT_ERROR,regValue:r}}(e,r);case se.MX:return function(e,t){var r=E(e,!0),n=ge[V(t)],o=ce(r,t).success;return{success:o,message:o?"":n.FORMAT_ERROR,regValue:r}}(e,r);case se.NS:return function(e,t){var r=E(e,!0),n=pe[V(t)],o=ce(r,t).success;return{success:o,message:o?"":n.FORMAT_ERROR,regValue:r}}(e,r);case se.SRV:return function(e,t){var r=E(e),n=G(r),o=Ae[V(t)];if(4===n.length){var a=n[0],i=n[1],u=n[2],s=n[3],c=ce(s,t).success,l=le(a,0,65535)&&le(i,0,65535)&&fe(u)&&c;return{success:l,message:l?"":o.FORMAT_ERROR,regValue:r}}return{success:!1,message:o.FORMAT_ERROR,regValue:r}}(e,r);case se.TXT:return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.min||1,n=t.min||255,o=de[V(t.lang)],a=!(e.length>n||e.length<r);return{success:a,message:a?"":o.TOO_LONG,regValue:e}}(e,{lang:r});default:return{success:!1,message:"未知记录类型！",regValue:e}}},Re=function(e){return e.indexOf("@")>-1||ue(e,{require_tld:!0,allow_underscores:!0,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1}).success},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:65535;if(!c(e))return!1;var n=Number(e),o=0,a=65535;return!(n<o||n>a)&&(n>=t&&n<=r)},ye=function(e,t){return"."===e||ce(e,t).success},Te=function(e){return!!D(e)&&/^([1-9]{1})(\d{11}|\d{15}|\d{16}|\d{17}|\d{18})$/.test(e)},Se=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["yes","true","1"],o=n(e);return"boolean"===o?e:!!D(e)&&(t?(e="".concat(e).toLowerCase(),r.includes(e)):void 0)};function Ee(e,t){if("string"!=typeof e)return!1;var r,o;e+="","object"===n(t)?(r=t.min||0,o=t.max):(r=arguments[1],o=arguments[2]);var a=encodeURI(e).split(/%..|./).length-1;return a>=r&&(void 0===o||a<=o)}var we=function(e){try{return/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(e)}catch(e){return!1}},Ne=/^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;function Ie(e){if("string"!=typeof e)return!1;var t=(e+=e).replace(/[- ]+/g,"");if(!Ne.test(t))return!1;for(var r,n,o,a=0,i=t.length-1;i>=0;i--)r=t.substring(i,i+1),n=parseInt(r,10),a+=o&&(n*=2)>=10?n%10+1:n,o=!o;return!(a%10!=0||!t)}var Le=function(e){if("string"!=typeof e)return!1;return/^(?!.*?[._-]{2})[a-z0-9][a-z0-9._-]{0,62}[a-z0-9]@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]{2,63}$/i.test(e)},Fe=function(e){return"string"==typeof e&&/^(0x)[0-9a-f]{40}$/i.test(e+="")},$e=function(e){return/^(\d{3,4}-|\s)?\d{7,14}$/.test(e)};function De(e,t){if(!D(e))return!1;var r=(t=t||{}).hasOwnProperty("allow_leading_zeroes")&&!t.allow_leading_zeroes?/^(?:[-+]?(?:0|[1-9][0-9]*))$/:/^[-+]?[0-9]+$/,n=!t.hasOwnProperty("min")||void 0!==t.min&&e>=t.min,o=!t.hasOwnProperty("max")||void 0!==t.max&&e<=t.max,a=!t.hasOwnProperty("lt")||void 0!==t.lt&&e<t.lt,i=!t.hasOwnProperty("gt")||void 0!==t.gt&&e>t.gt;return r.test(e)&&n&&o&&a&&i}var Me={PL:function(e){var t={1:1,2:3,3:7,4:9,5:1,6:3,7:7,8:9,9:1,10:3,11:0};if(null!=e&&11===e.length&&De(e,{allow_leading_zeroes:!0})){var r=e.split("").slice(0,-1).reduce((function(e,r,n){return e+Number(r)*t[n+1]}),0)%10,n=Number(e.charAt(e.length-1));if(0===r&&0===n||n===10-r)return!0}return!1},ES:function(e){var t={X:0,Y:1,Z:2},r=e.trim().toUpperCase();if(!/^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(r))return!1;var n=r.slice(0,-1).replace(/[X,Y,Z]/g,(function(e){return t[e]}));return r.endsWith(["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"][n%23])},FI:function(e){if(11!==e.length)return!1;if(!e.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/))return!1;return"0123456789ABCDEFHJKLMNPRSTUVWXY"[(1e3*parseInt(e.slice(0,6),10)+parseInt(e.slice(7,10),10))%31]===e.slice(10,11)},IN:function(e){var t=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],r=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],n=e.trim();if(!/^[1-9]\d{3}\s?\d{4}\s?\d{4}$/.test(n))return!1;var o=0;return n.replace(/\s/g,"").split("").map(Number).reverse().forEach((function(e,n){o=t[o][r[n%8][e]]})),0===o},IR:function(e){if(!e.match(/^\d{10}$/))return!1;if(e="0000".concat(e).substr(e.length-6),0===parseInt(e.substr(3,6),10))return!1;for(var t=parseInt(e.substr(9,1),10),r=0,n=0;n<9;n++)r+=parseInt(e.substr(n,1),10)*(10-n);return(r%=11)<2&&t===r||r>=2&&t===11-r},IT:function(e){return 9===e.length&&("CA00000AA"!==e&&e.search(/C[A-Z]\d{5}[A-Z]{2}/i)>-1)},NO:function(e){var t=e.trim();if(isNaN(Number(t)))return!1;if(11!==t.length)return!1;if("00000000000"===t)return!1;var r=t.split("").map(Number),n=(11-(3*r[0]+7*r[1]+6*r[2]+1*r[3]+8*r[4]+9*r[5]+4*r[6]+5*r[7]+2*r[8])%11)%11,o=(11-(5*r[0]+4*r[1]+3*r[2]+2*r[3]+7*r[4]+6*r[5]+5*r[6]+4*r[7]+3*r[8]+2*n)%11)%11;return n===r[9]&&o===r[10]},TH:function(e){if(!e.match(/^[1-8]\d{12}$/))return!1;for(var t=0,r=0;r<12;r++)t+=parseInt(e[r],10)*(13-r);return e[12]===((11-t%11)%10).toString()},LK:function(e){return!(10!==e.length||!/^[1-9]\d{8}[vx]$/i.test(e))||!(12!==e.length||!/^[1-9]\d{11}$/i.test(e))},"he-IL":function(e){var t=e.trim();if(!/^\d{9}$/.test(t))return!1;for(var r,n=t,o=0,a=0;a<n.length;a++)o+=(r=Number(n[a])*(a%2+1))>9?r-9:r;return o%10==0},"ar-LY":function(e){var t=e.trim();return!!/^(1|2)\d{11}$/.test(t)},"ar-TN":function(e){var t=e.trim();return!!/^\d{8}$/.test(t)},"zh-CN":function(e){var t,r=["11","12","13","14","15","21","22","23","31","32","33","34","35","36","37","41","42","43","44","45","46","50","51","52","53","54","61","62","63","64","65","71","81","82","91"],n=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],o=["1","0","X","9","8","7","6","5","4","3","2"],a=function(e){return r.includes(e)},i=function(e){var t=parseInt(e.substring(0,4),10),r=parseInt(e.substring(4,6),10),n=parseInt(e.substring(6),10),o=new Date(t,r-1,n);return!(o>new Date)&&(o.getFullYear()===t&&o.getMonth()===r-1&&o.getDate()===n)},u=function(e){return function(e){for(var t=e.substring(0,17),r=0,a=0;a<17;a++)r+=parseInt(t.charAt(a),10)*parseInt(n[a],10);return o[r%11]}(e)===e.charAt(17).toUpperCase()};return!!/^\d{15}|(\d{17}(\d|x|X))$/.test(t=e)&&(15===t.length?function(e){var t=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);if(!t)return!1;var r=e.substring(0,2);if(!(t=a(r)))return!1;var n="19".concat(e.substring(6,12));return!!(t=i(n))}(t):function(e){var t=/^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(e);if(!t)return!1;var r=e.substring(0,2);if(!(t=a(r)))return!1;var n=e.substring(6,14);return!!(t=i(n))&&u(e)}(t))},"zh-TW":function(e){var t={A:10,B:11,C:12,D:13,E:14,F:15,G:16,H:17,I:34,J:18,K:19,L:20,M:21,N:22,O:35,P:23,Q:24,R:25,S:26,T:27,U:28,V:29,W:32,X:30,Y:31,Z:33},r=e.trim().toUpperCase();return!!/^[A-Z][0-9]{9}$/.test(r)&&Array.from(r).reduce((function(e,r,n){if(0===n){var o=t[r];return o%10*9+Math.floor(o/10)}return 9===n?(10-e%10-Number(r))%10==0:e+Number(r)*(9-n)}),0)}};function Ce(e,t){if(!D(e))return!1;if(e="".concat(e),t in Me)return Me[t](e);if("any"===t){for(var r in Me){if(Me.hasOwnProperty(r))if((0,Me[r])(e))return!0}return!1}throw new Error("Invalid locale '".concat(t,"'"))}function He(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!D(e))return!1;e="".concat(e);var r=/^[0-9]{15}$/,n=/^\d{2}-\d{6}-\d{6}-\d{1}$/,o=r;if(t&&(o=n),!o.test(e))return!1;e=e.replace(/-/g,"");for(var a=0,i=2,u=14,s=0;s<u;s++){var c=e.substring(u-s-1,u-s),l=parseInt(c,10)*i;a+=l>=10?l%10+1:l,1===i?i+=1:i-=1}var f=(10-a%10)%10;return f===parseInt(e.substring(14,15),10)}function xe(e,t){if(!D(e))return!1;var r,n=$(t);if("array"===n){var o=[];for(r in t)({}).hasOwnProperty.call(t,r)&&(o[r]=J(t[r]));return o.indexOf(e)>=0}return"object"===n?t.hasOwnProperty(e):"function"===n&&t.indexOf(e)>=0}function Pe(e,t){if(!D(e))return!1;var r=/^\d{4}$/,n=/^\d{5}$/,o=/^\d{6}$/,a={AD:/^AD\d{3}$/,AT:r,AU:r,AZ:/^AZ\d{4}$/,BE:r,BG:r,BR:/^\d{5}-\d{3}$/,BY:/2[1-4]{1}\d{4}$/,CA:/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,CH:r,CN:/^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,CZ:/^\d{3}\s?\d{2}$/,DE:n,DK:r,DO:n,DZ:n,EE:n,ES:/^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,FI:n,FR:/^\d{2}\s?\d{3}$/,GB:/^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,GR:/^\d{3}\s?\d{2}$/,HR:/^([1-5]\d{4}$)/,HT:/^HT\d{4}$/,HU:r,ID:n,IE:/^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,IL:/^(\d{5}|\d{7})$/,IN:/^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,IR:/\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,IS:/^\d{3}$/,IT:n,JP:/^\d{3}\-\d{4}$/,KE:n,KR:/^(\d{5}|\d{6})$/,LI:/^(948[5-9]|949[0-7])$/,LT:/^LT\-\d{5}$/,LU:r,LV:/^LV\-\d{4}$/,LK:n,MX:n,MT:/^[A-Za-z]{3}\s{0,1}\d{4}$/,MY:n,NL:/^\d{4}\s?[a-z]{2}$/i,NO:r,NP:/^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,NZ:r,PL:/^\d{2}\-\d{3}$/,PR:/^00[679]\d{2}([ -]\d{4})?$/,PT:/^\d{4}\-\d{3}?$/,RO:o,RU:o,SA:n,SE:/^[1-9]\d{2}\s?\d{2}$/,SG:o,SI:r,SK:/^\d{3}\s?\d{2}$/,TH:n,TN:r,TW:/^\d{3}(\d{2})?$/,UA:n,US:/^\d{5}(-\d{4})?$/,ZA:r,ZM:n};if(t in a)return a[t].test(e);if("any"===t){for(var i in a){if(a.hasOwnProperty(i))if(a[i].test(e))return!0}return!1}throw new Error("Invalid locale '".concat(t,"'"))}var Be=/^[A-Z]$/,je=/^[a-z]$/,ze=/^[0-9]$/,Ue=/^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/,Ve={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1,returnScore:!1,pointsPerUnique:1,pointsPerRepeat:.5,pointsForContainingLower:10,pointsForContainingUpper:10,pointsForContainingNumber:10,pointsForContainingSymbol:10};function We(e){var t,r,n=(t=e,r={},Array.from(t).forEach((function(e){r[e]?r[e]+=1:r[e]=1})),r),o={length:e.length,uniqueChars:Object.keys(n).length,uppercaseCount:0,lowercaseCount:0,numberCount:0,symbolCount:0};return Object.keys(n).forEach((function(e){Be.test(e)?o.uppercaseCount+=n[e]:je.test(e)?o.lowercaseCount+=n[e]:ze.test(e)?o.numberCount+=n[e]:Ue.test(e)&&(o.symbolCount+=n[e])})),o}function Ze(e,t){if(!D(e))return!1;var n=We(e),o=r(r({},Ve),t);return o.returnScore?function(e,t){var r=0;return r+=e.uniqueChars*t.pointsPerUnique,r+=(e.length-e.uniqueChars)*t.pointsPerRepeat,e.lowercaseCount>0&&(r+=t.pointsForContainingLower),e.uppercaseCount>0&&(r+=t.pointsForContainingUpper),e.numberCount>0&&(r+=t.pointsForContainingNumber),e.symbolCount>0&&(r+=t.pointsForContainingSymbol),r}(n,o):n.length>=o.minLength&&n.lowercaseCount>=o.minLowercase&&n.uppercaseCount>=o.minUppercase&&n.numberCount>=o.minNumbers&&n.symbolCount>=o.minSymbols}var Ye=function(e){return!!D(e)&&/^[0-9A-Z]{15,18}$/i.test(e)};function qe(e,t){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];if(e===n||(o=n,"[object RegExp]"===Object.prototype.toString.call(o)&&n.test(e)))return!0}var o;return!1}if("string"!=typeof e)return!1;if(!e||/[\s<>]/.test(e))return!1;if(0===e.indexOf("mailto:"))return!1;var o,i,u,s,c,l,f,g,d=r(r({},t),{protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,allow_fragments:!0,allow_query_components:!0,validate_length:!0});if(t.validate_length&&e.length>=2083)return!1;if(!t.allow_fragments&&e.includes("#"))return!1;if(!t.allow_query_components&&(e.includes("?")||e.includes("&")))return!1;if(f=e.split("#"),e=f.shift(),f=e.split("?"),e=f.shift(),(f=e.split("://")).length>1){if(o=f.shift().toLowerCase(),d.require_valid_protocol&&-1===d.protocols.indexOf(o))return!1}else{if(d.require_protocol)return!1;if("//"===e.substr(0,2)){if(!d.allow_protocol_relative_urls)return!1;f[0]=e.substr(2)}}if(""===(e=f.join("://")))return!1;if(f=e.split("/"),""===(e=f.shift())&&!d.require_host)return!0;if((f=e.split("@")).length>1){if(d.disallow_auth)return!1;if(""===f[0])return!1;if((i=f.shift()).indexOf(":")>=0&&i.split(":").length>2)return!1;var p=a(i.split(":"),2),m=p[0],A=p[1];if(""===m&&""===A)return!1}l=null,g=null;var h=(s=f.join("@")).match(/^\[([^\]]+)\](?::([0-9]+))?$/);if(h?(u="",g=h[1],l=h[2]||null):(u=(f=s.split(":")).shift(),f.length&&(l=f.join(":"))),null!==l&&l.length>0){if(c=parseInt(l,10),!/^[0-9]+$/.test(l)||c<=0||c>65535)return!1}else if(d.require_port)return!1;return d.host_whitelist?n(u,d.host_whitelist):!!(oe(u)||ue(u,d)||g&&ne(g))&&(u=u||g,!(d.host_blacklist&&n(u,d.host_blacklist)))}function Xe(e,t){if(!D(e))return!1;var r={1:/^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,2:/^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i}[[void 0,null].includes(t)?"all":t];return!!r&&r.test(e)}export{Te as IsBankCard,A as arrayDataGrouping,v as dateFormatReg,R as debounce,b as deepClone,S as escape,E as filterStringSpace,O as formatDate,_ as getCookieValue,T as getDomainPeriod,y as getDomainTld,P as getLocalStorage,z as getSessionStorage,w as getStrByteLength,N as getUrlParam,F as inputTextareaFormat,Se as isBooleanTrue,Ee as isByteLength,we as isCellPhone,Ie as isCreditCard,ce as isDomain,Le as isEmail,C as isEmptyArray,M as isEmptyStr,Fe as isEthereumAddress,H as isExistValue,ue as isFQDN,$e as isFixedPhone,Re as isHost,He as isIMEI,oe as isIP,re as isIPv4,ne as isIPv6,Ce as isIdentityCard,xe as isIn,le as isInRange,De as isInt,c as isNumber,fe as isPort,Pe as isPostalCode,Oe as isRdata,Ze as isStrongPassword,be as isTTL,Ye as isTaxpayerNo,qe as isURL,Xe as isUUID,D as isValidParamsTypes,ye as isZone,g as numberAdd,m as numberDivide,p as numberMultiply,d as numberSubtract,l as numberToDecimal2,B as removeLocalStorage,U as removeSessionStorage,h as setCookie,V as setErrorCodeLang,W as setHtmlTitle,x as setLocalStorage,j as setSessionStorage,Z as setUrlParam,L as specialSymbolToComma,Y as throttle,q as unescape,G as utilStringToArray,J as utilToString,$ as utilTypeOf,X as utilsSubmitForm,e as version};
//# sourceMappingURL=index.js.map
