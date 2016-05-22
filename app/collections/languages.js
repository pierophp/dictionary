"use strict";

var Base  = require('./base'),
    Language = require('../models/language'),
    Languages;

Languages = Base.Collection.extend({
    model: Language,
    findAll: function(){
        return Language.where({}).fetchAll();
    }, 
    findOneByCode: function (code) {
        return Language.where({code: code}).fetch();
    }
});

module.exports = Base.collection('Languages', Languages)
