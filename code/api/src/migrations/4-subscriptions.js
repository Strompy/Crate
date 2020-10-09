module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subscriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // foreign key alternate table connections
      // subsciptions 'belong to' a user, users 'have many' subscriptions
      // naming conventional (camel case) but principally the same as RoR
      userId: {
        // explicitly specifies integer value
        type: Sequelize.INTEGER,
        // demonstrates reference to a specific model and key
        // more granular control than RoR
        references: {
          model: 'users',
          key: 'id'
        },
        allowNull: false
      },
      // one to many -- crate to subscriptions
      crateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'crates',
          key: 'id'
        },
        allowNull: false
      },
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('subscriptions');
  }
}

// more relationships might need to be added to subscriptions depending on how deliveries are handled
// strong reminicience to RoR shouldnt make forming relational DB tables too hard
