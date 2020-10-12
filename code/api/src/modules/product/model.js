'use strict'
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

// Creates model for Product
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      // A slug is the last part of the url containing a unique string which identifies the resource being served by the web service. In that sense, a slug is a unique identifier for the resource.
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })
}
