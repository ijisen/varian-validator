
/**
 * 判断数据是否存在
 * @param[value] 需要判断的数据
 * @param[returnType] 返回类型，默认返回 boolean
 * @return boolean || string
 */
export const isExistValue = (value: any, returnType = 'boolean') => {
  let _value = '';
  if(value === 0 || value === false || value) {
    _value = value;
  } else {
    // null undefined ''
    _value = '-';
  }
  // console.log(_value);
  return (returnType === 'boolean') ? (_value !== '-') : _value
};
