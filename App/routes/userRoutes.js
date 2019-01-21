var express = require('express');
var router = express.Router();
const user=require('../controller/userController')


router.post('/addusers',user.addUser);
router.get('/loginusers/:name/:password',user.getUser);
router.patch('/updateusers/:id',user.updateUser);
router.delete('/deleteusers/:id',user.deleteUser);

module.exports = router;
