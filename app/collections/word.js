
"use strict";

var Base  = require('./base'),
    Word = require('../models/word'),
    Words;

Words = Base.Collection.extend({
    model: Word,
    findAll: function(){
        return this.fetch();
    }
});

module.exports = Base.collection('Words', Words)
