
//require("http").createServer(function (req, res) {
//    res.end("Hello from server started by Electron app!");
//}).listen(9000);


var express = require('express');
var app = express();

app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/test', require('./routes/test'));
app.use('/letters', require('./routes/letters'));
app.use('/words', require('./routes/words'));



app.listen(9000, function () {
    console.log('Example app listening on port 9000!');
});

