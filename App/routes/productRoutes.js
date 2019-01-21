var express = require('express');
var router = express.Router();
const product=require('../controller/productController')

router.post('/insertproduct',product.addproduct);
router.post('/getproduct',product.getproduct);
router.patch('/updateprduct/:id',product.updateproduct);
router.delete('/deleteproduct/:id',product.deleteproduct);

module.exports = router;