var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers');

router.get('/',userController.get_user);
router.get('/:id',userController.get_one_user);
router.put('/:id',userController.put_user);
router.get('/create/add',userController.post_create_user);
router.get('/:id/edit',userController.get_edit_user);
router.delete('/:id',userController.delete_user);
router.post('/',userController.post_user);


module.exports = router;
