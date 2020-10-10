'use strict';
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

const bcrypt = require('bcrypt');
// Used to hash stored passwords
const config = require('../config/server.json');
// Used here for saltrounds
const params = require('../config/params.json');
// Used here to get user roles

module.exports = {
  up: (queryInterface, Sequelize) => {
    // queryInterface is a Sequelize function used to interface with the DB
    return queryInterface.bulkInsert('users', [
      {
        name: 'The Admin',
        email: 'admin@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        // saltrounds = 10. something with the hash calculation being done 2^10 times
        role: params.user.roles.admin,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The User',
        email: 'user@crate.com',
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
