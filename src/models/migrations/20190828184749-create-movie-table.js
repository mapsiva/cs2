'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable ('movies', {
      id : {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      year: {
          type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies');
  }
};
