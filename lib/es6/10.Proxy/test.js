let obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});

//  setting count!
obj.count = 1;

//  getting count!
//  setting count!
++obj.count;


// 拦截器实例
let proxy = new Proxy({}, {
    get: function(target, property) {
        console.log(target, property);
        return 35;
    }
});

console.log(proxy.name); // 35
