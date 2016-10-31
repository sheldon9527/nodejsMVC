var userModel = require('../models/userModels');
// var bcrypt = require('bcrypt');
// var jwt = require('jwt-simple');
var jwtauth = require('../middleware/jwtauth.js');

module.exports = {
    post_sign_up : function(req, res) {
        salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(req.body.password,salt);

        var createParam = {
            'username':req.body.username,
            'email':req.body.email,
            'password':password,
        }
        userModel.signup(createParam,function(){
            res.redirect('/users');
        });
    },

    sign_up : function(req, res) {
        res.render('auth/signup');
    },
    login : function(req, res) {
        res.render('auth/login');
    },
    post_login : function(req, res) {

        userModel.showByEmail(req,res,function(err,result) {

            password=req.body.password;
            userInfo =JSON.parse(result);

            if(!userInfo){
                res.redirect(404,'/auth/login');
            }

            bool = bcrypt.compareSync(password, userInfo[0]['password']);

            if(!bool){
                res.redirect(404,'/auth/login');
            }

            token = jwt.encode({user: userInfo}, 'sheldon');

            // res.json({token : token,expires: 1,user: userInfo});

             decoded = jwt.decode(token, 'sheldon');
             console.log(decoded);

            res.redirect('/');
        });
    },
    show : function(req, res) {
        var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];

        console.log(token);
        var arr;
        userModel.showUser(req,res,function(err,result) {
            arr =JSON.parse(result);
            res.render('show',{user :arr});
        });
    },

}
