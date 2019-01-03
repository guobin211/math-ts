# math-ts Typescript Utils

----------------------
### Do not use it directly in the production environment.

     You can copy the code to build your own tools, 
     but it isn't recommended that you use the project code directly.

----------------------
### dev or build

    git-clone:
    npm install
    npm run dev
    npm run build
    test

----------------------

### How to use database 

[download MySQL](https://dev.mysql.com/downloads/installer/)

    mysql 8.0
    
    > net start MySQL 3306
    
[download Mongodb](https://www.mongodb.com/download-center/community)
    
    mongodb 4.0.4
    
    ### db path
    > sudo mkdir /usr/local/mongodb/data
    
    ### log path
    > sudo mkdir /usr/local/mongodb/mongodb.log
    
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
  
