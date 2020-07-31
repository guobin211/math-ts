/**
 * 检测 Object 的 key
 * @param key
 * @param obj
 */
function isValidKey(key: string, obj: {}): key is keyof typeof obj {
  return key in obj
}
export default isValidKey
