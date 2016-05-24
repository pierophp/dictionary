
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('word').del(),

    // Inserir IDIOMA 01
    knex('word').insert({text: 'Nome', type: 'W', language_id: 1}),
    knex('word').insert({text: 'Jeová', type: 'W', language_id: 1}),
    knex('word').insert({text: 'Jesus', type: 'W', language_id: 1}),
    knex('word').insert({text: 'Telefone', type: 'W', language_id: 1}),
    
    knex('word').insert({text: 'Name', type: 'W', language_id: 2}),
    knex('word').insert({text: 'Jehova', type: 'W', language_id: 2}),
    knex('word').insert({text: 'Jesus', type: 'W', language_id: 2}),
    knex('word').insert({text: 'Phone', type: 'W', language_id: 2})
  );
};
