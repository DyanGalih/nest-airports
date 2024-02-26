'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('user_statuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      ident: {
        type: Sequelize.STRING(10),
        unique: true,
      },
      type: {
        type: Sequelize.STRING(20),
      },
      name: {
        type: Sequelize.STRING(175),
      },
      latitude_deg: {
        type: Sequelize.DOUBLE(16, 10),
        allowNull: false,
        defaultValue: 0,
      },
      longitude_deg: {

      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
