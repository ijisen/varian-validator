
/**
 * @names：判断数组是否为空数据
 * @params[data] Array
 * */
export const isEmptyArray = (data: any): data is any[] => {
  return !Array.isArray(data) || !data.length
};

