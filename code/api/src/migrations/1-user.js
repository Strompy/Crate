module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      // Create 'users' table with id, name, email, password, role columns
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        // id autoincrements and is an integer
      },
      name: {
        type: Sequelize.STRING
        // Name and other params are STRINGs or TEXTs
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      // Here we can add image, description, shipping address as columns
      // These will be necessary ofr the user profile
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
    // Down sets our table removal
  }
}
