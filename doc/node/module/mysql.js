// var sql = "SELECT * FROM ?? WHERE ?? = ?";
// var inserts = ['users', 'id', userId];
// sql = mysql.format(sql, inserts);

// 封装DB数据库
const db    = {};
const mysql = require('mysql');
const pool  = mysql.createPool({
        connectionLimit : 10,
        host            : 'localhost',
        port            : 8889,
        user            : 'root',
        password        : 'root',
        database        : 'myDB'
});
db.query = function(sql, callback){
    if (!sql) {
        callback();
        return;
    }
    pool.query(sql, function(err, rows, fields) {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        }

        callback(null, rows, fields);
    });
};
// 直接读取数据
module.exports = db;
// 链接mysql
module.exports = pool;

// 实例化db
// let db = require('./module/mysql.js');

// let sql = 'SELECT * from MyGuests';
// // 查询数据库语句
// // db._conection.query(sql, (error, results, fields)=>{
// //     if (error) throw error;
// //     console.log(results);
// // });

// // insert data 需要提交到数据库的数据
// let post  = {firstname: 'JACK',lastname: 'jones',email: 'qq.com', reg_date: '2018'};
// // 写入数据库的语句
// db._conection.query('INSERT INTO MyGuests SET ?', post,(error, results, fields) => {
//     if (error) throw error;
//     // Neat!
//     console.log(results);
// });

// // 数据库链接结束
// db._conection.end();




// 原始链接方法
// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//     host     : 'localhost',
//     port     : '8889',
//     user     : 'root',
//     password : 'root',
//     database : 'myDB'
// });
//
// // 链接
// connection.connect();
// // 查询
// connection.query('SELECT * FROM MyGuests', function (error, results, fields) {
//     if (error) throw error;
//     // connected!
//     console.log(results);
//     // fields  == 查询到的数据信息简介
//     console.log(fields);
// });
// // 结束链接
// connection.end();


