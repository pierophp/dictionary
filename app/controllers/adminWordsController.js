var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var LanguageRepository = require('../repository/LanguageRepository');
var WordRepository = require('../repository/WordRepository');
var TranslationRepository = require('../repository/TranslationRepository');
var TranslationWordRepository = require('../repository/TranslationWordRepository');

router.post('/save', function (req, res) {

    var fromLangPromise = LanguageRepository.findOneByCode(req.body.fromLang);
    var toLangPromise = LanguageRepository.findOneByCode(req.body.toLang);
    var word = req.body.word.trim();
    var type = req.body.type.trim();

    Promise.join(fromLangPromise, toLangPromise, function (fromLanguage, toLanguage) {

        /**
         * SAVE FROM LANGUAGE WORD
         */
        WordRepository.save({
            text: word,
            type: type,
            language_id: fromLanguage.id
        })
            /**
             * SAVE FROM LANGUAGE TRANSLATION
             */
            .then(function (wordEntity) {
                return TranslationRepository.save({
                    word_id: wordEntity.id,
                    language_id: toLanguage.id,
                    observation: req.body.observation.trim()
                })
            })
            .then(function (translationEntity) {

                let translationWordsIds = [];
                let translationPromisses = [];

                for (translation of req.body.translations) {

                    /**
                     * SAVE TO LANGUAGE WORD
                     */
                    let translationPromisse = WordRepository.save({
                        text: translation.trim(),
                        type: type,
                        language_id: toLanguage.id

                    })
                        /**
                         * SAVE TRANSLATION WORD
                         */
                        .then(function (toWordEntity) {
                            return TranslationWordRepository.save({
                                word_id: toWordEntity.id,
                                translation_id: translationEntity.id,
                            });

                        })
                        .then(function (response) {
                            translationWordsIds.push(response.id);
                            console.log('Success');
                        });

                    translationPromisses.push(translationPromisse);
                }

                Promise.all(translationPromisses)
                    .then(function () {

                        TranslationWordRepository.deleteRemaining(translationEntity.id, translationWordsIds)
                            .then(function (response) {
                                res.send(JSON.stringify({ success: true }));
                            });


                    })
                    .catch(function (error) {
                        console.log('Error:', error);
                        res.send(JSON.stringify({ success: false }));
                    });


            });

    });

});

router.post('/search', function (req, res) {

    let query = WordRepository.findByForm(req.body.form);
    let queryCount = query.clone()

    queryCount.first().count('id as total').then((result) => {

        let currentPage = req.body.pagination.current_page;
        let perPage = req.body.pagination.per_page;

        query.offset((currentPage * perPage) - perPage);
        query.limit(req.body.pagination.per_page);
        query.orderBy('text');
        query.then((words) => {
            res.send(JSON.stringify({
                success: true,
                data: {
                    items: words,
                    total: result.total
                }
            }));
        });
    });
});

router.post('/find', function (req, res) {

    let language = 3;

    WordRepository.findOneById(req.body.id)
        .then((word) => {
            this.word = word;
            return TranslationRepository.findOneByLanguageAndWord(language, word.id);
        })
        .then((translation) => {
            this.translation = translation;
            return WordRepository.findByTranslation(translation.id);
        })
        .then((translationsWords) => {
            res.send(JSON.stringify({
                success: true,
                data: {
                    word: this.word,
                    translation: this.translation,
                    translationsWords: translationsWords
                }
            }));
        });
});

router.post('/delete', function (req, res) {

    let language = 3;

    WordRepository.findOneById(req.body.id)
        .then((word) => {
            this.word = word;
            return TranslationRepository.findOneByLanguageAndWord(language, word.id);
        })
        .then((translation) => {
            this.translation = translation;
            return WordRepository.findByTranslation(translation.id);
        })
        .then((translationsWords) => {
            res.send(JSON.stringify({
                success: true,
                data: {
                    word: this.word,
                    translation: this.translation,
                    translationsWords: translationsWords
                }
            }));
        });
});

module.exports = router;