/**
 * Better way to handle type checking
 * null, {}, array and date are objects, which confuses
 */
export default function typeOf(input: any) {
  const rawObject = Object.prototype.toString.call(input).toLowerCase();
  const typeOfRegex = /\[object (.*)]/g;
  // @ts-ignore
  return typeOfRegex.exec(rawObject)[1];
}
