const product=require('../schema/productschema');

exports.addproduct = (req, res) => {
    if(res) {
        const {body:{product_name,image,sub_product_id,price,detail,created_by,deleted_by,updated_by}} = req;
        let newproduct= {
            product_name: product_name,
            image: req.file && req.file.filename,
            price,
            detail,
            sub_product_id,
            created_by,
            deleted_by,
            updated_by,
        };
        product.create(newproduct)
            .then((product) => res.send({product}))
            .catch((error) => {
                console.log("error")
                return res.status(500).send(error)
            });
    }
};

exports.getproduct = (req,res) => {
    product.findOne({
        where:{
            product_name:req.body.product_name,
            is_active:1
        }
    })
        .then((result) => {
            if(!result){
                res.status(404).send( "product does not exist")
            }else{
                res.status(200).send(result)
            }
        }).catch((err) => {
        res.send("hello")
    })
};

exports.updateproduct=(req,res)=>{
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

exports.deleteproduct = (req,res) => {
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


// exports.deleteproduct=(req,res)=>{
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