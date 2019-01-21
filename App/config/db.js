const Sequelize = require('sequelize');

const db= new Sequelize('mydb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    port: 8080,
});

module.exports = {db};