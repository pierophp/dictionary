var TranslationWordModel = require('../models/TranslationWord');
var TranslationWordRepository = module.exports;

TranslationWordRepository.findOneByTranslationAndWord = function (translation, word) {
    return TranslationWordModel
        .query()
        .where('translation_id', '=', translation)
        .andWhere('word_id', '=', word)
        .first();
};

TranslationWordRepository.deleteRemaining = function (translation, translationWordsIds) {

    return TranslationWordModel
        .query()
        .delete()
        .whereNotIn('id', translationWordsIds)
        .andWhere('translation_id', '=', translation);
};

TranslationWordRepository.save = function (translationWord) {

    return new Promise(function (resolve, reject) {

        TranslationWordRepository.findOneByTranslationAndWord(translationWord.translation_id, translationWord.word_id)

            .then(function (entity) {

                if (entity) {
                    resolve(entity);
                    return;
                }

                translationWord.created_at = new Date();

                TranslationWordModel
                    .query()
                    .insert(translationWord)
                    .then(function (entity) {
                        resolve(entity);
                    })
                    .catch(function (err) {
                        reject(err);
                    });

            })
            .catch(function (err) {
                reject(err);
            });
    });
};