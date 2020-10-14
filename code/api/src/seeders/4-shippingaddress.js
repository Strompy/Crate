'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('shippingaddress', [
      {
        userId: '2',
        street: '123 Chocolate St.',
        city: 'Denver',
        state: 'CO',
        zip: '80401',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '1',
        street: '123 Cotton Candy Lane',
        city: 'Salt Lake City',
        state: 'UT',
        zip: '84111',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('shippingaddress', null, {});
  }
}
