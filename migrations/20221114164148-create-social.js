'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('socials', {
      IdSocial: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Facebook: {
        type: Sequelize.STRING
      },
      Whatsapp: {
        type: Sequelize.STRING
      },
      Instagram: {
        type: Sequelize.STRING
      },
      Twitter: {
        type: Sequelize.STRING
      },
      Inactive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('socials');
  }
};