import { ITldRegConfig } from '@/validator/http/typings.d';

import setErrorCodeLang from "@/utils/setErrorCodeLang";
import errorCodes from "./errorCodes";

/**
 * TLD格式校验
 *
 * */
const tldValidator = ({ tld, options = {}, lang }: { tld: any; options?: Partial<ITldRegConfig>; lang?: string }) => {
  options = {
    // 是否允许纯数字TLD
    allow_numeric_tld: false,
    // 是否允许TLD包含 -
    allow_hyphen_tld: false,
    ...options,
  };
  let errorMessage = errorCodes[setErrorCodeLang(lang)];

  // reject numeric TLDs
  if(!options.allow_numeric_tld && /^\d+$/.test(tld)) {
    return {
      success: false,
      message: errorMessage.TLD_WITH_NUMBER,
    };
  }

  let tldReg = /^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i;
  if(options.allow_hyphen_tld) {
    tldReg = /^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]{2,})$/i;
  }

  if(!tldReg.test(tld)) {
    return {
      success: false,
      message: errorMessage.TLD_INVALID_CHARS,
    };
  }
  return {
    success: true,
    message: '',
  };
}

export default tldValidator
