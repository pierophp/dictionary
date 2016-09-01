var Model = require('objection').Model;

/**
 * @extends Model
 * @constructor
 */
function TranslationWord() {
  Model.apply(this, arguments);
}

Model.extend(TranslationWord);
module.exports = TranslationWord;


// Table name is the only required property.
TranslationWord.tableName = 'translation_word';
TranslationWord.relationMappings = {
  word: {
    relation: Model.OneToOneRelation,
    modelClass: __dirname + '/Word',
    join: {
      from: 'translation_word.word_id',
      to: 'word.id'
    }
  }  
};

