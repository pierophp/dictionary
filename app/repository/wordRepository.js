    
var bookshelf  = require('../services').bookshelf;

var wordRepository = module.exports;

wordRepository.findOneByCode = function (language) {
    return bookshelf.model('Word').where({language: language.get('id')}).fetch();
};
