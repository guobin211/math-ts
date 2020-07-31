/**
 * 反转义 HTML 字符
 * @param str
 */
const unescapeHTML = (str: string) =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag =>
      (({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&#39;": "'",
        "&quot;": '"',
      } as any)[tag] || tag)
  )

export default unescapeHTML
