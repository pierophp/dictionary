var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    var Languages = require('./collections/languages');
    var languages = new Languages();
    languages.findAll().then(function (languages) {

        languages.models.forEach(function (language) {
            
            //language.set('name', 'Test');
            
            console.log(language.get('code'));
            console.log(language.get('name'));
            
            //language.save();
        });


        //for(language in languages){
        //    console.log(language.get('id'));    
        //}

    });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(['Hi']));


});

module.exports = router;