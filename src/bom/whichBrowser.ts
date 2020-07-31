/**
 * whichBrowser
 * 浏览器类型 Opera Chrome Safari FF IE
 * @author guobin201314@gmail.com on 2019-04-17
 */

function whichBrowser(): Browser {
  const userAgent = navigator.userAgent
  const isOpera = userAgent.indexOf("Opera") > -1
  if (isOpera) {
    return "Opera"
  }
  if (userAgent.indexOf("Firefox") > -1) {
    return "FF"
  }
  if (userAgent.indexOf("Chrome") > -1) {
    return "Chrome"
  }
  if (userAgent.indexOf("Safari") > -1) {
    return "Safari"
  }
  if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
    return "IE"
  }
  return "IE"
}

export type Browser = "Opera" | "FF" | "Chrome" | "Safari" | "IE"

export default whichBrowser
