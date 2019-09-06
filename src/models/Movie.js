"use strict";

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define("Movie", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    year: {
      type: DataTypes.INTEGER
    }
  });

  Movie.associate = models => {
    Movie.belongsToMany(models.Genre, {
      through: "movie_genre",
      as: "genres",
      foreignKey: "movieId"
    });
  };

  return Movie;
};
