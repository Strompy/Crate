'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    // we will add numerous fields for the user:
    // image
      // DataTypes.string
    // shipping address
      // DataTypes.string
    // description
      // DataTypes.TEXT
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })
  // We will build upon the users relationships--
  // perhaps connecting them to something like Orders in a one to many relationship
  // much like the user is connected to subscriptions in a one to many here.
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
