/**
 * 判断数据是否存在
 * @param[value] 需要判断的数据
 * @param[returnType] 返回类型，默认返回 boolean
 * @param[emptyVal] 返回值，默认返回 N/A
 * @return any
 */
export const isExistValue = (value: any, returnType?: 'boolean' | 'string', emptyVal?: any) => {
  let _value = false;
  returnType = returnType || 'boolean';
  emptyVal = typeof emptyVal === 'undefined' ? 'N/A' : emptyVal;
  if(value === 0 || value === false || value) {
    _value = true;
  } else {
    // null undefined
    // _value = emptyVal
  }
  if(returnType === 'boolean') {
    return _value
  }
  return _value ? value : emptyVal
};
