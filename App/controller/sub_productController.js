const subproduct=require('../schema/sub_productschema');

exports.addsubproduct = (req, res) => {
    subproduct.create(req.body)
        .then((data) =>{
            res.send(data);
        }).catch((err)=>{
        res.send(err)
    })
};

exports.getsubproduct = (req,res) => {
    subproduct.findOne({
        where:{
            product_name:req.body.product_name,
            is_active:1
        }
    })
        .then((result) => {
            if(!result){
                res.status(404).send( "product does not exist")
            }else{
                res.status(200).send( "product exist")
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