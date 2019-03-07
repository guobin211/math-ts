/* 对数乘法表*/
let res = [];
for (let i=1,j=1;i<=9,j<=9;i++,j++){
    res.push(i*j);
}
console.log(res);
// 自乘
for (let i=1;i<=9;i++){
    console.log(i*i);
}

// 99 乘法表
for (let i=1;i<=9;i++){
    let str="";
    for (let j=1;j<=i;j++) {
        str+=i+"*"+j+"="+i*j;
    }
    console.log(str+"\n");
}

// 随机排列
function shuffle(arr) {
    let len = arr.length;
    for (let i=0; i<len-1; i++) {
        let idx = Math.floor(Math.random()*(len-i));
        let temp = arr[idx];
        arr[idx] = arr[len-i-1];
        arr[len-i-1] = temp;
    }
    return arr;
}

// 检验随机
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const t = 10000;
for (let i=0;i<t;i++){
    var sorted = shuffle(arr1.slice(0));
        sorted.forEach(function (o,i) {
            res[i] +=o;
        });
}
res =res.map(function (o) {
    return o/t;
});
console.log(res);
