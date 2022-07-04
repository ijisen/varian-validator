
/**
 *  计算字符串长度
 *  将字符串转Unicode计算 一个中文 = 3个子节
 *
 * @param[str] 字符串
 */
export function getStrByteLength(str: string) {
  let totalLength = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const charCode = str.charCodeAt(i);
    if(charCode < 0x007f) {
      totalLength += 1;
    } else if((0x0080 <= charCode) && (charCode <= 0x07ff)) {
      totalLength += 2;
    } else if((0x0800 <= charCode) && (charCode <= 0xffff)) {
      totalLength += 3;
    }
  }
  console.log("信息长度为: " + totalLength + " 字节");
}
