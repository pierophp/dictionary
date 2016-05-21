"use strict";

var bookshelf = require('../services').bookshelf,
    TranslationWord;

TranslationWord = bookshelf.Model.extend({
    tableName: 'translation_word',
    word: function() {
        return this.belongsTo(Word);
    },
    translation: function() {
        return this.belongsTo(Translation);
    }
});

module.exports = bookshelf.model('TranslationWord', TranslationWord);