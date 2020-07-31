/**
 * firstUniqChar
 * @author guobin201314@gmail.com on 2019-01-16
 */

const firstUniqChar = function(s: string): number {
  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    const after = s.replace(current, "")
    if (!after.includes(current)) {
      return i
    }
  }
  return -1
}

export default firstUniqChar
