let arr1 = ['0-50', '50-100', '100-150', '150-200', '200-250'];
let arr2 = ['男', '女'];
let arr3 = ['湖北', '河南', '江西','', '广东', null, undefined];
let arr4 = ['100', '200', '300', '400', '500'];

/****
 * 格式化数组
 * @param arr
 * @return {*}
 */
function format(arr) {
    let arrOnce = [];
    let arrNoNull;
    // 去除空值
    new Set(arr).forEach((current) => {
        arrOnce.push(current);
    });
    // 去除null和undefined
    arrNoNull = arrOnce.filter((current) => {
        return current !== null && current !== undefined && current!== '';
    });
    return arrNoNull;
}
// console.log(format(arr3));
/****
 * 去除空数组
 * @param arr
 * @return {Array}
 */
function deleteEnpty(...arr) {
    let result = [];
    for (let val of arr) {
        if (val.length > 0) {
            result.push(val)
        }
    }
    return result;
}
let tes1 = format(arr1);
let tes2 = format(arr2);
let tes3 = format(arr3);
let tes4 = format(arr4);
// console.log(deleteEnpty(tes1,tes2,tes3,tes4));

let data = deleteEnpty(tes1,tes2,tes3,tes4);
/****
 * 选择build方式
 * @param arr
 * @return {Array}
 */
function chooseBuild(arr) {
    let result = [];
    if (arr.length === 4) {
        result = buildFourArr(arr[0],arr[1],arr[2],arr[3]);
    }
    if (arr.length === 3 ) {
        result = buildThreeArr(arr[0],arr[1],arr[2]);
    }
    if (arr.length === 2) {
        result = buildTwoArr(arr[0],arr[1]);
    }
    if (arr.length === 1) {
        result = arr;
    }
    return result;
}

/****
 * buildArr 排列组合
 * @param arr
 * @return {Array}
 */
function buildArr(...arr) {
    let result = [];
    arr.forEach((item) => {
        for (let i = 0 ; i < item.length ; i++) {
            console.log(item[i]);
            let n = item.length;  // n个对象 m个元素 的排列组合

        }
    });
    return result;
}
buildArr(data);
/****
 * 3数组构建
 * @param checkedArr1
 * @param checkedArr2
 * @param checkedArr3
 * @return {Array}
 */
function buildThreeArr(checkedArr1, checkedArr2, checkedArr3) {
    let result = [];
    for (let i = 0; i < checkedArr1.length; i++) {
        for (let y = 0 ; y < checkedArr2.length; y++) {
            for (let x = 0 ; x < checkedArr3.length; x++) {
                let addArr = [];
                addArr.push(checkedArr1[i]);
                addArr.push(checkedArr2[y]);
                addArr.push(checkedArr3[x]);
                result.push(addArr);
            }
        }
    }
    return result;
}
// console.log(buildThreeArr(arr1,arr2,arr3));
/****
 * 4数组构建
 * @param arr1
 * @param arr2
 * @param arr3
 * @param arr4
 */
function buildFourArr(arr1, arr2, arr3, arr4) {
    let result1 = buildThreeArr(arr1, arr2, arr3);
    let result2 = buildThreeArr(arr1, arr2, arr4);
    let result3 = buildThreeArr(arr1, arr3, arr4);
    let result4 = buildThreeArr(arr2, arr3, arr4);
    return result1.concat(result2).concat(result3).concat(result4);
}
// console.log(buildFourArr(arr1,arr2,arr3,arr4));
/****
 * 2数组build
 * @param checkedArr1
 * @param checkedArr2
 * @return {Array}
 */
function buildTwoArr(checkedArr1, checkedArr2) {
    let result = [];
    for (let i = 0; i < checkedArr1.length; i++) {
        for (let y = 0 ; y < checkedArr2.length; y++) {
            let addArr = [];
            addArr.push(checkedArr1[i]);
            addArr.push(checkedArr2[y]);
            result.push(addArr);
        }
    }
    return result;
}
// console.log(buildTwoArr(arr1,arr2));

// 第一步：数据格式化
let test1 = format(arr1);
let test2 = format(arr2);
let test3 = format(arr3);
let test4 = format(arr4);
// 第二步：删除[]
let midArr = deleteEnpty(test1, test2, test3, test4);
// 第三部：选择组合方式
let result = chooseBuild(midArr);

// console.log(result);