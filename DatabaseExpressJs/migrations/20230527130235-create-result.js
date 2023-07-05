'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('results', {



      roll_no: {

        type: Sequelize.INTEGER(10),

        primaryKey: true,

        allowNull: false

      },



      name: {

        type: Sequelize.STRING(15),

        allowNull : false

      },



      date_of_birth: {

        type: Sequelize.DATEONLY,

        allowNull : false

      },



      score: {

        type: Sequelize.INTEGER(3),

        allowNull : false

      },



      createdAT: Sequelize.DATE,

      updatedAt: Sequelize.DATE



    });

  },

  async down (queryInterface, Sequelize) {
    return  queryInterface.dropTable('results');
  }
};
