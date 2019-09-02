'use strict';
const faker = require ('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {


    let fakeUsers = [];

    for (let i = 0; i < 10; i++){
      fakeUsers.push ({
        name: faker.name.findName(),
        email: faker.internet.email (),
        password_hash: faker.internet.password()
      });
    }
    console.log (fakeUsers);
    return queryInterface.bulkInsert('users', fakeUsers, {});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
