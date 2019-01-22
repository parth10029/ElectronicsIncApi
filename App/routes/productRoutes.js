var express = require('express');
var router = express.Router();
const product=require('../controller/productController')
const upload=require('../config/multer');
let UPLOAD_PATH='image/productimage/';

router.post('/insertproduct',upload(UPLOAD_PATH).single('productimage'),product.addproduct);
//router.post('/insertproduct',product.addproduct);
router.post('/getproduct',product.getproduct);
router.patch('/updateprduct/:id',product.updateproduct);
router.delete('/deleteproduct/:id',product.deleteproduct);

module.exports = router;