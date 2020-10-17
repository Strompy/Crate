'use strict'

// CrateProduct
module.exports = function(sequelize, DataTypes) {
  let CrateProduct = sequelize.define('crateProducts', {
    crateId: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    }
  })

  CrateProduct.associate = function(models) {
    CrateProduct.belongsTo(models.Crate)
    CrateProduct.belongsTo(models.Product)
  }

  return CrateProduct
}
