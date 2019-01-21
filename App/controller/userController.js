const User=require('../schema/user');

exports.addUser = (req, res) => {
    User.create(req.body)
        .then((data) =>{
            res.send(data);
        }).catch((err)=>{
        res.send(err)
    })
};

exports.getUser = (req,res) => {
    console.log(req.params.name)
    User.findOne({
         where:{
             username:req.params.name,
             password:req.params.password,
             is_active:1
         }
    })
        .then((result) => {
            console.log({result})
            if(!result){
                res.status(404).send( "Users not exist")
            }else{
                res.status(200).send(result)
            }
        }).catch((err) => {
        res.send("hello")
    })
};

exports.updateUser=(req,res)=>{
    User.update(req.body,{where:{id:req.params.id}})
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

exports.deleteUser = (req,res) => {
    User.findById(req.params.id)
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

// exports.deleteUser=(req,res)=>{
//     User.destroy({where:{id:req.params.id}})
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