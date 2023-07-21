/**
 * name：函数防抖
 * description：函数触发后，如果函数还没执行完成，则打断执行，重新执行
 * @params[fn]  回调函数
 * @params[delay]  定时器延时
 * @params[immediate]  表示第一次是否立即执行
 */
export const debounce = (fn: Function, delay = 500, immediate = false) => {
  let timer: any = null
  return function (this: any, ...args: any) {
    if(timer) clearTimeout(timer)

    // ------ 新增部分 start ------
    // immediate 为 true 表示第一次触发后执行
    // timer 为空表示首次触发
    if(immediate && !timer) {
      fn.apply(this, args)
    }
    // ------ 新增部分 end ------

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
};


// DEMO
// 执行 debounce 函数返回新函数
/*
const betterFn = debounce((data:any) => {
  console.log(data);
  console.log('fn 防抖执行了')
}, 1000, true)
*/
// 第一次触发 scroll 执行一次 fn，后续只有在停止滑动 1 秒后才执行函数 fn
/*
document.addEventListener('scroll', betterFn)
betterFn(80)
*/

