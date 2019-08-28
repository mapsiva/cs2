'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable ('movie_genre', {
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'movies',
          key: 'id'
        }
      },
      genre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'genres',
          key: 'id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movie_genre');
  }
};
