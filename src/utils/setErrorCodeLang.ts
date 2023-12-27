/**
 * 语言类型枚举值
 * */
export enum EnumLanguageType {
  en = 'en-US',
  zh = 'zh-CN',
}

export type LanguageType = EnumLanguageType.zh | EnumLanguageType.en | undefined | string;

/**
 * 设置错误消息语言类型
 * @param[lang] LanguageType 默认: 中文[zh-CN]
 * */
const setErrorCodeLang = (lang: LanguageType = EnumLanguageType.zh) => {
  if (lang === EnumLanguageType.en) {
    return EnumLanguageType.en;
  }
  return EnumLanguageType.zh;
};

export default setErrorCodeLang;
