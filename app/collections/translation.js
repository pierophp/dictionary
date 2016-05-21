
"use strict";

var Base  = require('./base'),
    Translation = require('../models/Translation'),
    Translations;

Translations = Base.Collection.extend({
    model: Translation,
    findAll: function(){
        return this.fetch();
    }
});

module.exports = Base.collection('Translations', Translations)
