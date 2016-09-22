/**
 * 用户模型
 */
var mysql = require('mysql');
var dbconfig = require("../config/database");

//使用连接池
var pool = mysql.createPool(dbconfig.mysql);

module.exports = {
    showUser : function(req,res,callback) {
        pool.getConnection(function(err, connection) {
            //定义查询语句
            var sql = "SELECT * FROM `users`";
            connection.query(sql,function(err,result) {
                result = JSON.stringify(result);
                callback(err,result);
                // 释放连接
                connection.release();
            })
        });
    },
    test:function() {
        return "hello world from test";
    }
}
