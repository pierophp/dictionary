'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

     //process.env.TZ = 'America/Sao_Paulo';
     
     console.log(process.env.TZ); 

    return queryInterface.bulkInsert('language', [{
      code: 'pt',
      name: 'Português',
      created_at: new Date()
    }, {
        code: 'tca',
        name: 'Ticuna',
        created_at: new Date()

      }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
