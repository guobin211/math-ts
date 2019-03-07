const fs = require('fs');
// fs 文件模块
// 查看文件还是目录
fs.stat('./event.js', (error, stats) =>{ if (error){
    console .log(error);
} else {
    // console .log(stats);
    // console .log(`文件: ${stats.isFile()}`);
    // console .log(`目录: ${stats.isDirectory()}` );
}
});
// 创建目录
fs.mkdir('logs', (error) => { if (error){
    // console .log(error);
} else {
    // console .log('成功创 建目录:logs' );
}
});
// 读取目录
fs.readdir('logs', (error, files) => {
    if (error) {
        console .log(error);
    } else {
        // console .log(files);
    }
});
// 写入文件
fs.writeFile('logs/hello.log', '您好 ~ \n', (error) => {
    if(error) {
        console .log(error);
    } else {
        // console .log('成功写入文件' );
    }
});
// 追加文件
fs.appendFile('logs/hello.log', 'hello ~ \n', (error) => { if(error) {
    console .log(error);
} else {
    // console .log('成功写入文件' ) ;
}
});
// 读取文件
fs.readFile('logs/hello.log', 'utf8', (error, data) =>{ if (error) {
    console .log(error);
} else {
    // console .log(data);
}
});
// 读取文件数据流
const fileReadStream = fs.createReadStream('./logs/data.json');
let count = 0;
let str = '';
// 开始
fileReadStream.on('data', (chunk) => {
    console.log(`数据数量:${ ++count } 字符串长度:${chunk.length}`);
    str += chunk;
});
// 结束
fileReadStream.on('end', () => {
    // console.log('--- 结束 ---');
    // console.log(count);
    // console.log(str);
});
// 失败
fileReadStream.on('error', (error) => {
    console .log(error);
});

// 写入文件数据流
const writerStream = fs.createWriteStream('./logs/input.txt');
// 写入99条数据
for (let i = 0; i<100; i++) {
    let saveDate = "我是要存储的数据";
    saveDate = saveDate + i;
    writerStream.write(saveDate ,'UTF8');
}
writerStream.end();
// 处理流事件  -->  finish事件
writerStream.on('finish', function() {
    /* finish - 所有数据已被写入到底层系统时触发。*/
    // console .log("写入完成");
});
writerStream.on('error', function(err){
    console.log(err.stack);
});
