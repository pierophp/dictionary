/// <reference path='../typings/index.d.ts' />

var express = require('express');
var app = express();

app.use(express.static('public'));

app.use('/', require('./controllers/indexController'));
app.use('/test', require('./controllers/testController'));
app.use('/letters', require('./controllers/lettersController'));
app.use('/words', require('./controllers/wordsController'));

app.listen(9000, function() {
    console.log('Example app listening on port 9000!');
});