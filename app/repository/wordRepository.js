
var word = require('../models/language');
var wordRepository = module.exports;

wordRepository.findByLanguageDecorator = function (word, language) {
    return word.where('language_id', '=', language.get('id'));
};

wordRepository.findByLetterDecorator = function (word, letter) {
    return word.where('text', 'LIKE', letter + '%');
};