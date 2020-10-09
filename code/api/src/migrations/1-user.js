module.exports = {
  // 'up' action. What is run when file is migrated.
  up: (queryInterface, Sequelize) => {
    // name of migration specified as 'createTable'
    // adding or updating tables woudl require different names.
    // table named 'users' plurul relective of RoR conventions
    return queryInterface.createTable('users', {
      // id attribute is established as a primary auto increment key
      id: {
        // RoR has all of these specifications built into primary autoincrement keys.
        // interesting to see them spelled out one by one here.
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // specifies the datatype for id to be integer
        // built into RoR
        type: Sequelize.INTEGER
      },
      // establishing the name attribute is very similar to RoR
      // String must be explicitly stated, not inferred in JS
      name: {
        type: Sequelize.STRING
      },
      // this is where we could add attributes like image, description, and shipping address to the user model
      // those values should be established with a type, allowNull, and a default
      // allowNull should be true
      // default should be null/nil 
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      // timestamps are a little more spelled out, but work the same as in RoR
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // for every 'up' action there is an equal and oppposite down action.
  // built into RoR for 'rollback'
  down: (queryInterface, Sequelize) => {
    // in this case, down just drops the individual table.
    return queryInterface.dropTable('users');
  }
}

// migrations act as a template for how data should be added to the database
// specifying table name, attributes, and attribute type is reflective of RoR
