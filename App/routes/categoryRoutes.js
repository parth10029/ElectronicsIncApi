var express = require('express');
var router = express.Router();
const cat=require('../controller/categoryController');
const upload=require('../config/multer');
let UPLOAD_PATH='image/categoryImage/';

router.post('/insertcat',upload(UPLOAD_PATH).single('catimage'),cat.uploadCategory);
router.get('/getcat/:id',cat.getcat);
router.get('/getallcat',cat.getallcat);
router.patch('/updatecat/:id',cat.updatecat);
router.delete('/deletecat/:id',cat.deletecat);

module.exports = router;