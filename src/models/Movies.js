const Sequelize = require ('sequelize');
const connection = require ('../connection');

const Model = Sequelize.Model;
class Movies extends Model { }

Movies.init({
    
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER
    }
}, {
    sequelize : connection,
    modelName: 'movies'
});

module.exports = Movies;