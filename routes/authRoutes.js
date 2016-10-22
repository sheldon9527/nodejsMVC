var express = require('express');
var router = express.Router();
var authController = require('../controllers/authControllers');
var jwtauth = require('../middleware/jwtauth.js');

router.get('/signup',authController.sign_up);
router.post('/signup',authController.post_sign_up);

router.get('/login',authController.login);
router.post('/login',authController.post_login);

router.get('/show',authController.show);

module.exports = router;
