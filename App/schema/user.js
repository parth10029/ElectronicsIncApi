const Sequelize = require('sequelize');
const {db} = require('../config/db');

const User = db.define('user_infos', {
    id:{
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
       },
    name: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    user_type: {
        type: Sequelize.ENUM('customer', 'vendor'),
    },
    password: {
        type: Sequelize.STRING
    },
    is_active:{
        type:Sequelize.INTEGER,
        defaultValue: 1

    }

},
    {
        indexes: [
            {
                unique: true,
                fields: ['email']
            }
        ]
    },
    {
        freezeTableName: true,
        tableName: 'user_infos'
    }
);

// force: true will drop the table if it already exists
User.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});


module.exports = User;
