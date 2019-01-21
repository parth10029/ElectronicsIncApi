const Sequelize = require('sequelize');
const {db} = require('../config/db');
const sub_product = require('./sub_productschema');
const user_id = require('./user');

const Productschema = db.define('product_info', {
    id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    product_name: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    detail:{
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.NUMERIC
    },
    sub_product_id:{
        type: Sequelize.INTEGER,
    },
    is_active:{
        type:Sequelize.INTEGER,
        defaultValue: 1
    },
    created_by: {
        type: Date,
        default: function(){
            return Date.now();
        }
    },
    updated_by: {
        type: Date,
        default: function(){
            return Date.now();
        }
    },
    deleted_by: {
        type: Date,
        default: function(){
            return Date.now();
        }
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
noteSchema.belongsTo(sub_product, {foreignKey: 'sub_product_id'})
noteSchema.belongsTo(user_id, {foreignKey: 'created_by'})
noteSchema.belongsTo(user_id, {foreignKey: 'updated_by'})
noteSchema.belongsTo(user_id, {foreignKey: 'deleted_by'})

// force: true will drop the table if it already exists
Productschema.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});

module.exports = Productschema;