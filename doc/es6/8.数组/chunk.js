// 数组分块
const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]

let arr1 = [1,2,3,'a','b'];
let arr2 = [1,2,3,4];
console.log(typeof (arr1), typeof (arr2));
console.log(arr1.prototype);
console.log(arr2.constructor);
// 判断一个变量是对象还是数组
function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

console.log(isArray(arr2)); //true

// 判断一个变量是对象还是数组
function isArray2(object){
    return  object && typeof object==='object' &&
        typeof object.length==='number' &&
        typeof object.splice==='function' &&
        //判断length属性是否是可枚举的 对于数组 将得到false
        !(object.propertyIsEnumerable('length'));
}
console.log(isArray2(arr1));
let obj1 = {
    name: 'zhangsan'
};
console.log(isArray2(obj1));