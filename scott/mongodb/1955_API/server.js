var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); 

require('./server/config/mongoose.js');
var route_setter = require('./server/config/routes.js');
route_setter(app);

app.listen(8000, () => {
	console.log('listening on 8000');
});