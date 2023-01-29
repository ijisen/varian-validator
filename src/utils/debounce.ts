/**
 * name：函数防抖
 * description：函数触发后，如果函数还没执行完成，则打断执行，重新执行
 * @params[fn]  回调函数
 * @params[delay]  定时器延时
 */
export const debounce = (fn = () => {
}, delay = 200) => {
  let timer: any = null;
  return () => {
    // 再次触发时，立即重新执行
    // if (timer) {
    clearTimeout(timer);
    timer = null;
    // }
    timer = setTimeout(fn, delay);

  }
};
