/**
 * 反转对象的键值对
 * @param obj
 */
function invertKeyValues(obj: any) {
  const resObject: any = {}
  Object.keys(obj).forEach(el => {
    resObject[obj[el]] = el
  })
  return resObject
}
export default invertKeyValues
