const Sequelize = require('sequelize');

const sequelize = new Sequelize("resultapp", "root","root",
                {   host:"db-demo.ccuwym5kqktu.eu-north-1.rds.amazonaws.com", 
                    dialect: "mysql",
                    //operatorsAliases : false
                });

module.exports = sequelize;

// global var sequelize , so no need to import it everywhere
global.sequelize = sequelize;