const product=require('../schema/categoryschema');

    exports.uploadCategory = (req, res) => {
        if(res) {
            const {body:{name,image}} = req;
            let newCategory= {
                name,
                image: req.file && req.file.filename,
            };
            product.create(newCategory)
                .then((category) => res.send({category}))
                .catch((error) => {
                    console.log(error)
                    return res.status(500).send(error)
                });
        }
    };

exports.getallcat = (req,res) => {
    product.findAll({
        where:{
            is_active:1
        }
    })
        .then((result) => {
            if(!result){
                res.status(404).send( "category does not exist")
            }else{
                res.status(200).send(result)
            }
        }).catch((err) => {
        res.send("hello")
    })
};

exports.getcat = (req,res) => {
    product.findOne({
        where:{
            id:req.params.id,
            is_active:1
        }
    })
        .then((result) => {
            if(!result){
                res.status(404).send( "category does not exist")
            }else{
                res.status(200).send(result)
            }
        }).catch((err) => {
        res.send("hello")
    })
};

exports.updatecat=(req,res)=>{
    product.update(req.body,{where:{id:req.params.id}})
        .then((data) =>{
            if(data){
                res.send('data updated successfully')
            }else{
                res.send('Problem in updating data')
            }
        }).catch((err)=>{
        console.log('Error in updating data : ',err)
    });
};

exports.deletecat = (req,res) => {
    product.findById(req.params.id)
        .then((result) => {
            if((result===null) || (result.is_active===0)){
                res.status(404).send( "Users not exist")
            }else{
                result.update({is_active:0},{where:{id:req.params.id}})
                    .then((data)=>{
                        res.status(200).send( "Users deleted")
                    }).catch((error)=>{
                    res.status(500).send("error")
                })
            }
        }).catch((err) => {
        res.send("hello")
    })
}


// exports.deletecat=(req,res)=>{
//     product.destroy({where:{id:req.params.id}})
//         .then((data) =>{
//             if(data){
//                 res.send('data deleted successfully')
//             }else{
//                 res.send('Problem in deleting data')
//             }
//         }).catch((err)=>{
//         console.log('Error in deleting data : ',err)
//     });
// };