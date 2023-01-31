/**
 * @names：文本是否存在
 * @params[str] string
 * @return string
 * */
import { filterStringSpace } from '@/utils/_index';

const isExistString = (str: any): undefined | string => {
  if(typeof str === 'string') {
    return filterStringSpace(str);
  }
  return undefined;
};

export default isExistString;
