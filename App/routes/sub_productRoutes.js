var express = require('express');
var router = express.Router();
const sub_product=require('../controller/sub_productController')
const upload=require('../config/multer');
let UPLOAD_PATH='image/subcatimage/';

router.post('/insertsubproduct',upload(UPLOAD_PATH).single('subcatimage'),sub_product.addsubproduct);
// router.post('/insertsubproduct',sub_product.addsubproduct);
router.get('/getsubproduct_byid/:id',sub_product.getsubproduct_byid);
router.patch('/updatesubproduct/:id',sub_product.updatesubproduct);
router.delete('/deletesubproduct/:id',sub_product.deletesubproduct);

module.exports = router;