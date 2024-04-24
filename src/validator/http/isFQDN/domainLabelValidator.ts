import { ILabelRegConfig } from '@/validator/http/typings';

import errorCodes from '@/validator/http/isFQDN/errorCodes';
import setErrorCodeLang from '@/utils/setErrorCodeLang';
import filterStringSpace from '@/utils/filterStringSpace';

/**
 * 域名关键词验证
 * @param[config.label] 关键词
 * @param[config.option.allow_underscores] 是否允许包含下划线, 默认: false
 * @param[config.lang] 国际话语言 默认： zh_CN
 * */
const domainLabelValidator = (config: {
  label: any;
  option?: Partial<ILabelRegConfig>;
  lang?: string;
}) => {
  let { label, option = {}, lang } = config;
  let errorMessage = errorCodes[setErrorCodeLang(lang)];
  label = filterStringSpace(label, true);

  if (!label) {
    return {
      success: false,
      message: errorMessage.LABEL_TOO_SHORT
    };
  }

  option = {
    // 是否允许包含下划线
    allow_underscores: false,
    ...option
  };

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
  let labelReg = /^[a-z\u00a1-\uffff0-9-]+$/i;
  // 域名关键字只能包含a-z、A-Z、0-9、-、中文汉字.
  let labelRegErrMsg = errorMessage.LABEL_INVALID_CHARS;
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

export default domainLabelValidator;
