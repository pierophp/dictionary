
exports.up = function(knex, Promise) {
 
  return knex.schema.createTable('word', function (table) {
        table.increments();
        table.string('text');
        table.string('type', 1);
        table.integer('language_id').notNullable().unsigned().index().references('language.id');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
  
};
