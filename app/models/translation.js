var Model = require('objection').Model;

/**
 * @extends Model
 * @constructor
 */
function Translation() {
  Model.apply(this, arguments);
}

Model.extend(Translation);
module.exports = Translation;


// Table name is the only required property.
Translation.tableName = 'translation';

Translation.relationMappings = {
  translationWords: {
    relation: Model.OneToManyRelation,
    // The related model. This can be either a Model subclass constructor or an
    // absolute file path to a module that exports one. We use the file path version
    // here to prevent require loops.
    modelClass: __dirname + '/TranslationWord',
    join: {
      from: 'translation.id',
      to: 'translation_word.translation_id'
    }
  }
};
  