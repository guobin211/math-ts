/**
 * deepClone
 *
 * @author GuoBin on 2019-07-17
 */

export const deepClone = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

export const clone: (obj: any) => any = (obj: any) => {
  const copy: any = obj instanceof Array ? [] : {};
  for (const key in  obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = typeof obj[key] === 'object' ? clone(obj[key]) : obj[key];
    }
  }
  return copy;
};
