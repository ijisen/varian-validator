import { ITldRegConfig } from '@/validator/http/typings.d';

import setErrorCodeLang from '@/utils/setErrorCodeLang';
import errorCodes from './errorCodes';

/**
 * TLD格式校验
 * @param[params.tld] 需要校验的TLD
 * @param[params.option] TLD验证可选参数
 * @param[params.lang] 国际话语言
 * */
const tldValidator = (params: {
  tld: any;
  option?: Partial<ITldRegConfig>;
  lang?: string;
}) => {
  let { tld, option = {}, lang } = params;
  option = {
    // 是否允许纯数字TLD
    allow_numeric_tld: false,
    // 是否允许TLD包含 -
    allow_hyphen_tld: false,
    ...option
  };
  let errorMessage = errorCodes[setErrorCodeLang(lang)];

  // reject numeric TLDs
  if (!option.allow_numeric_tld && /^\d+$/.test(tld)) {
    return {
      success: false,
      message: errorMessage.TLD_WITH_NUMBER
    };
  }

  let tldReg = /^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i;
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

export default tldValidator;
