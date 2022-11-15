'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carnets', {
      IdCarnet: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NumeroCarnet: {
        type: Sequelize.STRING
      },
      FechaInscripcion: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      Inactive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carnets');
  }
};