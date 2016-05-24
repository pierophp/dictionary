    
var bookshelf  = require('../services').bookshelf;

var language = require;
var languageRepository = module.exports;

languageRepository.findAll = function (code) {
    
    console.log(bookshelf.model('Language'));
    
    return bookshelf.model('Language').fetch();
};

languageRepository.findOneByCode = function (code) {
    return bookshelf.model('Language').where({code: code}).fetch();
};
