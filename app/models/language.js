"use strict";

var bookshelf = require('../services').bookshelf,
    Language;

Language = bookshelf.Model.extend({
    tableName: 'language'
});

module.exports = bookshelf.model('Language', Language);