/**
 * 使用 * 遮蔽字符串
 * @param cc
 * @param num
 * @param mask
 */
const maskStr = (cc: string, num: number = 4, mask = "*") =>
  ("" + cc).slice(0, -num).replace(/./g, mask) + ("" + cc).slice(-num)

export default maskStr
