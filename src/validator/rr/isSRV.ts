import filterStringSpace from "@/utils/filterStringSpace";
import stringToArray from "@/utils/stringToArray";
import setErrorCodeLang from "@/utils/setErrorCodeLang";
import isInRange from "@/validator/isInRange";
import isPort from "@/validator/http/isPort";
import isDomain from "@/validator/http/isDomain";

import { isFQDNRes } from "@/validator/http/typings.d";

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

const errorCodes = {
  zh: {
    FORMAT_ERROR:
      'SRV记录格式为： 优先级 权重 端口 目标地址 ，每项中间需以空格分隔。例如 “0 5 5060 sipserver.example.com”。',
  },
  en: {
    FORMAT_ERROR:
      'The format of an SRV record is: [Priority] [Weight] [Port number] [Target address]. Separate the priority, weight, port number, and target address with spaces. Example: 0 5 5060 sipserver.example.com',
  },
};


const isSRV = (str: string, lang?: string): isFQDNRes => {
  // 过滤多余的空格文本
  const regValue = filterStringSpace(str);
  const values = stringToArray(regValue);
  console.log(values);
  const error_code = errorCodes[setErrorCodeLang(lang)];
  if(values.length === 4) {
    const priority = values[0];
    const weight = values[1];
    const port = values[2];
    const domain = values[3];
    console.log(`priority: ${priority}, weight: ${weight}, port: ${port}, domain: ${domain}`);
    const { success } = isDomain({
      str: regValue,
      lang,
      config: {
        allow_trailing_dot: true
      }
    });
    // console.log(isInRange(priority, 0, 65535));
    // console.log(isInRange(values[1], 0, 65535));
    // console.log(isPort(values[2]));
    const _success =
      isInRange(priority, 0, 65535) &&
      isInRange(weight, 0, 65535) &&
      isPort(port) &&
      success;
    return {
      success: _success,
      message: _success ? '' : error_code.FORMAT_ERROR,
      regValue,
    };
  }
  return {
    success: false,
    message: error_code.FORMAT_ERROR,
    regValue,
  };
};

export default isSRV
