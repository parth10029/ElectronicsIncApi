const subproduct=require('../schema/sub_productschema');

exports.addsubproduct = (req, res) => {
    if(res) {
        const {body:{name,image,cat_id}} = req;
        let newsubCategory= {
            name,
            image: req.file && req.file.filename,
            cat_id,
        };
        subproduct.create(newsubCategory)
            .then((sub_product) => res.send({sub_product}))
            .catch((error) => {
                console.log("error")
                return res.status(500).send(error)
            });
    }
};

exports.getsubproduct_byid = (req,res) => {
    subproduct.findAll(
        {
        where:{
            cat_id:req.params.id,
        }
    }
    )
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

exports.updatesubproduct=(req,res)=>{
    subproduct.update(req.body,{where:{id:req.params.id}})
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

exports.deletesubproduct = (req,res) => {
    subproduct.findById(req.params.id)
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


// exports.deletesubproduct=(req,res)=>{
//     subproduct.destroy({where:{id:req.params.id}})
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