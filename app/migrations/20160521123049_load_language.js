
exports.up = function (knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('language').del(),

        knex('language').insert(
            { code: 'pt', name: 'Português', created_at: new Date() }
        ),

        knex('language').insert(
            { code: 'tca', name: 'Ticuna', created_at: new Date() }
        )
    );
};

exports.down = function (knex, Promise) {

};
