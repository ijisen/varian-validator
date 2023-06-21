import { ILabelRegConfig } from "@/validator/http/typings";

import errorCodes from "@/validator/http/isFQDN/errorCodes";
import setErrorCodeLang from "@/utils/setErrorCodeLang";
import filterStringSpace from "@/utils/filterStringSpace";

/**
 * 域名关键词验证
 *
 * */
const domainLabelValidator = ({ label, options = {}, lang }: { label: any; options?: Partial<ILabelRegConfig>; lang?: string }) => {
  let errorMessage = errorCodes[setErrorCodeLang(lang)];
  label = filterStringSpace(label, true);

  if(!label) {
    return {
      success: false,
      message: errorMessage.LABEL_TOO_SHORT,
    };
  }

  options = {
    // 是否允许包含下划线
    allow_underscores: false,
    ...options,
  };

  if(label.length > 63) {
    return {
      success: false,
      message: errorMessage.LABEL_TOO_LONG,
    };
  }

  if(!options.allow_underscores && /_/.test(label)) {
    // 不允许下划线
    return {
      success: false,
      // 域名关键字不能包含 _
      message: errorMessage.LABEL_WITH_UNDERSCORES,
    };
  } else {
    // 允许下划线 =》 域名关键字不能以 _ 结尾
    if(/_$/.test(label)) {
      return {
        success: false,
        message: errorMessage.LABEL_ENDS_WITH_UNDERSCORES,
      };
    }
  }

  // \u4E00-\u9FA5 \u00a1-\uffff
  let labelReg = /^[a-z\u00a1-\uffff0-9-]+$/i;
  let labelRegErrMsg = errorMessage.LABEL_INVALID_CHARS;
  if(options.allow_underscores) {
    // 允许下划线
    labelReg = /^[a-z\u00a1-\uffff0-9-_]+$/i;
    labelRegErrMsg = errorMessage.LABEL_INVALID_CHARS_WITH_UNDERSCORES
  }

  if(!labelReg.test(label)) {
    return {
      success: false,
      message: labelRegErrMsg,
    };
  }

  // disallow full-width chars
  if(/[\uff01-\uff5e]/.test(label)) {
    return {
      success: false,
      message: errorMessage.LABEL_INVALID_CHARS,
    };
  }

  // disallow node starting or ending with hyphen
  if(/^-|-$/.test(label)) {
    return {
      success: false,
      message: errorMessage.LABEL_WITH_HYPHEN,
    };
  }

  return {
    success: true,
    message: '',
  };
}

export default domainLabelValidator;
