/**
 * 标签语义化编译
 * @param[str]  str
 * eg: &lt;h1&gt; => <h1>
 * */
export default function unescape(str: any) {
  if(typeof str !== "string") {
    return false
  }
  return (str.replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x2F;/g, '/')
    .replace(/&#x5C;/g, '\\')
    .replace(/&#96;/g, '`')
    .replace(/&amp;/g, '&'));
  // &amp; replacement has to be the last one to prevent
  // bugs with intermediate strings containing escape sequences
  // See: https://github.com/validatorjs/validator.js/issues/1827
}
