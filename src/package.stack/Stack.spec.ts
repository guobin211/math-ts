/**
 * Main.spec
 * @author guobin201314@gmail.com on 2019-03-08
 */
import { Stack } from "./Stack";

const s = new Stack();


console.log(s.isEmpty());

s.push(3);

console.log(s.pop());

s.push(6);

s.push(9);

console.log(s.peek());

console.log(s.pop());

console.log(s.peek());

s.pop();

s.clear();

console.log(s);



