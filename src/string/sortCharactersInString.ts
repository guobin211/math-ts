/**
 * 按字母顺序排列字符串中的字符
 * @param str
 */
export const sortCharactersInString = (str: string) =>
    [...str]
        .sort((a, b) => a.localeCompare(b))
        .join('');
