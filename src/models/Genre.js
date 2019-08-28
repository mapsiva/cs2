'use strict'

module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define("Genre", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    Genre.associate =  (models) => {
        Genre.belongsToMany(models.Movie, {
           through: 'movie_genre',
           as : 'movies',
           foreignKey: 'genreId' 
        });
    }

    return Genre;
}