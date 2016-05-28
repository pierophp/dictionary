var Model = require('objection').Model;

/**
 * @extends Model
 * @constructor
 */
function Word() {
  Model.apply(this, arguments);
}

Model.extend(Word);
module.exports = Word;


// Table name is the only required property.
Word.tableName = 'word';

Word.relationMappings = {
  translations: {
    relation: Model.OneToManyRelation,
    // The related model. This can be either a Model subclass constructor or an
    // absolute file path to a module that exports one. We use the file path version
    // here to prevent require loops.
    modelClass: __dirname + '/Translation',
    join: {
      from: 'word.id',
      to: 'translation.word_id'
    }
  }
};
  