let isTrue;
/**
 * 使用系统自带的promise
 * @type {Promise<any>}
 */
const promise = new Promise(function(resolve, reject) {
    // ... some code
    if (isTrue){
        resolve("value");
    } else {
        reject("error");
    }
});
// 用Promise对象实现的 Ajax 操作的例子

const getJSON = function(url) {
    return new Promise(function(resolve, reject){
        const handler = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

    });
};

getJSON("/posts.json").then(function(json) {
    console.log('Contents: ' + json);
}, function(error) {
    console.error('出错了', error);
});
