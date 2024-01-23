/**
 * @names：判断数组是否为空数据
 * @params[data] Array
 * */
export const isEmptyArray = (data: any) => {
  if (Array.isArray(data)) {
    return !data.length;
  }
  return true;
};

