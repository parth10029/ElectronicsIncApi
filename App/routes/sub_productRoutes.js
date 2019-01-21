var express = require('express');
var router = express.Router();
const sub_product=require('../controller/sub_productController')

router.post('/insertsubproduct',sub_product.addsubproduct);
router.post('/getsubproduct',sub_product.getsubproduct);
router.patch('/updatesubproduct/:id',sub_product.updatesubproduct);
router.delete('/deletesubproduct/:id',sub_product.deletesubproduct);

module.exports = router;