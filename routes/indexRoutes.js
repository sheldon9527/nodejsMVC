var express = require('express');
var router = express.Router();
var  indexController = require('../controllers/indexControllers');

router.get('/',indexController.get_index);

module.exports = router;
