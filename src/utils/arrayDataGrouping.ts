/**
 * @names：数组分组提交数据
 * @params[data] 数据
 * @params[groupLen] 组员
 * */
export const arrayDataGrouping = (data = [], groupLen = 10) => {
  if(!Array.isArray(data) || !data.length) {
    return undefined
  }
  // 数据长度
  let dataLen = data.length;
  if(dataLen <= groupLen) {
    return [data]
  }
  data = JSON.parse(JSON.stringify(data));
  // 当前数据可分组数
  let group = Math.ceil(dataLen / groupLen);
  let groupData = [];
  for (let i = 1; i < group; i++) {
    groupData.push(data.splice(0, groupLen))
  }
  groupData.push(data);
  return groupData;
};
