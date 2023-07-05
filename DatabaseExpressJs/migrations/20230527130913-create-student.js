'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('students', {



      id: {

        type: Sequelize.INTEGER(10),

        primaryKey: true,

        allowNull: false

      },



      username: {

        type: Sequelize.STRING(15),

        allowNull : false

      },

      password: {

        type: Sequelize.STRING(15),

        allowNull : false

      },

      createdAT: Sequelize.DATE,

      updatedAt: Sequelize.DATE



    });
    
  },

  async down (queryInterface, Sequelize) {
    return  queryInterface.dropTable('students');    
  }
};
