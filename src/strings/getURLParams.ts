/**
 * 当前URL参数的对象
 * @param url
 */
const getURLParams = (url: string) => {
  const reg = /([^?=&]+)(=([^&]*))/g
  const arr = url.match(reg)
  if (!arr) {
    return
  }
  return arr.reduce(
    (a: any, v) => (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)),
    {}
  )
}

export default getURLParams
