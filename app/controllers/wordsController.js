var express = require('express');
var router = express.Router();
var LanguageRepository = require('../repository/LanguageRepository');
var WordRepository = require('../repository/WordRepository');

router.get('/:type/:fromLang/:toLang', function (req, res) {

    res.setHeader('Content-Type', 'application/json');

    let fromLangCode = req.params.fromLang;
    let toLangCode = req.params.toLang;
    let type = req.params.type;
    let letter = req.query.letter;
    let _words = [];

    LanguageRepository.findOneByCode(fromLangCode).then(function (fromLanguage) {

        LanguageRepository.findOneByCode(toLangCode).then(function (toLanguage) {

            WordRepository.findByLanguageAndTypeAndLetter(fromLanguage, toLanguage, type, letter).then(function (words) {

                words.forEach(function (word) {

                    let _observation = '';
                    let _translationWords = [];

                    if (word.translations[0]) {

                        let translation = word.translations[0];

                        _observation = translation.observation;

                        translation.translationWords.forEach(function (translationWord) {

                            _translationWords.push({
                                text: translationWord.word.text
                            });

                        });
                    }

                    _words.push({
                        text: word.text,
                        translation: {
                            observation: _observation,
                            words: _translationWords
                        }
                    });
                });

                res.send(JSON.stringify(_words));
            });

        });

    });
});

module.exports = router;