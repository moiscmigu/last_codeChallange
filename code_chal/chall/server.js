var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var index = require("./modules/index");
var message = require('./modules/message');
var mongoose = require('mongoose');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port, function() {
    console.log('Connected to port:', port);
});

app.use('/', index);
app.use('/message', message);
