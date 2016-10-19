var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers');

router.get('/',userController.get_user);
router.post('/',userController.post_user);


module.exports = router;
