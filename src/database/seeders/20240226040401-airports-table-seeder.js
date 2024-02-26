'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const airports = JSON.parse(
      fs.readFileSync('./src/database/seeders/airports.json', 'utf8')
    );
    return queryInterface.bulkInsert('airports', airports, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('airports', null, {});
  },
};
