// connector.js
var mysql = require('mysql');
var conf = require('./config')['ONLINE'];

var pool = mysql.createPool(conf);

var query = function(sql, param, callback) {
    pool.query(sql, param, callback);
    // console.log(result);
    // pool.getConnection(function(err, conn) {
    //     if (err) {
    //         callback(err, null, null);
    //     } else {
    //         var r = conn.query(sql, param, function(qerr, result, fields) {
    //             //释放连接
    //             conn.release();
    //             //事件驱动回调
    //             callback(qerr, result, fields);
    //         });
    //         console.log(r);
    //     }
    // });
};

var sql = require('../db/sql.js')['RESTAURANT']
query(sql['query'], ['1'], function(err, result, fields){
    console.log(result);
});

module.exports = query;