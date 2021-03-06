var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var route_setter = require('./server/config/routes.js');
route_setter(app);

app.listen(8000, () => {
    console.log("listening on port 8000");
});