var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var LanguageRepository = require('../repository/LanguageRepository');
var WordRepository = require('../repository/WordRepository');
var TranslationRepository = require('../repository/TranslationRepository');

router.post('/create', function (req, res) {

    var fromLangPromise = LanguageRepository.findOneByCode(req.body.fromLang);
    var toLangPromise = LanguageRepository.findOneByCode(req.body.toLang);
    var word = req.body.word.trim();
    var type = req.body.type.trim();

    Promise.join(fromLangPromise, toLangPromise, function (fromLanguage, toLanguage) {

        WordRepository.save({
            text: word,
            type: type,
            language_id: fromLanguage.id
        }).then(function (wordEntity) {

            for (translation of req.body.translations) {
                WordRepository.save({
                    text: translation.trim(),
                    type: type,
                    language_id: toLanguage.id
                }).then(function (response) {


                });
            }


            TranslationRepository.save({
                word_id: wordEntity.id,
                language_id: toLanguage.id,
                observation: req.body.observation.trim()
            }).then(function (response) {


            });

        });



        //res.setHeader('Content-Type', 'application/json');
        //res.send(JSON.stringify({ word: req.body.word }));

    });



});

module.exports = router;