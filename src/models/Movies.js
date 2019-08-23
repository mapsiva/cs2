const Sequelize = require ('sequelize');
const connection = require ('../connection');
const Genres = require ('./Genres');

const Model = Sequelize.Model;
class Movies extends Model { }

Movies.init({
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
    }
}, 
{
    name: {
        singular: 'movie',
        plural: 'movies'
    },
    sequelize : connection,
    modelName: 'movies'
});



Movies.belongsToMany(Genres, {
    through: 'movies_genres',
    foreignKey: 'movieId',
    
});

Genres.belongsToMany(Movies, {
    through: 'movies_genres',
    foreignKey: 'genreId',
    sourceKey: 'id'
});

module.exports = Movies;