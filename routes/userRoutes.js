var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers');

router.get('/',userController.get_user);
router.put('/:id',userController.put_user);
router.get('/:id',userController.get_one_user);


module.exports = router;
