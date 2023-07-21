/**
 * name：函数节流
 * description：函数触发后,如果函数还在执行中，就不再执行，
 * @params[fn]  回调函数
 * @params[delay]  定时器延时
 */
export const throttle = (fn: Function, delay = 500) => {
  let timer: any = null;
  return function(this: any, ...args: any)  {
    // 函数在执行中，无论触发几次都不执行。
    if(timer) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn && fn.apply(this, args);
      timer = null;
    }, delay);
  }
};


// DEMO
// 执行 throttle 函数返回新函数
/*
const betterFn = throttle((data:any) => {
  console.log(data);
  console.log('fn 节流执行了')
}, 1000)
*/
// 第一次触发 scroll 执行一次 fn，后续只有在停止滑动 1 秒后才执行函数 fn
/*
betterFn(80)
*/
