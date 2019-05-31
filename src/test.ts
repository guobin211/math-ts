/**
 * test
 * @author guobin201314@gmail.com on 2019-05-31
 */

import { mt } from './index';

const arr = [1, 2, 3, 4, 5];
const res = mt.all(arr, (num: number) => num > 0);

console.log(res);
