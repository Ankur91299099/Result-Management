const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('Result',{
    roll_no : {
        type : Sequelize.INTEGER(10),
        primaryKey : true,
        allowNull : false
    },
    name : {
        type : Sequelize.STRING(15),
        allowNull : false
    },
    date_of_birth : {
        type : Sequelize.DATEONLY,
        allowNull : false
    },
    score : {
        type : Sequelize.INTEGER(3),
        allowNull : false
    }
})