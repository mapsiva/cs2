'use strict';
const faker = require ('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    console.log ('up');

    let fakeUsers = [];

    for (let i = 0; i < 10; i++){
      fakeUsers.push ({
        name: faker.name.findName(),
        email: faker.internet.email (),
        password: faker.internet.password()
      });
    }
    console.log (fakeUsers);
    return queryInterface.bulkInsert('users', fakeUsers, {});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
