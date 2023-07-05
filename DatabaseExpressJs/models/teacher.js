const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('Teacher',{
    id : {
        type : Sequelize.INTEGER(10),
        primaryKey : true,
        allowNull : false
    },
    username : {
        type : Sequelize.STRING(15),
        allowNull : false
    },
    password : {
        type : Sequelize.STRING(15),
        allowNull : false
    }
})