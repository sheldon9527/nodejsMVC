var  userModel = require('../models/userModels');

module.exports = {

    get_user : function(req, res) {
        var arr;
        userModel.showUser(req,res,function(err,result) {
            arr =JSON.parse(result);
            res.render('users',{user :arr});
        });
    },

    post_user : function(req, res) {

        var id = req.body.id;

        var updateParam = {
            'username':req.body.username,
            'email':req.body.email,
        }

        userModel.updateUser(id,updateParam,function(){
            res.redirect('/users');
        });
    },
}
