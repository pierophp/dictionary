var express = require('express');
var router = express.Router();
var languageRepository = require('../repository/languageRepository');

router.get('/', function (req, res) {
    
    languageRepository.findAll().then(function (languages) {

        languages.models.forEach(function (language) {
            
            //language.set('name', 'Test');
            
            console.log(language.get('code'));
            console.log(language.get('name'));
            
            //language.save();
        });

    });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(['Hi']));


});

router.get('/lang/:lang', function (req, res) {
    
    let lang =  req.params.lang;
    
    languageRepository.findOneByCode(lang).then(function (language) {
        
        console.log(language.get('code'));
        console.log(language.get('name'));
        
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(language));
    });

    
});

module.exports = router;