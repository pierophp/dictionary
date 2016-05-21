var express = require('express');
var router = express.Router();

router.get('/words', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
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