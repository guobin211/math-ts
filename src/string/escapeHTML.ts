/**
 * 转义一个字符串，以用于HTML
 * @param str
 */
export const escapeHTML = (str: string) =>
    str.replace(
        /[&<>'"]/g,
        tag =>
            // @ts-ignore
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
    );
