export const enum EnumLanguageType {
  en = 'en-US',
  zh = 'zh-CN',
}
const setErrorCodeLang = (lang: any = EnumLanguageType.zh) => {
  if (lang === EnumLanguageType.en) {
    return 'en';
  }
  return 'zh';
};

export default setErrorCodeLang;
