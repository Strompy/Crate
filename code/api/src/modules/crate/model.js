'use strict'

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
  // establishes a one to many relationship between a crate and it's subscriptions
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}
