# Typescript Tool library

> a library of data manipulation and processing for JS platform
> Use Typescript Programming
> Some common tools for writing code
> Including Server Backend, database, Algorithm, Mathematics, DomDiff, Cache,  Middleware, Etc.
    
### Test Function

    npm i math-ts --save

```typescript

    import * as math from 'math-ts'; 
    const arr = [1, 2, 3, 4];
    math.chunk(arr, 2);     // [ [1, 2], [3, 4] ]
        
```

### How to use database 

[download MySQL](https://dev.mysql.com/downloads/installer/)

    mysql 8.0
    
    > net start MySQL 3306
    
[download Mongodb](https://www.mongodb.com/download-center/community)
    
    mongodb 4.0.4
    
    > sudo ./mongod -dbpath=/usr/local/mongodb/data -logpath=/usr/local/mongodb/mongodb.log -logappend -port=27017 -fork
    
    > ./mongod -shutdown -dbpath=/usr/local/mongodb/data
    
    --dbpath：指定存储数据的文件夹
    
    --logpath：指定日志存储文件
    
    --logappend：日志以增加方式产生
    
    --port指定端口，如果不写的话，默认是27017
    
    --fork代表后台运行


### How to use redis ro cache-manage

[download Redis](http://www.redis.cn/)

    redis 5.0.2
    
    > redis-server
    
    > redis-cli
    
    > localhost:6379
    
### package list

    array
    collection
    date
    function
    graph
    hashmap
    heap
    io
    linked
    math
    number
    object
    queues
    sort
    stacks
    string
    typeof
    utils
    

### Reference

[TypeScript DOC](https://www.tslang.cn/docs/home.html)

[Nodejs CN](http://nodejs.cn/api/)

[Lodash ](https://lodash.com/)

[Ramda ](http://ramda.cn/docs/)

[30-seconds Code](https://github.com/30-seconds)

[Javascript MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

[ECMAScript 6 入门](http://es6.ruanyifeng.com/)
