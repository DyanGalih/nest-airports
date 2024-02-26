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
    return queryInterface.createTable('airports', {
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
        type: Sequelize.DOUBLE(16, 10),
        allowNull: false,
        defaultValue: 0,
      },
      elevation_ft: {
        type: Sequelize.INTEGER,
      },
      continent: {
        type: Sequelize.STRING(5),
      },
      iso_country: {
        type: Sequelize.STRING(5),
      },
      iso_region: {
        type: Sequelize.STRING(10),
      },
      municipality: {
        type: Sequelize.STRING(75),
      },
      scheduled_service: {
        type: Sequelize.STRING(5),
      },
      gps_code: {
        type: Sequelize.STRING(5),
      },
      iata_code: {
        type: Sequelize.STRING(5),
      },
      local_code: {
        type: Sequelize.STRING(20),
      },
      home_link: {
        type: Sequelize.STRING(),
      },
      wikipedia_link: {
        type: Sequelize.STRING(),
      },
      keywords: {
        type: Sequelize.TEXT(),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('airports');
  },
};
