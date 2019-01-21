const Sequelize = require('sequelize');
const {db} = require('../config/db');
const cat = require('./categoryschema');

const sub_productschema = db.define('sub_product', {
    id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    cat_id:{
        type: Sequelize.BIGINT
    },
    created_at: {
        type: Date,
        default: function(){
            return Date.now();
        }
    },
    updated_at: {
        type: Date,
        default: function(){
            return Date.now();
        }
    }
});

noteSchema.belongsTo(cat, {foreignKey: 'cat_id'})

// force: true will drop the table if it already exists
sub_productschema.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});

module.exports = sub_productschema;