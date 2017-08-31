// connector.js
var mysql = require('mysql');

var pool = mysql.createPool({
	host : '43.248.96.156',
	user : 'root',
	password : '123456',
	port : '3306',
	database: 'iwannaeat',
});

var query = function(sql, param, callback) {
    pool.query(sql, param, function(err, result, fields) {
        console.log(result);
        callback(err, result, fields);
    });
    // pool.getConnection(function(err, conn) {
    //     if (err) {
    //         callback(err, null, null);
    //     } else {
    //         conn.query(sql, param, function(qerr, result, fields) {
    //             //释放连接
    //             conn.release();
    //             console.log(result);
    //             //事件驱动回调
    //             callback(qerr, result, fields);
    //         });
    //     }
    // });
};

var sql = require('../db/sql.js')['RESTAURANT']
query(sql['query'], ['123'], function(err, result, fields) {
    console.log('result: ' , 123);
});

module.exports = query;