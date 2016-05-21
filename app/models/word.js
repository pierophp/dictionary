"use strict";

var bookshelf = require('../services').bookshelf,
    Word;

Word = bookshelf.Model.extend({
    tableName: 'word',
    language: function() {
        return this.belongsTo(Language);
    }
});

module.exports = bookshelf.model('Word', Word);