var express = require('express');
var router = express.Router();
var jwtauth = require('./middleware/jwtauth.js');
var indexController = require('./controllers/indexControllers');
var authController = require('./controllers/authControllers');
var userController = require('./controllers/userControllers');
//主页
router.get('/',indexController.get_index);

//登录
router.get('/auth/signup',authController.sign_up);
router.post('/auth/signup',authController.post_sign_up);
router.get('/auth/login',authController.login);
router.post('/auth/login',authController.post_login);
router.get('/auth/show',authController.show);

//users 增删改查
router.get('/users',userController.get_user);
router.get('/users/:id',userController.get_one_user);
router.put('/users/:id',userController.put_user);
router.get('/users/create/add',userController.post_create_user);
router.get('/users/:id/edit',userController.get_edit_user);
router.delete('/users/:id',userController.delete_user);
router.post('/users',userController.post_user);

module.exports = router;
