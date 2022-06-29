/**
 * 标签语义化
 *
 * */
const escape = (str: any) => {
  if(typeof str !== "string") {
    return false
  }
  return (str.replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#96;'));
}

export default escape
