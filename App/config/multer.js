var multer = require('multer');
//var upload = multer({ dest: 'CategoryImages/' })

const storage = storageDest =>multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, storageDest)
    },
    filename: function (req, file, cb) {
        let extArray = file.originalname.split(".");
        let extension = extArray[extArray.length - 1];
//console.log(file);
        cb(null, Date.now()+ '.' +extension)
    }
});
//image/categoryImage/1547897766397.jpeg",
const upload = storageDest=>multer({ storage: storage(storageDest) });

module.exports = upload;