var express = require('express');
var router = express.Router();
var  userController = require('../controllers/userControllers');

router.get('/',userController.get_user);
router.get('/test',userController.get_index);

module.exports = router;
