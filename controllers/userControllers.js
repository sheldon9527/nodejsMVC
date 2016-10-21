var  userModel = require('../models/userModels');

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

        var createParam = {
            'username':req.body.username,
            'email':req.body.email,
        }
        userModel.createUser(createParam,function(){
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
        });
    },
}
