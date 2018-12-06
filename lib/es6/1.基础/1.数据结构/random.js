// 需求： 从传入的4个数组中生成新数组, 类型为 {'arr1[i]', 'arr2[j]', 'arr3[x]'}
// 步骤一： 拼接数组
let arrAll = arr1.concat(arr2).concat(arr3).concat(arr4);
// console.log(arrAll);
// 步骤二： 数组去重
let arrOnce = [];
new Set(arrAll).forEach((current) => {
    arrOnce.push(current);
});
// console.log(arrOnce);
// 步骤三： 数组去除空值
let arrNoNull = arrOnce.filter((current) => {
    return current !== null && current !== undefined;
});
// console.log(arrNoNull);
// 生称随机三个组合
function buildArrObj(arr) {
    let reArr = [];
    for (let i = 0; i <= arr.length; i++) {
        let indexArr = [];
        let index1 = Math.floor(Math.random()*arr.length); //随机取一个位置
        let index2 = Math.floor(Math.random()*arr.length); //随机取一个位置
        let index3 = Math.floor(Math.random()*arr.length); //随机取一个位置
        indexArr.push(arr[index1]);
        indexArr.push(arr[index2]);
        indexArr.push(arr[index3]);
        reArr.push(indexArr);
    }
    return reArr;
}
