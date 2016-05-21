"use strict";

var Base  = require('./base'),
    Language = require('../models/language'),
    Languages;

Languages = Base.Collection.extend({
    model: Language,
    findAll: function(){
        return this.fetch();
    }, 
    findOneByCode: function (code) {
        return this.where({code: code}).fet();
    }
});

module.exports = Base.collection('Languages', Languages)
