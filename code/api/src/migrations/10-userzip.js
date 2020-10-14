'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
    'users',
    'zip',
      {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'zip');
  }
};
