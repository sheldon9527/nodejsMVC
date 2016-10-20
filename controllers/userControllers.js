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
        console.log(updateParam);
        userModel.updateUser(id,updateParam,function(){
            res.redirect('/users/'+id);
        });
    },
}
