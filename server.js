var express = require('express');
var path = require('path');

var app = express();

var port = 4000;

app.listen(port);
app.use(express.static('public'));



app.get('/', function (req, res) {
    res.sendFile(path.join(_dirname + 'public' + 'index.html'))
});