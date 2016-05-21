
exports.up = function(knex, Promise) {
  return knex.schema.createTable('word', function (table) {
        table.increments();
        table.string('text');
        table.string('type');
        table.integer('language_id');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
  
};
