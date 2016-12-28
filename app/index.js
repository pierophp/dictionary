/// <reference path='../typings/index.d.ts' />

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

require('./services/objection');

//app.use(express.static('public'));
app.use(express.static(__dirname + '/../../dictionary-ui/dist'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    return next();
});

require('./routes')(app);

app.listen(9000, function () {
    console.log('App listening on port 9000!');
});