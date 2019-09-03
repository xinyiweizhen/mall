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
/** 时间格式化方法 */
export function formatDate(Date, format){
  var Year = Date.getFullYear(),
      Month = Date.getMonth() + 1,
      Day = Date.getDate(),
      Hours = Date.getHours(),
      Minutes = Date.getMinutes(),
      Seconds = Date.getSeconds(),
      Month = addZero(Month),
      Day = addZero(Day),
      Hours = addZero(Hours),
      Minutes = addZero(Minutes),
      Seconds = addZero(Seconds),
      FormatStr = "";
  switch (format) {
    case "TIMEONLY":
      FormatStr = Hours + ":" + Minutes + ":" + Seconds;
      break;
    case "DATEONLY":
      FormatStr = Year + "-" + Month + "-" + Day;
      break;
    case "DATETIME":
      FormatStr = Year + "-" + Month + "-" + Day + " " + Hours + ":" + Minutes + ":" + Seconds;
      break;
    case "YEARMONTH":
      FormatStr = Year + "-" + Month;
      break;
    case "YEAR":
      FormatStr = Year;
      break;
    case "DATE":
      FormatStr = Day;
      break;
    case "HOUR":
      FormatStr = Hours;
      break;
    case "MINUTE":
      FormatStr = Minutes
  }
  return FormatStr
}
function addZero(a) {
  return 10 > a ? "0" + a : a
}