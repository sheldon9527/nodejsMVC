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
    showOneUser : function(req,res,callback) {
        pool.getConnection(function(err, connection) {
            //定义查询语句
            var sql = 'SELECT * FROM `users` WHERE id="'+req.param('id')+'"';
            connection.query(sql,function(err,result) {
                result = JSON.stringify(result);
                callback(err,result);
                // 释放连接
                connection.release();
            })
        });
    },
    updateUser : function (id,updateParam,callback) {
        pool.getConnection(function(err, connection) {
            //定义查询语句
            var sql = 'UPDATE `users` SET username="'+updateParam['username']+'", email="'+updateParam['email']+'" WHERE id="'+id+'" ;';
            connection.query(sql,function(err,result) {
                callback(err,result);
                // 释放连接
                connection.release();
            })
        });
    },
    createUser : function (createParam,callback) {
        pool.getConnection(function(err, connection) {
            //定义查询语句
            var sql = 'INSERT INTO `users` SET username="'+createParam['username']+'", password="123456", email="'+createParam['email']+'" ;';
            console.log(sql);
            connection.query(sql,function(err,result) {
                callback(err,result);
                // 释放连接
                connection.release();
            })
        });
    },
}
