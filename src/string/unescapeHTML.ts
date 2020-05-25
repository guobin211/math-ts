/**
 * 反转义 HTML 字符
 * @param str
 */
export const unescapeHTML = (str: string) =>
    str.replace(
        /&amp;|&lt;|&gt;|&#39;|&quot;/g,
        tag =>
            // @ts-ignore
            ({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&#39;": "'",
                "&quot;": '"'
            }[tag] || tag)
    );
