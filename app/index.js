/// <reference path='../typings/index.d.ts' />

var express = require('express');
var app = express();
require('./services/objection');

app.use(express.static('public'));
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
});

app.use('/', require('./controllers/indexController'));
app.use('/letters', require('./controllers/lettersController'));
app.use('/words', require('./controllers/wordsController'));

app.listen(9000, function() {
    console.log('Example app listening on port 9000!');
});