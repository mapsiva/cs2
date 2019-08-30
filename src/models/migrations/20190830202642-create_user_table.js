'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable ('users', {
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
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            isEmail: true
          },
          unique: {
            name: 'users_email', // Nome do indice
            msg: 'Ops, this email already exists...',
          },
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
