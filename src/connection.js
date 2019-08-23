const Sequelize = require ('sequelize');
const sequelize = new Sequelize('mysql://marcio:1234567@200.129.206.105:313/movies');

module.exports = sequelize;
