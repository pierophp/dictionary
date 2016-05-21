
exports.up = function(knex, Promise) {
  return knex.schema.createTable('translation_word', function (table) {
        table.increments();
        table.integer('priority');
        table.integer('translation_id').notNullable().unsigned().index().references('translation.id');
        table.integer('word_id').notNullable().unsigned().index().references('word.id');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
  
};
