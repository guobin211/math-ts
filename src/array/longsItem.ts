/**
 * 获取任何数量的可迭代对象或具有 length 属性的对象，并返回最长的一个。
 * @param vals
 */
function longsItem(...vals: any[]) {
  return [...vals].sort((a, b) => b.length - a.length)[0]
}

export default longsItem
