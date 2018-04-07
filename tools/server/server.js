var express = require('express');

var PORT = process.env.PORT;
var IP = process.env.IP;

var app = express();
app.use('/', express.static(__dirname + '/'));
app.listen(PORT, IP);
