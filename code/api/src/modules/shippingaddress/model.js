'use strict'

// ShippingAddress
module.exports = function(sequelize, DataTypes) {
  let ShippingAddress = sequelize.define('shippingaddress', {
    userId: {
      type: DataTypes.INTEGER
    },
    street: {
      type: DataTypes.TEXT
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    }
  })

  ShippingAddress.associate = function(models) {
    ShippingAddress.belongsTo(models.User)
  }

  return ShippingAddress
}
