/** 防抖函数，减少函数的执行次数 */
export function debounce(func, delay){
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}