let dishes = [{name:"fish",time:3},{name:"fish1",time:2},{name:"fish3",time:3}];
// 按顺序做菜
(async ()=>{
    // for循环中
    for (let d of dishes){
        // 第一步执行
        console.log("开始");
        // 第二步执行
        await (()=>{
            return new Promise(res=>{
                setTimeout(res, d.time*1000)
            })
        })();
        // 第三步执行
        console.log("做好了"+d.name);
    }
})();

async function loadData(urlOne, urlTwo) {
    let dataOne = await loadData(urlOne);
    let dataTwo = await  loadData(urlTwo);
}

// async 返回一个Promise
// async 函数中 return 的结果将作为回调的参数
async function test() {
    return "this is a async function";
}
test().then(
    resolveArg => console.log(resolveArg)
);
