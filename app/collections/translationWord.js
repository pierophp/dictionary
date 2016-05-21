
"use strict";

var Base  = require('./base'),
    TranslationWord = require('../models/TranslationWord'),
    TranslationWords;

TranslationWords = Base.Collection.extend({
    model: TranslationWord,
    findAll: function(){
        return this.fetch();
    }
});

module.exports = Base.collection('TranslationWords', TranslationWords)
