'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
    'users',
    'bio',
      {
      type: Sequelize.TEXT,
      allowNull: true,
      defaultValue: null
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'bio');
  }
};
