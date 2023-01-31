
/**
 * @names：判断数组是否为空数据
 * @params[data] Array
 * */
export const isEmptyArray = (data: any): boolean => {
  return !Array.isArray(data) || !data.length
};

