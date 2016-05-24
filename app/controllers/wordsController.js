var express = require('express');
var router = express.Router();

var languageRepository = require('../repository/languageRepository');
var wordRepository = require('../repository/wordRepository');

router.get('/:lang', function (req, res) {

    res.setHeader('Content-Type', 'application/json');

    let langCode = req.params.lang;
    let letter = req.query.letter;

    let word = require('../models/word');
    let language = languageRepository.findOneByCode(langCode).then(function (language) {

        word = wordRepository.findByLanguageDecorator(word, language);
        word = wordRepository.findByLetterDecorator(word, letter);

        word.fetchAll().then(function (words) {
            words.models.forEach(function (word) {
                console.log(word.get('text'));
            });
        });

    });



    
    var _words = [{
        text: 'Teste',
        translation: {
            observation: 'Observation test',
            words: [
                {
                    text: 'Loren'
                }, {
                    text: 'Ipsum'
                }
            ]
        },
    }, {
            text: 'Teste 02',
            translation: {
                observation: 'Observation test 02',
                words: [
                    {
                        text: 'Dolor'
                    }
                ]
            },
        }];
    res.send(JSON.stringify(_words));
});

module.exports = router;