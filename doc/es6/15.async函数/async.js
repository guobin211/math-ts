function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
// async函数
async function asyncPrint(value, ms) {
    // 等待第一个函数执行完
    await timeout(ms);
    console.log(value);
}

asyncPrint('hello world', 3000);