var TranslationModel = require('../models/Translation');
var TranslationRepository = module.exports;

TranslationRepository.findOneByLanguageAndWord = function (language, word) {
    return TranslationModel
        .query()
        .where('language_id', '=', language)
        .andWhere('word_id', '=', word)
        .first();
};

TranslationRepository.save = function (translation) {

    return new Promise(function (resolve, reject) {

        TranslationRepository.findOneByLanguageAndWord(translation.language_id, translation.word_id)

            .then(function (entity) {

                if (entity) {

                    TranslationModel
                        .query()
                        .patchAndFetchById(entity.id, { observation: translation.observation, updated_at: new Date() })
                        .then(function (entity) {
                            resolve(entity);
                        })
                        .catch(function (err) {
                            reject(err);
                        });
                        
                    return;
                }

                translation.created_at = new Date();

                TranslationModel
                    .query()
                    .insert(translation)
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