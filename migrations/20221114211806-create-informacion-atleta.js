'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InformacionAtleta', {
      IdInformacionAtleta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      Nombres: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Apellidos: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Cedula: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Apodo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Telefono: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Direccion: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      Email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      Ciudad: {
        allowNull: true,
        type: Sequelize.STRING
      },
      IdSocial: {
        type: Sequelize.INTEGER
      },
      Inactive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InformacionAtleta');
  }
};