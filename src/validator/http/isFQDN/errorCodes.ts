/**
 * 域名格式校验 - 错误提示消息.
 * */
export const errorCodes = {
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
    TLD_INVALID_CHARS: 'TLD格式错误.',
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
    TLD_INVALID_CHARS: 'TLD format error',
  },
};

export default errorCodes;
