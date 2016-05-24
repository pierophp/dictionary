var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../knexfile')[env];

var knex = require('knex')({
  client: config.client,
  connection: {
    host: config.connection.host,
    user: config.connection.user,
    password: config.connection.password,
    database: config.connection.database,
    charset: config.connection.charset
  }
});

var bookshelf =  require('bookshelf')(knex);

bookshelf.plugin('pagination');
bookshelf.plugin('registry');

module.exports = bookshelf;