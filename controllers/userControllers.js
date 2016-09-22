var  userModel = require('../models/userModels');

module.exports = {

    get_index : function(req, res) {
        var msg = userModel.test();
        console.log(msg);
        res.render('test',{msg: msg});
    },

    get_user : function(req, res) {
        var arr;
        userModel.showUser(req,res,function(err,result) {
            arr =JSON.parse(result);
            res.render('users',{user :arr});
        });
    }
}
