'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comprobantes', {
      IdComprobante: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IdAtleta: {
        type: Sequelize.INTEGER
      },
      RutaArchivoComprobant: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Comprobantes');
  }
};