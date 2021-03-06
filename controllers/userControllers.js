var  userModel = require('../models/userModels');
var  redis = require("redis");
var  bcrypt = require('bcryptjs');
var  redisConfig = require('../config/redis');

module.exports = {

    get_user : function(req, res) {
        var arr;
        userModel.showUser(req,res,function(err,result) {
            arr =JSON.parse(result);
            res.render('users',{user :arr});
        });
    },
    get_one_user : function(req, res) {
        var arr;
        userModel.showOneUser(req,res,function(err,result) {
            arr =JSON.parse(result);
            res.render('show',{user :arr});
        });
    },
    put_user : function(req, res) {
        var id = req.param('id');

        var updateParam = {
            'username':req.body.username,
            'email':req.body.email,
        }

        userModel.updateUser(id,updateParam,function(){
            res.redirect('/users/'+id);
        });
    },
    post_user : function(req, res) {

        salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(req.body.password,salt);
        var createParam = {
            'username':req.body.username,
            'email':req.body.email,
            'password':password,
        }
        //redis
        client = redis.createClient(redis.redisConfig);
        //判断连接
        client.on("error", function (err) {
            console.log("Error " + err);
        });

        //redis
        client.set("username", req.body.username);
        client.set("email", req.body.email);
        client.get("username", function(err, username) {
            // console.log(username);
        });
        client.get("email", function(err, email) {
            // console.log(email);
        });

        client.end(true);

        userModel.createUser(createParam,function(err){

            res.redirect('/users');
        });

    },
    post_create_user : function(req, res) {
        res.render('create');
    },
    get_edit_user : function(req, res) {
        var arr;
        userModel.showOneUser(req,res,function(err,result) {
            arr =JSON.parse(result);
            res.render('edit',{user :arr});
        });
    },
    delete_user : function(req, res) {
        var id = req.body.id;
        userModel.deleteUser(id,function(){
            res.redirect(200,'/users');
        });
    },
}
