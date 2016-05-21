"use strict";

var bookshelf = require('../services').bookshelf,
    Translation;

Translation = bookshelf.Model.extend({
    tableName: 'translation',
    word: function() {
        return this.belongsTo(Word);
    },
    language: function() {
        return this.belongsTo(Language);
    }
});

module.exports = bookshelf.model('Translation', Translation);