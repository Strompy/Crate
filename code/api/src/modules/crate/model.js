'use strict'
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

// Creates model for Crate
module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    // Crate is based on the DB crates table
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  Crate.associate = function(models) {
    // creates relationships
    Crate.hasMany(models.Subscription)
    // crate has many subscriptions
  }

  return Crate
}
