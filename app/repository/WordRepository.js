var WordModel = require('../models/Word');
var WordRepository = module.exports;

WordRepository.findByLanguageAndTypeAndLetter = function (fromLanguage, toLanguage, type, letter) {
    return WordModel
        .query()
        .where('language_id', '=', fromLanguage.id)
        .andWhere('text', 'LIKE', letter + '%')
        .andWhere('type', '=', type)
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

WordRepository.findOneByLanguageAndTypeAndText = function (language, type, text) {
    return WordModel
        .query()
        .where('language_id', '=', language.id)
        .andWhere('text', '=', text)
        .andWhere('type', '=', type)
        .first();
};

WordRepository.save = function (word) {

    return new Promise(function (resolve, reject) {

        WordRepository.findOneByLanguageAndTypeAndText(word.language_id, word.type, word.text)
            .then(function (entity) {

                if (entity) {
                    resolve(entity);
                    return;
                }

                word.created_at = new Date();

                WordModel
                    .query()
                    .insert(word)
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

WordRepository.findByForm = function (form) {

    let query = WordModel.query();

    if (form.word) {
        query.andWhere('text', 'LIKE', form.word + '%');
    }

    if (form.type) {
        query.andWhere('type', '=', form.type);
    }

    if (form.language_id) {
        query.andWhere('language_id', '=', form.language_id);
    }

    return query;
};