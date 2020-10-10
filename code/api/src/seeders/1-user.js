'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'The Admin',
        email: 'admin@crate.com',
        // shipping address muct be added.
          // image and description can be optional adds.
          // having at least one user who has an image and description,
          // and one that needs to add those fields would be good
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.admin,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The User',
        email: 'user@crate.com',
        // shipping address must be added. 
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.user,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
