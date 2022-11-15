'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Atleta', {
      IdAtleta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IdCarnet: {
        type: Sequelize.INTEGER
      },
      IdInformacionAtleta: {
        type: Sequelize.INTEGER
      },
      Nacionalidad: {
        type: Sequelize.STRING
      },
      Estatura: {
        type: Sequelize.STRING
      },
      GimnasioPracticante: {
        type: Sequelize.STRING
      },
      NombreEntrenador: {
        type: Sequelize.STRING
      },
      CategoriaCompite: {
        type: Sequelize.STRING
      },
      PesoCorporal: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Atleta');
  }
};