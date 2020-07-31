/**
 * 按字母顺序排列字符串中的字符
 * @param str
 */
const sortCharactersInString = (str: string) =>
  str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")

export default sortCharactersInString
