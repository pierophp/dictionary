
"use strict";

var Base  = require('./base'),
    Word = require('../models/word'),
    Words;

Words = Base.Collection.extend({
    model: Word,
    findAll: function(){
        return this.fetch();
    },
    findByLanguage: function (language) {
        return this.where({language: language.get('id')}).fetch();
    }
});

module.exports = Base.collection('Words', Words)
