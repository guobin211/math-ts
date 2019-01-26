function getName(...args) {
  return args;
}
var names = ['jack', 'tom', 'mary']

const res = getName.apply(null, names);

console.log(res);