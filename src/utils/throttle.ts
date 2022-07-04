



/**
 * name：函数节流
 * description：函数触发后,如果函数还在执行中，就不再执行，
 * @params[fn]  回调函数
 * @params[delay]  定时器延时
 */
export const throttle = (fn = () => {
}, delay = 200) => {
  let timer: any = null;
  return () => {
    // 函数在执行中，无论触发几次都不执行。
    if(timer) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn && fn();
      timer = null;
    }, delay);
  }
};
