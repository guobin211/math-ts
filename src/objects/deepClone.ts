/**
 * deepClone
 *
 * @author GuoBin on 2019-07-17
 */

const deepClone = (obj: any) => {
  return JSON.parse(JSON.stringify(obj))
}

export default deepClone
