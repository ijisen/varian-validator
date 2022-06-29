export default function merge(obj: {
  [propName: string]: any
} = {}, defaults: {
  [propName: string]: any
}) {
  for (const key in defaults) {
    if(typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
