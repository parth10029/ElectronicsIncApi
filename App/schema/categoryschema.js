const Sequelize = require('sequelize');
const {db} = require('../config/db');

const categoryschema = db.define('category', {
    id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    image:{
        type: Sequelize.STRING
    },
    is_active:{
        type:Sequelize.INTEGER,
        defaultValue: 1

    }
},{
        freezeTableName: true,
        tableName: 'category'
    }

);

// force: true will drop the table if it already exists
categoryschema.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});

module.exports = categoryschema;