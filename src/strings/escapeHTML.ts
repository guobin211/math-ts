/**
 * 转义一个字符串，以用于HTML
 * @param str
 */
const escapeHTML = (str: string) =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      (({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      } as any)[tag] || tag)
  )

export default escapeHTML
