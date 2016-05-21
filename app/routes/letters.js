var express = require('express');
var router = express.Router();

router.get('/letters', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']));
});

module.exports = router;