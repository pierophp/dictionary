var Model = require('objection').Model;

/**
 * @extends Model
 * @constructor
 */
function Language() {
  Model.apply(this, arguments);
}

Model.extend(Language);
module.exports = Language;

// Table name is the only required property.
Language.tableName = 'language';