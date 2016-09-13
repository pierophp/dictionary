var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var LanguageRepository = require('../repository/LanguageRepository');

router.get('/all', function (req, res) {

    LanguageRepository.findAll()
        .then((languages) => {
            res.send(JSON.stringify(
                {
                    success: true,
                    data: languages
                }
            ));
        });
});

module.exports = router;