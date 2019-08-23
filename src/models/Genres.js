const Sequelize = require ('sequelize');
const connection = require ('../connection');
const Movies = require ('./Movies');

const Model = Sequelize.Model;
class Genres extends Model { }

Genres.init({
    id : {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    name: {
        singular: 'genre',
        plural: 'genres'
    },
    sequelize : connection,
    modelName: 'genres'
});



module.exports = Genres;