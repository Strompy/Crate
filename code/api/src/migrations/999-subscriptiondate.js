'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
    'subscriptions',
    'date',
      {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('subscriptions', 'date');
  }
};
