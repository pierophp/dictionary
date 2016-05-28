var Word = require('../models/Word');
var WordRepository = module.exports;

WordRepository.findByLanguageAndTypeAndLetter = function (fromLanguage, toLanguage, type, letter) {
  return Word
    .query()
    .where('language_id', '=', fromLanguage.id)
    .andWhere('text', 'LIKE', letter + '%')
    .eager('[translations, translations.translationWords, translations.translationWords.word]')
    .context({
      onBuild: function (builder) {

        var table = builder.modelClass().tableName;

        if (table == `translation`) {
          builder.andWhere('language_id', '=', toLanguage.id);
        }
        
        if (table == `translation_word`) {
          builder.orderBy('priority', 'DESC');
        }

      }
    });
};
