
exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('translation', function (table) {
        table.increments();
        table.text('observation');
        table.integer('word_id').notNullable().unsigned().index().references('word.id');
        table.integer('language_id').notNullable().unsigned().index().references('language.id');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
  
};
