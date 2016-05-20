
//require("http").createServer(function (req, res) {
//    res.end("Hello from server started by Electron app!");
//}).listen(9000);


var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/letters', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']));
});

app.get('/words', function (req, res) {
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
    },{
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

app.listen(9000, function () {
    console.log('Example app listening on port 9000!');
});

