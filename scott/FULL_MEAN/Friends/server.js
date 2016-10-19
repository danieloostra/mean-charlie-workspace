var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');

var route_setter = require('./server/config/routes.js');
route_setter(app);

app.listen(8000, () => {
	console.log('listening 8000');
});