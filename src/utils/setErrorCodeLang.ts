/**
 * 语言类型
 * */
export enum EnumLanguageType {
  en = 'en-US',
  zh = 'zh-CN',
}

/**
 * 设置错误消息语言类型
 * */
const setErrorCodeLang = (lang: any = EnumLanguageType.zh) => {
  if (lang === EnumLanguageType.en) {
    return 'en';
  }
  return 'zh';
};

export default setErrorCodeLang;
