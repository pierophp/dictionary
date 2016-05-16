
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

app.listen(9000, function () {
    console.log('Example app listening on port 9000!');
});

