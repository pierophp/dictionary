var Word = require('../models/Word');
var WordRepository = module.exports;

WordRepository.findByLanguageAndLetter = function (language, letter) {
    return Word
      .query()
      .where('language_id', '=', language.id)
      .eager('[translations, translations.translationWords, translations.translationWords.word]')
      .andWhere('text', 'LIKE', letter + '%');
};
